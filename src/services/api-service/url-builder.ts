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

  withPagination({ page = 1, itemsPerPage = 10 }: WithPaginationParams) {
    const url = new URL(this._url);

    url.searchParams.set("_page", String(page));
    url.searchParams.set("_per_page", String(itemsPerPage));

    return new UrlBuilder(url.toString());
  }

  withSorting({ orderByName, orderByType = "asc" }: WithSortingParams) {
    if (!orderByName) {
      return this;
    }

    const url = new URL(this._url);
    url.searchParams.set("_sort", String(orderByName));
    url.searchParams.set("_order", String(orderByType));

    return new UrlBuilder(url.toString());
  }

  withSearch({ search }: WithSearch) {
    if (!search) {
      return this;
    }

    const url = new URL(this._url);

    url.searchParams.set("q", search);

    return new UrlBuilder(url.toString());
  }

  filterBy({ label, value }: FilterBy) {
    const url = new URL(this._url);

    url.searchParams.set(label, String(value));

    return new UrlBuilder(url.toString());
  }
}
