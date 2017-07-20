// @flow
import { kinds } from '../Translation';

export const imagesUrl: string = 'https://yard-images.s3.amazonaws.com/';

export function statusCheck(statusData: string) {
  if (statusData) {
    return kinds[statusData];
  }
  return null;
}

export function parkingCheck(parkingData: number) {
  if (parkingData) {
    return `${parkingData} м/м`;
  }
  return 'Нет';
}

export function formatToFixed(dataToFixed: number) {
  if (dataToFixed) {
    return dataToFixed.toFixed(2);
  }
  return null;
}
