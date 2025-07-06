import type { CitiesServiceProtocol } from "src/protocols/cities-service-protocol";
import type { CityProtocol } from "src/protocols/city-protocol";
import { CitiesApiService } from "../api-service/cities-api-service";

export class CitiesApiProxy implements CitiesServiceProtocol {
  private cities: CityProtocol[] = [];

  async getCities(): Promise<{ cities: CityProtocol[] }> {
    if (this.cities.length === 0) {
      const citiesApiService = new CitiesApiService();
      const { cities } = await citiesApiService.getCities();
      this.cities = cities;
    }

    return {
      cities: this.cities,
    };
  }
}
