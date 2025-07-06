import type { HotelDetailsProtocol, HotelProtocol } from "./hotels-protocol";
import type {
  PaginatedResponse,
  PaginationProtocol,
} from "./pagination-protocol";

export type FindByNameParams = {
  name: string;
};

export type FindByCityParams = PaginationProtocol & {
  cityId: string;
};

export interface HotelsServiceProtocol {
  getHotels(
    params: PaginationProtocol
  ): Promise<PaginatedResponse<HotelProtocol[]>>;

  getById(id: string): Promise<{ hotel: HotelDetailsProtocol }>;

  findByName(
    params: FindByNameParams
  ): Promise<{ hotel: HotelDetailsProtocol }>;

  findByCity(
    params: FindByCityParams
  ): Promise<PaginatedResponse<HotelProtocol[]>>;
}
