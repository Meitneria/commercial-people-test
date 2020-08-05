export const columns = [
  {
    Header: 'Title',
    accessor: 'title',
  },
  {
    Header: 'isbn',
    accessor: 'isbn',
    disableSortBy: true,
    filter: 'text',
  },
  {
    Header: 'Authors',
    accessor: (row, i) =>
      row.authors.map((author) => `${author.firstname} ${author.lastname} `),
  },
  {
    Header: 'Description',
    accessor: 'description',
    disableSortBy: true,
  },
  {
    Header: 'Published',
    accessor: 'publishedAt',
    disableSortBy: true,
  },
]
