
export function textTruncate(string, maxLength) {
  const ending = "..."

  if (string.length > maxLength) {
    return string.substring(0, maxLength - ending.length) + ending
  } else {
    return string
  }
}
