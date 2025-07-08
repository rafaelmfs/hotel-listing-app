import type { AxiosInstance } from "axios";
import type { PaginationProtocol } from "src/protocols/pagination-protocol";
import { UrlBuilder } from "./url-builder";
import { hotelDetailsEndpoint, hotelsEndpoint } from "./constants";
import { api } from "src/boot/axios";
import type {
  FindByCityParams,
  HotelsServiceProtocol,
} from "src/protocols/hotels-service-protocol";
import type {
  HotelDetailsProtocol,
  HotelProtocol,
} from "src/protocols/hotels-protocol";

export type GetHotelsParams = PaginationProtocol & {
  term?: string;
};

export class HotelsApiService implements HotelsServiceProtocol {
  private readonly apiInstance: AxiosInstance = api;

  async getHotels({
    page,
    itemsPerPage,
    orderByName,
    orderByType,
    term,
  }: GetHotelsParams) {
    const url = new UrlBuilder(hotelsEndpoint)
      .withPagination({ page, itemsPerPage })
      .withSorting({ orderByName, orderByType })
      .withSearch({ search: term })
      .getUrl();

    const response = await this.apiInstance<HotelProtocol[]>(url);

    return response.data;
  }

  async getById(id: number) {
    const { data } = await this.apiInstance<HotelDetailsProtocol>(
      `${hotelDetailsEndpoint}/${id}`
    );

    return { hotel: data };
  }

  async findByCity({
    cityId,
    itemsPerPage,
    orderByName,
    orderByType,
    page,
    term,
  }: FindByCityParams) {
    const url = new UrlBuilder(hotelsEndpoint)
      .withPagination({ page, itemsPerPage })
      .withSorting({ orderByName, orderByType })
      .filterBy({
        label: "placeId",
        value: String(cityId),
      })
      .withSearch({ search: term })
      .getUrl();

    const { data } = await this.apiInstance<HotelProtocol[]>(url);

    return data;
  }
}
