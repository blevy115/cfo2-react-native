import createDataContext from './createDataContext';
import austinWeather from '../data/austin_weather.json';

const weatherReducer = (state, action) => {
  switch (action.type) {
      case 'load_data':
        return {...state, tableData: action.payload, completeTableData:action.payload}
      case 'sort_data':
        return {...state, tableData: action.payload(state.tableData)}
      case 'filter_data':
        return {...state, tableData: action.payload(state.completeTableData)}
    default:
    return state;
  }
}

const loadData = dispatch => () => {
  let tableData = [...austinWeather]
  tableData = tableData.map(item => [item.Date, item.TempHighF+'F', item.TempAvgF+'F', item.TempLowF+'F', item.WindHighMPH+'MPH', item.WindAvgMPH+'MPH'])
  dispatch({type: 'load_data', payload: tableData})
}

const filterData = dispatch => (columnIndex, input) => {
  const filterFunction = (tableData) => {
    return tableData.filter( data => String(data[columnIndex]).includes(input))
  }
  dispatch({type:'filter_data', payload: filterFunction})
}

const sortData = dispatch => (columnIndex, direction) => {
  const sortFunction = (tableData) => {
    return tableData.sort((a, b) => {
      if (a[columnIndex] < b[columnIndex]) {
        return direction === 'up' ? -1 : 1
      }
      if (a[columnIndex] > b[columnIndex]) {
        return direction === 'up' ? 1 : -1
      }
      return 0
    })
  }
  dispatch({type:'sort_data', payload: sortFunction})

}


export const { Provider, Context } = createDataContext(
  weatherReducer,
  {loadData, filterData, sortData},
  {trackData:[]}
)
