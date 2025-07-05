import type { PaginationProtocol } from "src/protocols/pagination-protocol";

type WithPaginationParams = Pick<PaginationProtocol, "page" | "itemsPerPage">;
type WithSortingParams = Pick<PaginationProtocol, "orderBy">;
type WithSearch = { label: string; value: string };

export class UrlBuilder {
  constructor(private readonly _url: string) {}

  getUrl() {
    return this._url;
  }

  withPagination({ page = 1, itemsPerPage = 10 }: WithPaginationParams) {
    console.log(this._url);
    const url = new URL(this._url);

    url.searchParams.set("_page", String(page));
    url.searchParams.set("_per_page", String(itemsPerPage));

    return new UrlBuilder(url.toString());
  }

  withSorting({ orderBy }: WithSortingParams) {
    if (!orderBy) {
      return this;
    }

    const url = new URL(this._url);
    url.searchParams.set("sort", String(orderBy));

    return new UrlBuilder(url.toString());
  }

  withSearch({ label, value }: WithSearch) {
    const url = new URL(this._url);

    url.searchParams.set(label, value);

    return new UrlBuilder(url.toString());
  }
}
