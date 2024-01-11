export const fetchDummy = (endpoint: string) => {
  const promise = fetch(`/dummy${endpoint}.json`, {
    method: "GET",
  })
    .then(res => res.json())
    .catch(e => console.error(e));

  return promise;
};
