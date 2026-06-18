export type MonthKey =
  keyof typeof monthlyExpenses;

export const expenseCategories = [
  {
    id: "cuoa",
    titleKey: "cuoa",
    paid: 12050,
    total: 12050,
    featured: true,
  },

  {
    id: "liberec",
    titleKey: "liberec",
    paid: 9100,
    total: 9100,
    featured: true,
  },

  {
    id: "airfare",
    titleKey: "airfare",
    paid: 5097.21,
    total: 10971.24,
  },

  {
    id: "accommodation",
    titleKey: "accommodation",
    paid: 8150,
    total: 8150,
  },

  {
    id: "food-transport",
    titleKey: "foodTransport",
    paid: 0,
    total: 20000,
  },

  {
    id: "insurance",
    titleKey: "insurance",
    paid: 0,
    total: 8500,
  },
];

export const monthlyExpenses = {
  nov25: {
    monthKey: "nov25",
    items: [
      {
        titleKey: "cuoaCourse",
        value: 1665.97,
        installment: "1/7",
        date: "28/11/25",
        status: "paid",
      },
      {
        titleKey: "liberecEnrollment",
        value: 2776.97,
        installment: "1/3",
        date: "28/11/25",
        status: "paid",
      },
    ],
  },

  dez25: {
    monthKey: "dez25",
    items: [
      {
        titleKey: "cuoaCourse",
        value: 1665.97,
        installment: "2/7",
        date: "26/12/25",
        status: "paid",
      },
    ],
  },

  jan26: {
    monthKey: "jan26",
    items: [
      {
        titleKey: "cuoaCourse",
        value: 1665.97,
        installment: "3/7",
        date: "21/01/26",
        status: "paid",
      },
    ],
  },

  fev26: {
    monthKey: "fev26",
    items: [
      {
        titleKey: "italyAccommodation",
        value: 1000,
        installment: "1/3",
        date: "15/02/26",
        status: "paid",
      },
      {
        titleKey: "liberecEnrollment",
        value: 1851,
        installment: "2/3",
        date: "27/02/26",
        status: "paid",
      },
    ],
  },

  mar26: {
    monthKey: "mar26",
    items: [
      {
        titleKey: "cuoaCourse",
        value: 1665.97,
        installment: "4/7",
        date: "02/03/26",
        status: "paid",
      },
      {
        titleKey: "italyAccommodation",
        value: 1000,
        installment: "2/3",
        date: "15/03/26",
        status: "paid",
      },
      {
        titleKey: "flightBraPrg",
        value: 390.59,
        installment: "1/10",
        date: "15/03/26",
        status: "paid",
      },
      {
        titleKey: "flightBraPrg",
        value: 304.96,
        installment: "1/1",
        date: "15/03/26",
        status: "paid",
      },
      {
        titleKey: "flightPrgDub",
        value: 245.05,
        installment: "1/4",
        date: "15/03/26",
        status: "paid",
      },
      {
        titleKey: "flightDubVen",
        value: 120.55,
        installment: "1/12",
        date: "15/03/26",
        status: "paid",
      },
      {
        titleKey: "flightMadBra",
        value: 386.84,
        installment: "1/10",
        date: "15/03/26",
        status: "paid",
      },
      {
        titleKey: "flightMadBra",
        value: 220.13,
        installment: "1/1",
        date: "15/03/26",
        status: "paid",
      },
      {
        titleKey: "cuoaCourse",
        value: 1665.97,
        installment: "5/7",
        date: "30/03/26",
        status: "paid",
      },
    ],
  },

  abr26: {
    monthKey: "abr26",
    items: [
      {
        titleKey: "liberecEnrollment",
        value: 4225,
        installment: "3/3",
        date: "14/04/26",
        status: "paid",
      },
      {
        titleKey: "liberecAccommodation",
        value: 4488.02,
        installment: "1/1",
        date: "14/04/26",
        status: "paid",
      },
      {
        titleKey: "italyAccommodation",
        value: 1000,
        installment: "3/3",
        date: "15/04/26",
        status: "paid",
      },
      {
        titleKey: "flightBraPrg",
        value: 390.59,
        installment: "2/10",
        date: "15/04/26",
        status: "paid",
      },
      {
        titleKey: "flightPrgDub",
        value: 245.05,
        installment: "2/4",
        date: "15/04/26",
        status: "paid",
      },
      {
        titleKey: "flightDubVen",
        value: 120.55,
        installment: "2/12",
        date: "15/04/26",
        status: "paid",
      },
      {
        titleKey: "flightMadBra",
        value: 386.84,
        installment: "2/10",
        date: "15/04/26",
        status: "paid",
      },
      {
        titleKey: "cuoaCourse",
        value: 1665.97,
        installment: "6/7",
        date: "30/04/26",
        status: "paid",
      },
    ],
  },

  mai26: {
    monthKey: "mai26",
    items: [
      {
        titleKey: "flightBraPrg",
        value: 390.59,
        installment: "3/10",
        date: "15/05/26",
        status: "paid",
      },
      {
        titleKey: "flightPrgDub",
        value: 245.05,
        installment: "3/4",
        date: "15/05/26",
        status: "paid",
      },
      {
        titleKey: "flightDubVen",
        value: 120.55,
        installment: "3/12",
        date: "15/05/26",
        status: "paid",
      },
      {
        titleKey: "flightMadBra",
        value: 386.84,
        installment: "3/10",
        date: "15/05/26",
        status: "paid",
      },
      {
        titleKey: "cuoaCourse",
        value: 1665.97,
        installment: "7/7",
        date: "30/05/26",
        status: "paid",
      },
    ],
  },
} as const;