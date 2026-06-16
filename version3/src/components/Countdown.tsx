import { useEffect, useState } from "react";

interface CountdownProps {
  targetDate: string;
}

export function Countdown({
  targetDate,
}: CountdownProps) {
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
    ["Dias", time.days],
    ["Horas", time.hours],
    ["Min", time.minutes],
    ["Seg", time.seconds],
  ];

  return (
    <div
      className="
        flex
        gap-4
        flex-wrap
        justify-center
        lg:justify-start
      "
    >
      {items.map(([label, value]) => (
        <div
          key={label}
          className="
            bg-[var(--color-paper)]
            rounded-xl
            px-4
            py-3
            min-w-[72px]
            text-center
            shadow-md
          "
        >
          <div className="text-xl font-bold">
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
  );
}