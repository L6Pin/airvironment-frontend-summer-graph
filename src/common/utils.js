export const EXTREME_TYPES = {
  min: "min",
  max: "max",
};

export function groupBy(collection, property) {
  let i = 0,
    val,
    index,
    values = [],
    result = [];
  for (; i < collection.length; i++) {
    val = collection[i][property];
    index = values.indexOf(val);
    if (index > -1) result[index].push(collection[i]);
    else {
      values.push(val);
      result.push([collection[i]]);
    }
  }
  return result;
}

export function getExtreme(collection, param, type) {
  if (type === EXTREME_TYPES.max) {
    return Math.max.apply(
      Math,
      collection.map((item) => item[param])
    );
  } else {
    return Math.min.apply(
      Math,
      collection.map((item) => item[param])
    );
  }
}
