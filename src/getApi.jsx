export function getApi(apiUrl) {
  return fetch(encodeURI(`https://yard.moscow/api/v1${apiUrl}`)).then(response => response.json());
}

export const imagesUrl = 'https://yard-images.s3.amazonaws.com/';
