/* eslint-disable import/prefer-default-export*/
/* TODO убрать правило когда будут новые методы*/
export const get = resource =>
  fetch(encodeURI(`https://yard.moscow/api/v1/${resource}`)).then(res => res.json());
