"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Trophy, Play, RotateCcw, Pause, ArrowUp, ArrowDown, ArrowLeft, ArrowRight } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";
import SectionLabel from "@/components/ui/SectionLabel";

type Cell = { x: number; y: number };
type ScoreEntry = { name: string; score: number; date: number };
type Status = "idle" | "playing" | "paused" | "over";

const GRID = 18;
const CANVAS = 360;
const CELL = CANVAS / GRID;
const SCORES_KEY = "snake360_scores";
const NAME_KEY = "snake360_name";
const MAX_SCORES = 8;

const COLORS = {
  bg: "#0d0d12",
  grid: "rgba(255,255,255,0.04)",
  food: "#FF4F1F",
  head: "#FF6A3D",
  body: "#E03800",
};

function loadScores(): ScoreEntry[] {
  try {
    const raw = localStorage.getItem(SCORES_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export default function SnakeGame() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const snakeRef = useRef<Cell[]>([]);
  const dirRef = useRef<Cell>({ x: 1, y: 0 });
  const queueRef = useRef<Cell[]>([]);
  const foodRef = useRef<Cell>({ x: 0, y: 0 });
  const loopRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const eatenRef = useRef(0);
  const scoreRef = useRef(0);
  const statusRef = useRef<Status>("idle");

  const [status, setStatus] = useState<Status>("idle");
  const [score, setScore] = useState(0);
  const [name, setName] = useState("");
  const [scores, setScores] = useState<ScoreEntry[]>([]);
  const [lastRank, setLastRank] = useState<number | null>(null);
  const [nameError, setNameError] = useState(false);

  const setBothStatus = useCallback((s: Status) => {
    statusRef.current = s;
    setStatus(s);
  }, []);

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.fillStyle = COLORS.bg;
    ctx.fillRect(0, 0, CANVAS, CANVAS);

    ctx.strokeStyle = COLORS.grid;
    ctx.lineWidth = 1;
    for (let i = 1; i < GRID; i++) {
      ctx.beginPath();
      ctx.moveTo(i * CELL, 0);
      ctx.lineTo(i * CELL, CANVAS);
      ctx.moveTo(0, i * CELL);
      ctx.lineTo(CANVAS, i * CELL);
      ctx.stroke();
    }

    const roundCell = (c: Cell, color: string, inset: number) => {
      const x = c.x * CELL + inset;
      const y = c.y * CELL + inset;
      const s = CELL - inset * 2;
      ctx.fillStyle = color;
      ctx.beginPath();
      if (ctx.roundRect) ctx.roundRect(x, y, s, s, 4);
      else ctx.rect(x, y, s, s);
      ctx.fill();
    };

    // jedzenie
    const f = foodRef.current;
    ctx.shadowColor = COLORS.food;
    ctx.shadowBlur = 12;
    roundCell(f, COLORS.food, 3);
    ctx.shadowBlur = 0;

    // wąż
    const snake = snakeRef.current;
    snake.forEach((c, i) => roundCell(c, i === 0 ? COLORS.head : COLORS.body, 1.5));
  }, []);

  const placeFood = useCallback(() => {
    const snake = snakeRef.current;
    let cell: Cell;
    do {
      cell = { x: Math.floor(Math.random() * GRID), y: Math.floor(Math.random() * GRID) };
    } while (snake.some((c) => c.x === cell.x && c.y === cell.y));
    foodRef.current = cell;
  }, []);

  const saveScore = useCallback(() => {
    const entry: ScoreEntry = { name: name.trim().slice(0, 16) || "Anonim", score: scoreRef.current, date: Date.now() };
    const next = [...loadScores(), entry]
      .sort((a, b) => b.score - a.score || a.date - b.date)
      .slice(0, MAX_SCORES);
    try {
      localStorage.setItem(SCORES_KEY, JSON.stringify(next));
    } catch {
      /* localStorage niedostępny */
    }
    setScores(next);
    const rank = next.findIndex((e) => e === entry);
    setLastRank(entry.score > 0 && rank !== -1 ? rank + 1 : null);
  }, [name]);

  const stopLoop = useCallback(() => {
    if (loopRef.current) {
      clearTimeout(loopRef.current);
      loopRef.current = null;
    }
  }, []);

  const gameOver = useCallback(() => {
    stopLoop();
    setBothStatus("over");
    saveScore();
    draw();
  }, [stopLoop, setBothStatus, saveScore, draw]);

  const tick = useCallback(() => {
    if (queueRef.current.length) dirRef.current = queueRef.current.shift()!;
    const dir = dirRef.current;
    const snake = snakeRef.current;
    const head = snake[0];
    const next: Cell = { x: head.x + dir.x, y: head.y + dir.y };

    if (next.x < 0 || next.y < 0 || next.x >= GRID || next.y >= GRID) {
      gameOver();
      return;
    }
    const willEat = next.x === foodRef.current.x && next.y === foodRef.current.y;
    const body = willEat ? snake : snake.slice(0, -1);
    if (body.some((c) => c.x === next.x && c.y === next.y)) {
      gameOver();
      return;
    }

    snake.unshift(next);
    if (willEat) {
      eatenRef.current += 1;
      scoreRef.current += 10;
      setScore(scoreRef.current);
      placeFood();
    } else {
      snake.pop();
    }
    draw();
  }, [draw, gameOver, placeFood]);

  const runLoop = useCallback(() => {
    stopLoop();
    const step = () => {
      if (statusRef.current !== "playing") return;
      tick();
      if (statusRef.current === "playing") {
        const speed = Math.max(70, 150 - eatenRef.current * 6);
        loopRef.current = setTimeout(step, speed);
      }
    };
    const speed = Math.max(70, 150 - eatenRef.current * 6);
    loopRef.current = setTimeout(step, speed);
  }, [stopLoop, tick]);

  const startGame = useCallback(() => {
    if (!name.trim()) {
      setNameError(true);
      return;
    }
    setNameError(false);
    try {
      localStorage.setItem(NAME_KEY, name.trim());
    } catch {
      /* ignore */
    }
    snakeRef.current = [
      { x: 9, y: 9 },
      { x: 8, y: 9 },
      { x: 7, y: 9 },
    ];
    dirRef.current = { x: 1, y: 0 };
    queueRef.current = [];
    eatenRef.current = 0;
    scoreRef.current = 0;
    setScore(0);
    setLastRank(null);
    placeFood();
    setBothStatus("playing");
    runLoop();
  }, [name, placeFood, runLoop, setBothStatus]);

  const togglePause = useCallback(() => {
    if (statusRef.current === "playing") {
      setBothStatus("paused");
      stopLoop();
    } else if (statusRef.current === "paused") {
      setBothStatus("playing");
      runLoop();
    }
  }, [setBothStatus, stopLoop, runLoop]);

  const enqueue = useCallback((nd: Cell) => {
    if (statusRef.current !== "playing") return;
    const q = queueRef.current;
    const last = q.length ? q[q.length - 1] : dirRef.current;
    if (nd.x === -last.x && nd.y === -last.y) return; // zawracanie
    if (nd.x === last.x && nd.y === last.y) return; // bez zmiany
    if (q.length >= 2) return;
    q.push(nd);
  }, []);

  // wczytanie ksywki + wyników i pierwszy render planszy.
  // Odczyt z localStorage musi nastąpić po montażu (SSR nie ma window),
  // więc świadomie ustawiamy stan w efekcie — bez ryzyka hydration mismatch.
  useEffect(() => {
    /* eslint-disable react-hooks/set-state-in-effect */
    setScores(loadScores());
    try {
      const saved = localStorage.getItem(NAME_KEY);
      if (saved) setName(saved);
    } catch {
      /* ignore */
    }
    /* eslint-enable react-hooks/set-state-in-effect */
    draw();
    return () => stopLoop();
  }, [draw, stopLoop]);

  // sterowanie klawiaturą
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const k = e.key.toLowerCase();
      const map: Record<string, Cell> = {
        arrowup: { x: 0, y: -1 }, w: { x: 0, y: -1 },
        arrowdown: { x: 0, y: 1 }, s: { x: 0, y: 1 },
        arrowleft: { x: -1, y: 0 }, a: { x: -1, y: 0 },
        arrowright: { x: 1, y: 0 }, d: { x: 1, y: 0 },
      };
      if (k === " ") {
        if (statusRef.current === "playing" || statusRef.current === "paused") {
          e.preventDefault();
          togglePause();
        }
        return;
      }
      if (map[k]) {
        if (statusRef.current === "playing") e.preventDefault();
        enqueue(map[k]);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [enqueue, togglePause]);

  const best = scores[0]?.score ?? 0;

  const dpad: { dir: Cell; icon: typeof ArrowUp; label: string; col: string }[] = [
    { dir: { x: 0, y: -1 }, icon: ArrowUp, label: "Góra", col: "col-start-2" },
    { dir: { x: -1, y: 0 }, icon: ArrowLeft, label: "Lewo", col: "col-start-1 row-start-2" },
    { dir: { x: 0, y: 1 }, icon: ArrowDown, label: "Dół", col: "col-start-2 row-start-2" },
    { dir: { x: 1, y: 0 }, icon: ArrowRight, label: "Prawo", col: "col-start-3 row-start-2" },
  ];

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden" style={{ background: "var(--bg-surface)" }}>
      <div className="ambient-glow opacity-40" />
      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <SectionLabel>Przerwa na grę</SectionLabel>
          <h2 className="text-h2 text-text-primary mt-4">Zagraj w Snake 360</h2>
          <p className="text-text-secondary mt-4 max-w-2xl mx-auto">
            Mała rozgrywka, zdrowa rywalizacja. Wpisz ksywkę, łap punkty i powalcz o miejsce w tabeli mistrzów.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_340px] items-start">
          {/* ── Plansza ── */}
          <GlassCard variant="raised" className="p-5 sm:p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex gap-6">
                <div>
                  <p className="text-caption text-text-muted">Wynik</p>
                  <p className="text-2xl font-bold text-text-primary" style={{ fontFamily: "var(--font-tight)" }}>{score}</p>
                </div>
                <div>
                  <p className="text-caption text-text-muted">Rekord</p>
                  <p className="text-2xl font-bold text-signal" style={{ fontFamily: "var(--font-tight)" }}>{best}</p>
                </div>
              </div>
              <div className="flex gap-2">
                {(status === "playing" || status === "paused") && (
                  <Button variant="outline" size="sm" onClick={togglePause} aria-label={status === "paused" ? "Wznów" : "Pauza"}>
                    {status === "paused" ? <Play size={16} /> : <Pause size={16} />}
                  </Button>
                )}
                {status !== "idle" && (
                  <Button variant="outline" size="sm" onClick={startGame} aria-label="Zagraj od nowa">
                    <RotateCcw size={16} />
                  </Button>
                )}
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[360px]">
              <canvas
                ref={canvasRef}
                width={CANVAS}
                height={CANVAS}
                className="block w-full rounded-xl border border-border-subtle touch-none"
                style={{ aspectRatio: "1 / 1", imageRendering: "pixelated" }}
              />

              {status !== "playing" && (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 rounded-xl bg-black/65 backdrop-blur-sm text-center p-6">
                  {status === "idle" && (
                    <>
                      <p className="text-text-secondary text-sm max-w-xs">
                        Sterowanie: strzałki / WASD, spacja = pauza. Na telefonie użyj przycisków poniżej.
                      </p>
                      <Button variant="primary" onClick={startGame}>
                        <Play size={18} /> Start
                      </Button>
                    </>
                  )}
                  {status === "paused" && (
                    <>
                      <p className="text-h3 text-text-primary">Pauza</p>
                      <Button variant="primary" onClick={togglePause}>
                        <Play size={18} /> Wznów
                      </Button>
                    </>
                  )}
                  {status === "over" && (
                    <>
                      <p className="text-h3 text-text-primary">Koniec gry</p>
                      <p className="text-text-secondary">
                        Twój wynik: <span className="text-signal font-bold">{score}</span>
                        {lastRank && <> — miejsce #{lastRank} w tabeli! 🎉</>}
                      </p>
                      <Button variant="primary" onClick={startGame}>
                        <RotateCcw size={18} /> Zagraj ponownie
                      </Button>
                    </>
                  )}
                </div>
              )}
            </div>

            {/* D-pad (mobile / dotyk) */}
            <div className="mt-5 grid grid-cols-3 grid-rows-2 gap-2 w-44 mx-auto lg:hidden">
              {dpad.map(({ dir, icon: Icon, label, col }) => (
                <button
                  key={label}
                  type="button"
                  aria-label={label}
                  onClick={() => enqueue(dir)}
                  className={`${col} inline-flex items-center justify-center h-12 rounded-lg border border-border-default bg-bg-elevated text-text-primary active:bg-signal active:text-white transition-colors touch-manipulation`}
                >
                  <Icon size={20} />
                </button>
              ))}
            </div>
          </GlassCard>

          {/* ── Ksywka + tabela mistrzów ── */}
          <div className="space-y-6">
            <GlassCard className="p-6">
              <label htmlFor="snake-name" className="block text-sm text-text-secondary mb-1.5">
                Twoja ksywka
              </label>
              <div className="flex gap-2">
                <input
                  id="snake-name"
                  value={name}
                  maxLength={16}
                  onChange={(e) => {
                    setName(e.target.value);
                    if (e.target.value.trim()) setNameError(false);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && status !== "playing") startGame();
                  }}
                  placeholder="np. RocketMan"
                  aria-invalid={nameError || undefined}
                  className="flex-1 min-h-[44px] px-4 py-2 rounded-xl text-sm text-text-primary placeholder-text-muted outline-none transition-colors focus:border-signal"
                  style={{ background: "var(--bg-elevated)", border: `1px solid ${nameError ? "var(--error)" : "var(--border-default)"}` }}
                />
                {status !== "playing" && (
                  <Button variant="primary" size="sm" onClick={startGame}>
                    <Play size={16} />
                  </Button>
                )}
              </div>
              {nameError && (
                <p role="alert" className="text-xs mt-1" style={{ color: "var(--error)" }}>
                  Wpisz ksywkę, żeby zacząć.
                </p>
              )}
            </GlassCard>

            <GlassCard className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <Trophy size={18} className="text-signal" />
                <h3 className="text-lg font-semibold text-text-primary" style={{ fontFamily: "var(--font-tight)" }}>
                  Tabela mistrzów
                </h3>
              </div>
              {scores.length === 0 ? (
                <p className="text-sm text-text-muted">Brak wyników — bądź pierwszy na liście!</p>
              ) : (
                <ol className="space-y-2">
                  {scores.map((s, i) => (
                    <li
                      key={`${s.name}-${s.date}`}
                      className="flex items-center justify-between gap-3 text-sm rounded-lg px-3 py-2"
                      style={{ background: i === 0 ? "var(--signal-subtle)" : "transparent" }}
                    >
                      <span className="flex items-center gap-3 min-w-0">
                        <span className={`w-5 text-center font-bold ${i === 0 ? "text-signal" : "text-text-muted"}`}>{i + 1}</span>
                        <span className="truncate text-text-secondary">{s.name}</span>
                      </span>
                      <span className="font-bold text-text-primary tabular-nums" style={{ fontFamily: "var(--font-tight)" }}>{s.score}</span>
                    </li>
                  ))}
                </ol>
              )}
              <p className="text-xs text-text-muted mt-4">Wyniki zapisywane lokalnie w Twojej przeglądarce.</p>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
}
