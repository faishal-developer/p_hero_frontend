export const paths = {
  login: "/login",
  register: "/register",

  dashboard: "/dashboard",
  orders: "/orders",
  products: "/products",
  employees: "/quiz/list",
  addEmploye: "/quiz/add-quiz",
  exam: (id: string) => `/quiz/${id}`,
};
