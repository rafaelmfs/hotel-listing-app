import type { HotelDetailsProtocol, HotelProtocol } from "./hotels-protocol";
import type { PaginationProtocol } from "./pagination-protocol";

export type FindByNameParams = {
  name: string;
  cityId?: string;
};

export type FindByCityParams = PaginationProtocol & {
  cityId: number;
  term?: string;
};

export interface HotelsServiceProtocol {
  getHotels(params: PaginationProtocol): Promise<HotelProtocol[]>;

  getById(id: number): Promise<{ hotel: HotelDetailsProtocol }>;

  findByCity(params: FindByCityParams): Promise<HotelProtocol[]>;
}
