import austinWeather from '../data/austin_weather.json';
let tableData = [...austinWeather]

export default () => {
  tableData = tableData.map(item => [item.Date, item.TempHighF+'F', item.TempAvgF+'F', item.TempLowF+'F', item.WindHighMPH+'MPH', item.WindAvgMPH+'MPH'])

  return  tableData;
}
