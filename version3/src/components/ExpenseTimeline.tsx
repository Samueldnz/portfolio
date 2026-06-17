import { useMemo, useState } from "react";

import { ExpenseItem } from "./ExpenseItem";
import { ExpenseMonthTab } from "./ExpenseMonthTab";

import {
  monthlyExpenses,
  type MonthKey,
} from "../data/expenses";

export function ExpenseTimeline() {
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
          Financial Timeline
        </span>

        <h3
          className="
            mt-4
            text-3xl
            font-black
          "
        >
          Cronograma de Pagamentos
        </h3>
      </div>

      {/* Tabs */}

      <div
        className="
          flex
          gap-3

          overflow-x-auto

          pb-2
        "
      >
        {months.map(([key, month]) => (
          <ExpenseMonthTab
            key={key}
            label={month.label}
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

          p-6

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
                text-[var(--color-muted)]
              "
            >
              {activeData.label}
            </p>

            <h4
              className="
                text-2xl
                font-bold
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
            {activeData.items.length} lançamentos
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