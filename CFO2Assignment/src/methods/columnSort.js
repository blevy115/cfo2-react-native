import austinWeather from '../data/austin_weather.json';
let tableData = austinWeather

export default (column, direction) => {
  let tempTableData;
  if (column && direction) {
    tempTableData = tableData.sort((a, b) => {
      if (a[column] < b[column]) {
        return direction === 'up' ? -1 : 1
      }
      if (a[column] > b[column]) {
        return direction === 'up' ? 1 : -1
      }
      return 0
    })
  } else {
    tempTableData = tableData
  }
  tempTableData = tempTableData.map(item => [item.Date, item.TempHighF+'F', item.TempAvgF+'F', item.TempLowF+'F', item.WindHighMPH+'MPH', item.WindAvgMPH+'MPH'])

  return  tempTableData;
}
