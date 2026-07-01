export const ExpenseCategory = {
  CUOA: "cuoa",
  LIBEREC: "liberec",
  AIRFARE: "airfare",
  ACCOMMODATION: "accommodation",
  FOOD_TRANSPORT: "food-transport",
  INSURANCE: "insurance",
} as const;

export type ExpenseCategoryId =
  (typeof ExpenseCategory)[keyof typeof ExpenseCategory];

export type ExpenseStatus =
  | "paid"
  | "planned";

export interface ExpenseItem {
  category: ExpenseCategoryId;

  titleKey: string;

  value: number;

  installment: string;

  date: string;

  status: ExpenseStatus;
}

export interface ExpenseCategoryConfig {
  id: ExpenseCategoryId;

  titleKey: string;

  total: number;
}

export interface MonthlyExpense {
  monthKey: string;
  items: ExpenseItem[];
}