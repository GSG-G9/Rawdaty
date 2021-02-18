const createSearchUrl = (q, minPrice, maxPrice, locationId) => {
  const queryData = {
    q,
    minPrice,
    maxPrice,
    locationId,
  };
  const queryStringArray = [];
  Object.keys(queryData).forEach((key) => {
    if (queryData[key]) queryStringArray.push(`${key}=${queryData[key]}`);
  });
  return `/search?${queryStringArray.join('&')}`;
};

export default createSearchUrl;
