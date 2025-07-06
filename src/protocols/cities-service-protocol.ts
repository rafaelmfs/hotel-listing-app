import type { CityProtocol } from "./city-protocol";

type GetCitiesResponse = {
  cities: CityProtocol[];
};

export interface CitiesServiceProtocol {
  getCities(): Promise<GetCitiesResponse>;
}
