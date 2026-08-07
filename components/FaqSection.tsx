"use client";

import { useState } from "react";
import { useLocale } from "@/lib/i18n";

export default function FaqSection() {
  const { t } = useLocale();
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "Що робити, щоб фарба Foilage або Balayage не вимивалася швидко?",
      a: "Для збереження кольору використовуйте шампуні без сульфатів із захистом від вимивання. Ми в Cowboys and Angels рекомендуємо серію L'ANZA Healing Colorcare. У літній період обов'язковий UV-захист (наприклад, KEUNE Sun Shield), адже сонячні промені розщеплюють колірні пігменти.",
    },
    {
      q: "Скільки часу потрібно чекати перед миттям голови після хімічної завивки (permanent)?",
      a: "Необхідно зачекати 72 години (3 повні доби) перед першим миттям або намочуванням волосся. Також у цей період заборонено використовувати шпильки та резинки, оскільки фіксація структури триває протягом трьох діб.",
    },
    {
      q: "Як правильно доглядати за природними або завитими локонами?",
      a: "Використовуйте зволожуючі шампуні для текстурованого волосся (наприклад, KEUNE Curl Control). На вологе волосся наносьте крем або серум L'ANZA з білками кератину для чіткого розпадіння пасом без ефекту пухнастості.",
    },
    {
      q: "Як заспокоїти чутливу шкіру голови після гоління або фарбування?",
      a: "Рекомендуємо спеціалізований шампунь NECCIN Nr. 1, який знімає свербіж та почервоніння вже після 1-2 застосувань. Також чудово працює тонік KEUNE Derma Sensitive Lotion.",
    },
    {
      q: "Чи обов'язково реєструватися на сайті для онлайн-запису?",
      a: "Ні! Ми прибрали обов'язковий логін. Достатньо вказати ваше ім'я, номер телефону та обрати зручну філію (Moholt або Solsiden). Запис займає менше 30 секунд.",
    },
  ];

  return (
    <section id="faq" className="py-24 bg-[hsl(25_20%_8%)] text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-[hsl(28_85%_52%)] font-bold">
            {t("faq.kicker") as string}
          </span>
          <h2 className="font-display font-extrabold text-4xl sm:text-6xl text-white mt-2 mb-4 leading-none">
            {t("faq.title") as string}
          </h2>
          <p className="text-base text-white/70">
            {t("faq.subtitle") as string}
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white/5 border border-white/10 rounded-xl overflow-hidden transition-colors"
            >
              <button
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full p-6 text-left flex items-center justify-between gap-4 font-display font-extrabold text-xl sm:text-2xl text-white hover:text-[hsl(28_85%_52%)] uppercase"
              >
                <span>{faq.q}</span>
                <span className="text-[hsl(28_85%_52%)] font-mono text-sm px-2 py-0.5 border border-[hsl(28_85%_52%/0.4)] rounded">
                  {openIdx === idx ? "ЗАКРИТИ" : "ВІДКРИТИ"}
                </span>
              </button>

              {openIdx === idx && (
                <div className="px-6 pb-6 text-sm text-white/80 leading-relaxed border-t border-white/5 pt-4">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}