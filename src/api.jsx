/* eslint-disable import/prefer-default-export */
export const get = resource =>
  fetch(encodeURI(`https://yard.moscow/api/v1/${resource}`)).then(res => res.json());
