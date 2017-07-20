// @flow

type Price = {
  min: number,
  max: number,
};

type DetailsTypes = {
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

type StatisticsTypes = {
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

export type OfferTypes = {
  title: string,
  area: Area,
  price: Price,
};

export type GalleryImage = {
  id: string,
};

export type LocationTypes = {
  subLocalityName: string,
  street: string,
  house: number,
  postalCode: number,
};

export type AmenityTypes = {
  id: number,
  name: string,
};

export type ComplexTypes = {
  id?: number,
  name?: string,
  slug?: string,
  images?: Array<GalleryImage>,
  fullDescription?: string,
  location?: Location,
  shortDescription?: string,
  details?: DetailsTypes,
  statistics?: StatisticsTypes,
  amenities?: Array<AmenityTypes>,
};

export type CardTypes = {
  slug: string,
  name: string,
  shortDescription: string,
  location: LocationTypes,
  images: Array<GalleryImage>,
};
