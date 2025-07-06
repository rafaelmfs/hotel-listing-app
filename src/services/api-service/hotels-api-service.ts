import type { AxiosInstance } from "axios";
import type {
  PaginatedResponse,
  PaginationProtocol,
} from "src/protocols/pagination-protocol";
import { UrlBuilder } from "./url-builder";
import { hotelsEndpoint } from "./constants";
import { api } from "src/boot/axios";
import type {
  FindByCityParams,
  FindByNameParams,
  HotelsServiceProtocol,
} from "src/protocols/hotels-service-protocol";
import type {
  HotelDetailsProtocol,
  HotelProtocol,
} from "src/protocols/hotels-protocol";

export class HotelsApiService implements HotelsServiceProtocol {
  private readonly apiInstance: AxiosInstance = api;

  async getHotels({ page, itemsPerPage, orderBy }: PaginationProtocol) {
    const url = new UrlBuilder(hotelsEndpoint)
      .withPagination({ page, itemsPerPage })
      .withSorting({ orderBy })
      .getUrl();

    const { data } = await this.apiInstance<PaginatedResponse<HotelProtocol[]>>(
      url
    );

    return data;
  }

  async getById(id: string) {
    const { data } = await this.apiInstance<HotelDetailsProtocol>(
      `${hotelsEndpoint}/${id}`
    );

    return { hotel: data };
  }

  async findByName({ name }: FindByNameParams) {
    const url = new UrlBuilder(hotelsEndpoint)
      .withSearch({
        label: "name",
        value: name,
      })
      .getUrl();

    const { data } = await this.apiInstance<HotelDetailsProtocol>(url);

    return { hotel: data };
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

    const { data } = await this.apiInstance<PaginatedResponse<HotelProtocol[]>>(
      url
    );

    return data;
  }
}
