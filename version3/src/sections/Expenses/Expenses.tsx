import { CampaignProgress } from "../../components/CampaignProgress";
import { ExpenseCard } from "../../components/ExpenseCard";
import { ExpenseTimeline } from "../../components/ExpenseTimeline";
import { expenseCategories } from "../../data/expenses";

export function Expenses() {

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

        <ExpenseTimeline />
      </div>
    </section>
  );
}