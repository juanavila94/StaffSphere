export const addUrlQueries = (filters, url) => {
    
    for (const fil in filters) {
      const lookingForSymbol = url.split("");
      const found = !!lookingForSymbol.includes("?");
      // console.log(filters[fil]);
      if (found) {
        url += `&${fil}=${filters[fil]}`;
      } else {
        url += `?${fil}=${filters[fil]}`;
      }
    }
  return url;
};
