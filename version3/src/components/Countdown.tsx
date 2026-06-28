import { useEffect, useState } from "react";

import { useLanguage } from "../hooks/useLanguage";

interface CountdownProps {
  targetDate: string;
}

export function Countdown({
  targetDate,
}: CountdownProps) {
  const { t } = useLanguage();

  const calculate = () => {
    const diff =
      new Date(targetDate).getTime() -
      new Date().getTime();

    if (diff <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return {
      days: Math.floor(diff / 86400000),

      hours: Math.floor(
        (diff % 86400000) / 3600000
      ),

      minutes: Math.floor(
        (diff % 3600000) / 60000
      ),

      seconds: Math.floor(
        (diff % 60000) / 1000
      ),
    };
  };

  const [time, setTime] = useState(calculate());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(calculate());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const items = [
    [t.hero.countdown.days, time.days],
    [t.hero.countdown.hours, time.hours],
    [t.hero.countdown.minutes, time.minutes],
    [t.hero.countdown.seconds, time.seconds],
  ];

  return (
    <div>
      {/* Desktop */}

      <div
        className="
          hidden
          md:flex

          gap-4
          justify-start
        "
      >
        {items.map(([label, value]) => (
          <div
            key={String(label)}
            className="
              min-w-[72px]

              rounded-xl

              bg-[var(--color-paper)]

              px-4
              py-3

              text-center

              shadow-sm
            "
          >
            <div
              className="
                text-xl
                font-bold
              "
            >
              {value}
            </div>

            <div
              className="
                text-xs
                text-[var(--color-muted)]
              "
            >
              {label}
            </div>
          </div>
        ))}
      </div>

      {/* Mobile */}

      <div
        className="
          flex
          justify-between
          gap-2

          md:hidden
        "
      >
        {items.map(([label, value]) => (
          <div
            key={String(label)}
            className="
              flex-1

              rounded-xl

              bg-[var(--color-paper)]

              py-3
              px-2

              text-center

              shadow-sm
            "
          >
            <div
              className="
                text-2xl
                font-semibold
                tracking-tight
                leading-none
              "
            >
              {value}
            </div>

            <div
              className="
                mt-2

                text-[10px]
                uppercase
                tracking-[0.18em]
                font-medium

                text-[var(--color-muted)]
              "
            >
              {label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}