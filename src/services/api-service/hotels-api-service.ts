import type { AxiosInstance } from "axios";
import type { PaginationProtocol } from "src/protocols/pagination-protocol";
import { UrlBuilder } from "./url-builder";
import { hotelsEndpoint } from "./constants";

type FindByNameParams = {
  name: string;
};

type FindByCityParams = PaginationProtocol & {
  cityId: string;
};

export class HotelsApiService {
  constructor(private readonly apiInstance: AxiosInstance) {}

  async getHotels({ page, itemsPerPage, orderBy }: PaginationProtocol) {
    const url = new UrlBuilder(hotelsEndpoint)
      .withPagination({ page, itemsPerPage })
      .withSorting({ orderBy })
      .getUrl();

    const hotels = await this.apiInstance(url);

    return { hotels };
  }

  async getById(id: string) {
    const hotel = await this.apiInstance(`${hotelsEndpoint}/${id}`);

    return { hotel };
  }

  async findByName({ name }: FindByNameParams) {
    const url = new UrlBuilder(hotelsEndpoint)
      .withSearch({
        label: "name",
        value: name,
      })
      .getUrl();

    const hotel = await this.apiInstance(url);

    return { hotel };
  }

  async findByCity({ cityId, itemsPerPage, orderBy, page }: FindByCityParams) {
    const url = new UrlBuilder(hotelsEndpoint)
      .withPagination({ page, itemsPerPage })
      .withSorting({ orderBy })
      .withSearch({
        label: "placeId",
        value: cityId,
      })
      .getUrl();

    const hotels = await this.apiInstance(url);

    return { hotels };
  }
}
