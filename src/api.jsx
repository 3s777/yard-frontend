/* eslint-disable import/prefer-default-export*/
/* TODO remove the rule when there are new methods*/
export const get = resource =>
  fetch(encodeURI(`https://api.jqestate.ru/v1/${resource}`)).then(res => res.json());
