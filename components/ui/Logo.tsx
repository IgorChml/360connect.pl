interface LogoProps {
  className?: string;
}

/**
 * Sygnet marki 360 Connect (pierścień + sygnałowa kropka).
 * Pierścień dziedziczy kolor z `currentColor`, więc dopasowuje się do tła
 * (jasny na ciemnym headerze). Kropka zawsze w kolorze sygnałowym.
 */
export default function Logo({ className }: LogoProps) {
  return (
    <svg
      viewBox="0 0 300 300"
      role="img"
      aria-label="360 Connect"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fill="currentColor"
        d="M 149.390625 64.949219 C 102.933594 64.949219 65.207031 103.191406 65.207031 150.246094 C 65.207031 197.300781 103.019531 235.542969 149.390625 235.542969 C 195.761719 235.542969 233.574219 197.300781 233.574219 150.246094 C 233.574219 103.191406 195.84375 64.949219 149.390625 64.949219 Z M 149.390625 218.515625 C 112.429688 218.515625 82.316406 187.890625 82.316406 150.332031 C 82.316406 112.773438 112.429688 82.144531 149.390625 82.144531 C 186.347656 82.144531 216.464844 112.773438 216.464844 150.332031 C 216.464844 187.890625 186.347656 218.515625 149.390625 218.515625 Z M 149.390625 218.515625"
      />
      <circle cx="199.378906" cy="92.089844" r="26.91" fill="var(--signal)" />
    </svg>
  );
}
