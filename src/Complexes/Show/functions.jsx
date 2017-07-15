import { kinds } from '../../Translation';

export function statusCheck(statusData) {
  if (statusData) {
    return kinds[statusData];
  }
  return 'Квартира';
}

export function parkingCheck(parkingData) {
  if (parkingData) {
    return `${parkingData} м/м`;
  }
  return 'Нет';
}

export function isUndef(dataToFixed) {
  if (dataToFixed) {
    return dataToFixed.toFixed(2);
  }
  return null;
}
