// @flow

type Price = {
  min: number,
  max: number,
};

type DetailsType = {
  architect: string,
  security: string,
  constructionKind: string,
  propertyKind: string,
  parkings: number,
  undergroundGarages: number,
  ceilHeight: {
    from: number,
    to: number,
  },
  maintenanceCosts: ?string,
  startYear: string,
  startQuarter: string,
  commissioningYear: string,
  commissioningQuarter: string,
};

type StatisticsType = {
  propertiesCount: number,
  price: {
    from: {
      rub: number,
    },
    to: {
      rub: number,
    },
  },
  totalArea: {
    from: number,
    to: number,
  },
};

type Area = {
  min: number,
  max: number,
};

export type OfferType = {
  title: string,
  area: Area,
  price: Price,
};

export type GalleryImage = {
  id: string,
};

export type LocationType = {
  subLocalityName: string,
  street: string,
  house: number,
  postalCode: number,
  latitude: number,
  longitude: number,
};

export type AmenityType = {
  id: number,
  name: string,
};

export type ComplexType = {
  id?: number,
  name?: string,
  slug?: string,
  images?: Array<GalleryImage>,
  fullDescription?: string,
  location?: Location,
  shortDescription?: string,
  details?: DetailsType,
  statistics?: StatisticsType,
  amenities?: Array<AmenityType>,
};

export type CardType = {
  slug: string,
  name: string,
  shortDescription: string,
  location: LocationType,
  images: Array<GalleryImage>,
};
