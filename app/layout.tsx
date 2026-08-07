import { SmoothScroll } from "@/components/smooth-scroll";
import type { Metadata } from "next";
import { LocaleProvider } from "@/lib/i18n";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cowboys and Angels — Салон та Барбершоп у Тронгеймі (Solsiden & Moholt)",
  description: "Салон-барбершоп у Тронгеймі: чоловічі стрижки, контурування бороди гарячим рушником, складне жіноче фарбування Foilage та Balayage. Онлайн-запис без реєстрації.",
  keywords: ["барбершоп Тронгейм", "перукарня Solsiden", "Herreklipp Moholt", "Foilage Trondheim", "Cowboys and Angels", "Skjeggtrim"],
  icons: { icon: '/icon.svg' },
  openGraph: {
    title: "Cowboys and Angels — Barber & Hair Studio Trondheim",
    description: "Класичний барберінґ та сучасна колористика у Тронгеймі. Локації Solsiden та Moholt.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uk">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,500;0,600;0,700;0,800;1,500;1,700&family=Libre+Franklin:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased selection:bg-[hsl(28_85%_48%)] selection:text-white">
        <LocaleProvider>{children}</LocaleProvider>
      <SmoothScroll /></body>
    </html>
  );
}
