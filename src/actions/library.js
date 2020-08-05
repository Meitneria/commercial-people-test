export const SET_LIBRARY_ITEMS = Symbol('SET_LIBRARY_ITEMS')

export function setLibraryItems({ books, magazines, authors }) {
  const data = [...books, ...magazines]
  const catalog = data.map((item) => {
    const authorsEmails = item.authors.split(',')
    const authorsDetails = authorsEmails.map((email) =>
      authors.find((author) => author.email === email)
    )
    return { ...item, authors: authorsDetails }
  })

  return {
    type: SET_LIBRARY_ITEMS,
    payload: { catalog },
  }
}
