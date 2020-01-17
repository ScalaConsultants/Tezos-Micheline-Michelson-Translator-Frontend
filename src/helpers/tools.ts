export const removeEmptyProperties = obj => {
  const copy = Object.assign({}, obj);

  Object.keys(copy).forEach((key) =>  {
    if (copy[key] && typeof copy[key] === "object") removeEmptyProperties(copy[key]);
    // recursive for objects
    else if (copy[key] == null || copy[key] === "") delete copy[key]; // remove empty properties
    if (typeof copy[key] === "object" && Object.keys(copy[key]).length === 0) delete copy[key]; // remove empty objects
  });

  return copy;
};
