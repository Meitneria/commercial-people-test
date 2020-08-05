import Papa from 'papaparse'

const fetchCsv = (path) => {
  return fetch(path).then((response) => {
    const reader = response.body.getReader()
    const decoder = new TextDecoder('utf-8')
    return reader.read().then((result) => decoder.decode(result.value))
  })
}

const getCsvData = async (path) => {
  const csvData = await fetchCsv(path)
  return Papa.parse(csvData, {
    header: true,
  })
}

export default getCsvData
