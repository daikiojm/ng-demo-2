export interface Address {
  code: number;
  data: {
    pref: string,
    address: string,
    city: string,
    town: string,
    fullAddress: string,
  };
}
