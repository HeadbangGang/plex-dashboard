export const alphabetizeByTitle = (urls) => {
  return urls.sort((a, b) => {
    a = a.title.toLowerCase()
    b = b.title.toLowerCase()
    if (a < b) return -1
    if (a > b) return 1
    return 0
  })
}
