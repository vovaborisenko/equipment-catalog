String.prototype.firstCharToUpperCase = function() {
  const [firstLetter, ...rest] = this;

  return `${firstLetter.toLocaleUpperCase()}${rest.join('')}`;
}
