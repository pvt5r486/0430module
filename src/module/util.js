function reverse(str) {
  let tempStr = '';
  for (let i = str.length - 1; i >= 0; i--) {
    tempStr = tempStr + str[i];
  }
  return tempStr;
}

module.exports = reverse;
