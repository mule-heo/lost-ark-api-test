export const addQueryParameters = (
  url: string,
  parameters: { [key: string]: string | number },
) => {
  let count = 0;
  for (const key of Object.keys(parameters)) {
    if (parameters[key]) {
      if (count === 0) {
        url += `?${key}=${parameters[key]}`;
      } else {
        url += `&${key}=${parameters[key]}`;
      }
      count++;
    }
  }
  return url;
};

export const injectPathParameters = (
  url: string,
  parameters: { [key: string]: string | number },
) => {
  for (const key of Object.keys(parameters)) {
    const regexp = new RegExp(`{${key}}`);
    url = url.replace(regexp, `${parameters[key]}`);
  }
  return url;
};
