import austinWeather from '../data/austin_weather.json';

export default (column, direction) => {
  let tableData = [...austinWeather]
    tableData = tableData.sort((a, b) => {
      if (a[column] < b[column]) {
        return direction === 'up' ? -1 : 1
      }
      if (a[column] > b[column]) {
        return direction === 'up' ? 1 : -1
      }
      return 0
    })
  tableData = tableData.map(item => [item.Date, item.TempHighF+'F', item.TempAvgF+'F', item.TempLowF+'F', item.WindHighMPH+'MPH', item.WindAvgMPH+'MPH'])

  return  tableData;
}
