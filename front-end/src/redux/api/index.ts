export const get = (url: string) => fetch(url).then(data => data.json()).then(response => response.data);