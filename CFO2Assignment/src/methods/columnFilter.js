import austinWeather from '../data/austin_weather.json';

export default (column, input) => {
  let tableData = [...austinWeather]
  if (column && input) {
    tableData = tableData.filter( data => String(data[column]).includes(input))
  } else {
    tableData = tableData
  }
  tableData = tableData.map(item => [item.Date, item.TempHighF+'F', item.TempAvgF+'F', item.TempLowF+'F', item.WindHighMPH+'MPH', item.WindAvgMPH+'MPH'])

  return  tableData;
}
