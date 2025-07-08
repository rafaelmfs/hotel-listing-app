import type { ORDER_TYPES } from "src/constants/sort-options";

export type PaginationProtocol = {
  page?: number;
  itemsPerPage?: number;
  orderByName?: string;
  orderByType?: ORDER_TYPES;
};
