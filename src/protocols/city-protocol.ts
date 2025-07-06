type CityState = {
  name: string;
  shortname: string;
};

export type CityProtocol = {
  name: string;
  state: CityState;
  placeId: number;
};
