import { describe, it, expect } from "vitest";
import { UrlBuilder } from "./url-builder";

describe("UrlBuilder", () => {
  it("should return the original URL if no method is called", () => {
    const url = new UrlBuilder("https://api.exemplo.com/users");
    expect(url.getUrl()).toBe("https://api.exemplo.com/users");
  });

  it("should add pagination parameters correctly", () => {
    const url = new UrlBuilder("https://api.exemplo.com/users").withPagination({
      page: 2,
      itemsPerPage: 50,
    });

    expect(url.getUrl()).toBe(
      "https://api.exemplo.com/users?_page=2&_per_page=50"
    );
  });

  it("should apply default pagination values if not provided", () => {
    const url = new UrlBuilder("https://api.exemplo.com/users").withPagination({
      page: undefined,
      itemsPerPage: undefined,
    });

    expect(url.getUrl()).toBe(
      "https://api.exemplo.com/users?_page=1&_per_page=10"
    );
  });

  it("should add sorting parameter correctly", () => {
    const url = new UrlBuilder("https://api.exemplo.com/users").withSorting({
      orderByName: "name",
    });

    expect(url.getUrl()).toBe(
      "https://api.exemplo.com/users?_sort=name&_order=asc"
    );
  });

  it("should not add sorting parameter if orderBy is undefined", () => {
    const url = new UrlBuilder("https://api.exemplo.com/users").withSorting({
      orderByName: undefined,
    });

    expect(url.getUrl()).toBe("https://api.exemplo.com/users");
  });

  it("should add custom search parameters", () => {
    const url = new UrlBuilder("https://api.exemplo.com/users").withSearch({
      search: "john",
    });

    expect(url.getUrl()).toBe("https://api.exemplo.com/users?q=john");
  });

  it("should allow method chaining", () => {
    const url = new UrlBuilder("https://api.exemplo.com/users")
      .withPagination({ page: 1, itemsPerPage: 20 })
      .withSorting({ orderByName: "created_at" })
      .withSearch({ search: "active" });

    expect(url.getUrl()).toBe(
      "https://api.exemplo.com/users?_page=1&_per_page=20&_sort=created_at&_order=asc&q=active"
    );
  });

  it("should keep previous instances immutable", () => {
    const base = new UrlBuilder("https://api.exemplo.com/users");
    const sorted = base.withSorting({ orderByName: "id" });

    expect(base.getUrl()).toBe("https://api.exemplo.com/users");
    expect(sorted.getUrl()).toBe(
      "https://api.exemplo.com/users?_sort=id&_order=asc"
    );
  });
});
