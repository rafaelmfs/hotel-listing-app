import type { HotelDetailsProtocol, HotelProtocol } from "./hotels-protocol";
import type { PaginationProtocol } from "./pagination-protocol";

export type FindByNameParams = {
  name: string;
  cityId?: string;
};

export type FindByCityParams = PaginationProtocol & {
  cityId: number;
};

export interface HotelsServiceProtocol {
  getHotels(params: PaginationProtocol): Promise<HotelProtocol[]>;

  getById(id: string): Promise<{ hotel: HotelDetailsProtocol }>;

  findByName(
    params: FindByNameParams
  ): Promise<{ hotel: HotelDetailsProtocol }>;

  findByCity(params: FindByCityParams): Promise<HotelProtocol[]>;
}
