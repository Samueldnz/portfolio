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
      <div className="mb-8">
        <span className="pill">
          {t.expenses.timeline.subtitle}
        </span>

        <h3
          className="
            mt-4
            text-3xl
            md:text-4xl

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

          pb-2

          scrollbar-hide
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
                mt-2
                font-[600]
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

          <div className="pill">
            {activeData.items.length}{" "}
            {t.expenses.timeline.launches}
          </div>
        </div>

        <div
          className="
            mt-6

            space-y-3
          "
        >
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