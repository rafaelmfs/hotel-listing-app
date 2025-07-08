import type { CitiesServiceProtocol } from "src/protocols/cities-service-protocol";
import type { CityProtocol } from "src/protocols/city-protocol";
import { CitiesApiService } from "../api-service/cities-api-service";

export class CitiesApiProxy implements CitiesServiceProtocol {
  private static cities: CityProtocol[] = [];

  async getCities(): Promise<{ cities: CityProtocol[] }> {
    if (CitiesApiProxy.cities.length === 0) {
      const citiesApiService = new CitiesApiService();
      const { cities } = await citiesApiService.getCities();
      CitiesApiProxy.cities = cities;
    }

    return {
      cities: CitiesApiProxy.cities,
    };
  }
}
