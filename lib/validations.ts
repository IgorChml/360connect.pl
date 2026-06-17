import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, "Imię i nazwisko jest wymagane"),
  email: z.string().email("Podaj prawidłowy adres email"),
  phone: z.string().optional(),
  company: z.string().min(1, "Nazwa firmy jest wymagana"),
  budget: z.string().min(1, "Wybierz budżet"),
  message: z.string().min(10, "Opis projektu musi mieć min. 10 znaków"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
