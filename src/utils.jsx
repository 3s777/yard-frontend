// @flow
import { css } from 'styled-components';

export const imagesUrl: string = 'https://yard-images.s3.amazonaws.com/';

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

export const media = {
  lg: (...args: any) => css`
    @media (min-width: 75rem) {
      ${css(...args)}
    }
  `,
  md: (...args: any) => css`
    @media (min-width: 62rem) {
      ${css(...args)}
    }
  `,
  xs: (...args: any) => css`
    @media (min-width: 48rem) {
      ${css(...args)}
    }
  `,
};
