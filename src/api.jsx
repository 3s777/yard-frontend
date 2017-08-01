/* eslint-disable import/prefer-default-export*/
/* TODO remove the rule when there are new methods*/
export const get = resource =>
  fetch(encodeURI(`https://yard-api.now.sh/v1/${resource}`)).then(res => res.json());
