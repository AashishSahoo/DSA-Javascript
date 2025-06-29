function reverseWords(s: string): string {
  let result = [];
  let word = "";
  for (let i = s.length - 1; i >= 0; i--) {
    if (s.charAt(i) !== ' ') {
      word = s.charAt(i) + word;
    } else if (word.length > 0) {
      result.push(word);
      word = "";
    }
  }
  if (word.length > 0) result.push(word); 
  return result.join(" ");
}
