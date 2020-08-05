import React, { Fragment, useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { orderBy } from 'lodash'
import Filter from './Filter'
import LibraryTable from './Table'
import { columns } from '../../config/LibraryTableColumns'


const Library = () => {
  const libraryItems = useSelector((state) => state.library.catalog)
  const [libraryData, setLibraryData] = useState([])
  const [globalFilter, setGlobalFilter] = useState('')
  const setFilter = (event) => setGlobalFilter(event.target.value)

  useEffect(() => {
    const filteredItems = !globalFilter
      ? libraryItems
      : libraryItems.filter((item) => {
          const authorsMails = item.authors
            .map((author) => author.email)
            .join(' ')
            .toLowerCase()
          return (
            item.isbn
              .toString()
              .toLowerCase()
              .includes(globalFilter.toLowerCase()) ||
            authorsMails.includes(globalFilter.toLowerCase())
          )
        })

    filteredItems && setLibraryData(orderBy(filteredItems, 'title', 'asc'))
  }, [libraryItems?.length, globalFilter])

  return (
    <Fragment>
      <Filter globalFilter={globalFilter} setFilter={setFilter} />
      <LibraryTable columns={columns} data={libraryData} />
    </Fragment>
  )
}

export default Library
