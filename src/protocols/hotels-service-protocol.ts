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

export type GetHotelsServiceResponse = PaginatedResponse<HotelProtocol[]>;

export interface HotelsServiceProtocol {
  getHotels(params: PaginationProtocol): Promise<GetHotelsServiceResponse>;

  getById(id: string): Promise<{ hotel: HotelDetailsProtocol }>;

  findByName(
    params: FindByNameParams
  ): Promise<{ hotel: HotelDetailsProtocol }>;

  findByCity(params: FindByCityParams): Promise<GetHotelsServiceResponse>;
}
