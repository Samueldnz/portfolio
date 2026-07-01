import {
  ExpenseCategory,
  type ExpenseCategoryConfig,
} from "./expenseTypes";

export const expenseCategories: readonly ExpenseCategoryConfig[] = [
  {
    id: ExpenseCategory.CUOA,
    titleKey: "cuoa",
    total: 11661.79,
  },

  {
    id: ExpenseCategory.LIBEREC,
    titleKey: "liberec",
    total: 8852.97,
  },

  {
    id: ExpenseCategory.AIRFARE,
    titleKey: "airfare",
    total: 10971.24,
  },

  {
    id: ExpenseCategory.ACCOMMODATION,
    titleKey: "accommodation",
    total: 8188.62,
  },

  {
    id: ExpenseCategory.FOOD_TRANSPORT,
    titleKey: "foodTransport",
    total: 20000,
  },

  {
    id: ExpenseCategory.INSURANCE,
    titleKey: "insurance",
    total: 952.04,
  },
] as const;