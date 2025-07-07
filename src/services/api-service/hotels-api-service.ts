import type { AxiosInstance } from "axios";
import type { PaginationProtocol } from "src/protocols/pagination-protocol";
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

  async getHotels({
    page,
    itemsPerPage,
    orderByName,
    orderByType,
  }: PaginationProtocol) {
    const url = new UrlBuilder(hotelsEndpoint)
      .withPagination({ page, itemsPerPage })
      .withSorting({ orderByName, orderByType })
      .getUrl();

    const response = await this.apiInstance<HotelProtocol[]>(url);

    return response.data;
  }

  async getById(id: string) {
    const { data } = await this.apiInstance<HotelDetailsProtocol>(
      `${hotelsEndpoint}/${id}`
    );

    return { hotel: data };
  }

  async findByName({ name, cityId }: FindByNameParams) {
    let url = new UrlBuilder(hotelsEndpoint)
      .withSearch({
        search: name,
      })
      .getUrl();

    if (cityId) {
      url = new UrlBuilder(url)
        .filterBy({
          label: "placeId",
          value: cityId,
        })
        .getUrl();
    }

    const { data } = await this.apiInstance<HotelDetailsProtocol>(url);

    return { hotel: data };
  }

  async findByCity({
    cityId,
    itemsPerPage,
    orderByName,
    orderByType,
    page,
  }: FindByCityParams) {
    const url = new UrlBuilder(hotelsEndpoint)
      .withPagination({ page, itemsPerPage })
      .withSorting({ orderByName, orderByType })
      .filterBy({
        label: "placeId",
        value: String(cityId),
      })
      .getUrl();

    const { data } = await this.apiInstance<HotelProtocol[]>(url);

    return data;
  }
}
