import { expenseCategories } from "../data/expenseCategories";
import { monthlyExpenses } from "../data/monthlyExpenses";

export function calculateExpenseCategories() {
  const totals = new Map<string, number>();

  Object.values(monthlyExpenses)
    .flatMap(month => month.items)
    .filter(item => item.status === "paid")
    .forEach(item => {
      totals.set(
        item.category,
        (totals.get(item.category) ?? 0) + item.value
      );
    });

  return expenseCategories.map(category => ({
    ...category,
    paid: Number(
        (totals.get(category.id) ?? 0).toFixed(2)
    ),
  }));
}