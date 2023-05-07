/* exported isVowel */
function isVowel(char) {
  const vowelArray = ['a', 'e', 'i', 'o', 'u'];
  if (vowelArray.includes(char.toLowerCase())) return true;
  return false;
}
