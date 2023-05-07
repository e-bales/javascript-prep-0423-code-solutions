/* exported getValues */
function getValues(object) {
  const newArray = [];
  for (const keys in object) {
    newArray.push(object[keys]);
  }
  return newArray;
}
