// myEach
function myEach(collection, callback) {
    const values = Array.isArray(collection) ? collection : Object.values(collection);
     for (let i = 0; i < values.length; i++) {
    callback(values[i]);
  }
  return collection;
}

// myMap
function myMap(collection, callback) {
  const values = Array.isArray(collection) ? collection : Object.values(collection);
  const result = [];
  for (let i = 0; i < values.length; i++) {
    result.push(callback(values[i]));
  }
  return result;
}

// myReduce
function myReduce(collection, callback, acc) {
  const values = Array.isArray(collection) ? collection : Object.values(collection);
  let startIndex = 0;
  if (acc === undefined) {
    acc = values[0];
    startIndex = 1;
  }
  for (let i = startIndex; i < values.length; i++) {
    acc = callback(acc, values[i], collection);
  }
  return acc;
}

// myFind
function myFind(collection, predicate) {
  const values = Array.isArray(collection) ? collection : Object.values(collection);
  for (let val of values) {
    if (predicate(val)) return val;
  }
  return undefined;
}

// myFilter
function myFilter(collection, predicate) {
  const values = Array.isArray(collection) ? collection : Object.values(collection);
  const result = [];
  for (let val of values) {
    if (predicate(val)) result.push(val);
  }
  return result;
}

// mySize
function mySize(collection) {
  return Array.isArray(collection) ? collection.length : Object.keys(collection).length;
}

// myFirst
function myFirst(array, n) {
  if (n === undefined) return array[0];
  return array.slice(0, n);
}

// myLast
function myLast(array, n) {
  if (n === undefined) return array[array.length - 1];
  return array.slice(-n);
}

// myKeys
function myKeys(object) {
  return Object.keys(object);
}

// myValues
function myValues(object) {
  return Object.values(object);
}
