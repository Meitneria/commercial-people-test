import React, { useEffect } from 'react'
import Library from '../components/Library'
import { setLibraryItems } from '../actions/library'
import { useDispatch } from 'react-redux'

import getCsvData from '../helpers/getCsvData'

const books = '/data/books.csv'
const authors = '/data/authors.csv'
const magazines = '/data/magazines.csv'

const LibraryContainer = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const paths = [books, authors, magazines]
    const getData = paths.map((path) => getCsvData(path))
    Promise.all(getData).then(([books, authors, magazines]) =>
      dispatch(
        setLibraryItems({
          books: books.data,
          magazines: magazines.data,
          authors: authors.data,
        })
      )
    )
  }, [])

  return <Library />
}

export default LibraryContainer
