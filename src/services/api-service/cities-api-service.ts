import type { AxiosInstance } from "axios";
import { citiesEndpoint } from "./constants";
import { api } from "src/boot/axios";
import type { CityProtocol } from "src/protocols/city-protocol";
import { HttpStatusCode } from "src/protocols/http-status";
import type { CitiesServiceProtocol } from "src/protocols/cities-service-protocol";

export class CitiesApiService implements CitiesServiceProtocol {
  private readonly apiInstance: AxiosInstance = api;

  async getCities() {
    const cities = await this.apiInstance<CityProtocol[]>(citiesEndpoint);

    if (cities.status !== HttpStatusCode.OK) {
      throw new Error("Failed get cities!");
    }

    return { cities: cities.data };
  }
}
