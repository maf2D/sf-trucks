export type Truck = {
  objectid: string;
  applicant: string;
  facilitytype: string;
  cnn: string;
  locationdescription: string;
  address: string;
  blocklot: string;
  block: string;
  fooditems: string;
  lot: string;
  permit: string;
  status: string;
  dayshours: string;
  x: string;
  y: string;
  latitude: string;
  longitude: string;
  schedule: string;
  received: string;
  priorpermit: string;
  expirationdate: string;
  location: {
    latitude: string;
    longitude: string;
    human_address: {
      'address': string;
      'city': string;
      'state': string;
      'zip': string;
    }
  };
};

export type ApiError = {
  code: string;
  error: boolean;
  message: string;
};
