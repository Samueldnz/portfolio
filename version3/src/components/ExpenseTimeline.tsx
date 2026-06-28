import { useMemo, useState } from "react";

import { ExpenseItem } from "./ExpenseItem";
import { ExpenseMonthTab } from "./ExpenseMonthTab";

import { useLanguage } from "../hooks/useLanguage";

import {
  monthlyExpenses,
  type MonthKey,
} from "../data/expenses";

export function ExpenseTimeline() {

  const { t } = useLanguage();

  const months = Object.entries(
    monthlyExpenses
    ) as [MonthKey, (typeof monthlyExpenses)[MonthKey]][];

    const [activeMonth, setActiveMonth] =
    useState<MonthKey>(months[0][0]);

  const activeData =
    monthlyExpenses[activeMonth];

  const monthTotal = useMemo(
    () =>
      activeData.items.reduce(
        (sum, item) => sum + item.value,
        0
      ),
    [activeData]
  );

  return (
    <div className="mt-16">
      <div className="mb-6 md:mb-8">
        <span className="pill">
          {t.expenses.timeline.subtitle}
        </span>

        <h3
          className="
            mt-4

            text-[2.2rem]
            md:text-4xl

            leading-[1.05]

            font-playfair
            font-[600]

            tracking-tight
          "
        >
          {t.expenses.timeline.title}
        </h3>
      </div>

      {/* Tabs */}

      <div
        className="
          flex
          gap-3

          overflow-x-auto

          pb-8
          px-1
          pt-1

          scrollbar-thin
          scrollbar-track-transparent
          scrollbar-thumb-black/10
          hover:scrollbar-thumb-black/20
        "
      >
        {months.map(([key]) => (
          <ExpenseMonthTab
            key={key}
            label={
              t.expenses.months[
                key as keyof typeof t.expenses.months
              ]
            }
            active={activeMonth === key}
            onClick={() =>
              setActiveMonth(key)
            }
          />
        ))}
      </div>

      {/* Summary */}

      <div
        className="
          mt-8

          bg-[var(--color-paper)]

          rounded-3xl

          p-8

          shadow-lg
        "
      >
        <div
          className="
            flex
            justify-between
            items-center
            flex-wrap
            gap-4
          "
        >
          <div>
            <p
              className="
                text-sm
                uppercase
                tracking-wider

                text-[var(--color-muted)]
              "
            >
              {
                t.expenses.months[
                  activeMonth as keyof typeof t.expenses.months
                ]
              }
            </p>

            <h4
              className="
                text-2xl
                md:text-[2.2rem]

                mt-2

                font-bold
                tracking-tight
              "
            >
              {monthTotal.toLocaleString(
                "pt-BR",
                {
                  style: "currency",
                  currency: "BRL",
                }
              )}
            </h4>
          </div>

          <div className="
              px-4
              py-2

              rounded-full

              bg-[var(--color-accent-blue)]/12

              text-[var(--color-accent-blue)]

              text-sm
              font-medium
            ">
            {activeData.items.length}{" "}
            {t.expenses.timeline.launches}
          </div>
        </div>

        <div
          className="
            mt-8

            relative

            space-y-4
          "
        >

          <div
            className="
              absolute

              left-4
              top-2
              bottom-2

              w-px

              bg-[var(--color-accent-blue)]/15
            "
          />
          {activeData.items.map(
            (expense, index) => (
              <ExpenseItem
                key={index}
                {...expense}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
}