import type { AxiosInstance } from "axios";
import { citiesEndpoint } from "./constants";

export class CitiesApiService {
  constructor(private readonly apiInstance: AxiosInstance) {}

  async getCities() {
    const cities = await this.apiInstance(citiesEndpoint);

    return { cities };
  }
}
