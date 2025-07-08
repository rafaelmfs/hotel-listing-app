import { QUERY_PARAMS_KEYS } from "src/constants/api-constants";
import {
  DEFAULT_ITEMS_PER_PAGE,
  DEFAULT_PAGE,
} from "src/constants/pagination-constants";
import { ORDER_TYPES } from "src/constants/sort-options";
import type { PaginationProtocol } from "src/protocols/pagination-protocol";

type WithPaginationParams = Pick<PaginationProtocol, "page" | "itemsPerPage">;
type WithSortingParams = Pick<
  PaginationProtocol,
  "orderByName" | "orderByType"
>;
type WithSearch = { search?: string };
type FilterBy = { label: string; value: string | number };

export class UrlBuilder {
  constructor(private readonly _url: string) {}

  getUrl() {
    return this._url;
  }

  withPagination({
    page = DEFAULT_PAGE,
    itemsPerPage = DEFAULT_ITEMS_PER_PAGE,
  }: WithPaginationParams) {
    const url = new URL(this._url);

    url.searchParams.set(QUERY_PARAMS_KEYS.PAGE, String(page));
    url.searchParams.set(QUERY_PARAMS_KEYS.PER_PAGE, String(itemsPerPage));

    return new UrlBuilder(url.toString());
  }

  withSorting({
    orderByName,
    orderByType = ORDER_TYPES.ASCENDING,
  }: WithSortingParams) {
    if (!orderByName) {
      return this;
    }

    const url = new URL(this._url);
    url.searchParams.set(QUERY_PARAMS_KEYS.SORT, String(orderByName));
    url.searchParams.set(QUERY_PARAMS_KEYS.ORDER_BY, String(orderByType));

    return new UrlBuilder(url.toString());
  }

  withSearch({ search }: WithSearch) {
    if (!search) {
      return this;
    }

    const url = new URL(this._url);

    url.searchParams.set(QUERY_PARAMS_KEYS.QUERY, search);

    return new UrlBuilder(url.toString());
  }

  filterBy({ label, value }: FilterBy) {
    const url = new URL(this._url);

    url.searchParams.set(label, String(value));

    return new UrlBuilder(url.toString());
  }
}
