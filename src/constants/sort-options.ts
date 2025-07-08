export const sortOptions: Array<{ label: string; value: string }> = [
  {
    label: "Preço",
    value: "totalPrice",
  },
  {
    label: "Estrelas",
    value: "stars",
  },
] as const;

export enum ORDER_TYPES {
  ASCENDING = "asc",
  DESCENDING = "desc",
}
