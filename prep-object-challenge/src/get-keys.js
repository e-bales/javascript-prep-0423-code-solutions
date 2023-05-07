/* exported getKeys */
function getKeys(object) {
  const newArray = [];
  for (const keys in object) {
    newArray.push(keys);
  }
  return newArray;
}
