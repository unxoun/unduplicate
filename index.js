const unduplicate = (arr, key) => {
  function onlyUnique(value, index, self, key) {
    const tracedValue = value[key];
    return self.map((e) => e[key]).indexOf(tracedValue) === index;
  }
  return arr.filter((v, i, s) => onlyUnique(v, i, s, key));
};
