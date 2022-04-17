export default function appendToEachArrayValue(array, appendString) {
  const arrayEnd = [];
  for (const idx of array) {
    arrayEnd.push(`${appendString}${array[idx]}`);
  }

  return arrayEnd;
}
