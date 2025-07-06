export type PaginationProtocol = {
  page?: number;
  itemsPerPage?: number;
  orderBy?: string;
};

export type PaginatedResponse<DataType> = {
  first: number;
  prev?: number;
  next?: number;
  last?: number;
  pages?: number;
  items?: number;
  data: DataType;
};
