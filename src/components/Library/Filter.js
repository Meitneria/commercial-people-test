import React from 'react'
import TextField from '@material-ui/core/TextField'

const Filter = ({ globalFilter, setFilter }) => {
  return (
      <TextField
        value={globalFilter}
        onChange={setFilter}
        placeholder={'Type isbn or email to filter'}
        margin={'dense'}
        autoFocus={true}
      />
  )
}

export default Filter
