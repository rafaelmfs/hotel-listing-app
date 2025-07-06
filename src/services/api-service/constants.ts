const baseURL = import.meta.env.VITE_BASE_URL;

console.log({
  meta: import.meta.env,
  process: process.env,
});

export const hotelDetailsEndpoint = `${baseURL}/hotels_details`;
export const hotelsEndpoint = `${baseURL}/hotels`;
export const citiesEndpoint = `${baseURL}/cities`;
