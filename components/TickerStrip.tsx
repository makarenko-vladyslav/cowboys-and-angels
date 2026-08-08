"use client";

import { useLocale } from '@/lib/i18n';

export default function TickerStrip() {
  const { t } = useLocale();
  const tickerItems = (t('ticker') as string[]) || [];

  return (
    <div className="bg-accent text-bg-dark py-3.5 overflow-hidden border-y border-accent-hover select-none">
      <div className="animate-ticker flex whitespace-nowrap items-center gap-8">
        {[...tickerItems, ...tickerItems, ...tickerItems].map((item, idx) => (
          <div key={idx} className="flex items-center gap-8 font-display font-bold uppercase tracking-wider text-xs sm:text-sm">
            <span>{item}</span>
            <span className="text-bg-dark/40 font-normal">/</span>
          </div>
        ))}
      </div>
    </div>
  );
}
