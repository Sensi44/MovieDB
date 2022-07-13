export default function truncate(str, maxlength) {
  let result = str.slice(0, maxlength).split(' ');
  if (result.length < 9) {
    result = result.splice(0, result.length).join(' ');
    return result.length <= maxlength ? result : `${result}…`;
  }
  if (str.length < maxlength) {
    return result.splice(0, result.length).join(' ');
  }
  result = result.splice(0, result.length - 1).join(' ');
  result = result.includes('.' || ',' || '?' || ',', result.length - 1)
    ? `${result.slice(0, result.length - 1)}…`
    : `${result}…`;
  return result;
}
