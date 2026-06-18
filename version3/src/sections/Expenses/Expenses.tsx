import { CampaignProgress } from "../../components/CampaignProgress";
import { ExpenseCard } from "../../components/ExpenseCard";
import { ExpenseTimeline } from "../../components/ExpenseTimeline";
import { expenseCategories } from "../../data/expenses";

import { useLanguage } from "../../hooks/useLanguage";

export function Expenses() {

  const { t } = useLanguage();

  const totalPaid =
    expenseCategories.reduce(
      (sum, item) => sum + item.paid,
      0
    );

  const totalGoal =
    expenseCategories.reduce(
      (sum, item) => sum + item.total,
      0
    );

  return (
    <section
      id="gastos"
      className="
        py-24
        px-6
      "
    >
      <div
        className="
          max-w-[1100px]
          mx-auto
        "
      >
        <CampaignProgress
          totalPaid={totalPaid}
          totalGoal={totalGoal}
        />

        <div
          className="
            mt-8

            grid
            md:grid-cols-2
            gap-6
          "
        >
          {expenseCategories.map(
            (expense) => (
              <ExpenseCard
                key={expense.id}
                {...expense}
              />
            )
          )}
        </div>

        <div
          className="
            mt-10

            flex
            flex-col
            sm:flex-row

            gap-4
          "
        >
          <a
            href="https://vakinha.bio/5793881"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            {t.expenses.support}
          </a>

          <a
            href="https://drive.google.com/drive/folders/1rrQOnqVwlFWdx9gQ7lChGkUz9VSky0QX?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            {t.expenses.receipts}
          </a>
        </div>

        <ExpenseTimeline />
      </div>
    </section>
  );
}