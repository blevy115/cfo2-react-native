import createDataContext from './createDataContext';
import austinWeather from '../data/austin_weather.json';

const weatherReducer = (state, action) => {
  switch (action.type) {
      case 'loading_screen':
        return {...state, loading:true}
      case 'load_data':
        return {...state, loading: false, tableData: action.payload, completeTableData:action.payload}
      case 'sort_data':
        return {...state, loading: false, tableData: action.payload(state.tableData)}
      case 'filter_data':
        return {...state, loading: false, tableData: action.payload(state.completeTableData, state.filterFields)}
      case 'add_filter':
        state.filterFields[action.payload[0]] = action.payload[1];
      return state;
    default:
      return state;
  }
}

const loadData = dispatch => () => {
  let tableData = [...austinWeather]
  tableData = tableData.map(item => [item.Date, item.TempHighF+'F', item.TempAvgF+'F', item.TempLowF+'F', item.WindHighMPH+'MPH', item.WindAvgMPH+'MPH'])
  dispatch({type: 'load_data', payload: tableData})
}

const filterData = dispatch => async (columnIndex, input) => {
  await dispatch({type:'add_filter', payload:[columnIndex, input]})
  const filterFunction = (tableData, filterFields) => {
    return tableData.filter( data => {
      for(let i = 0; i< data.length ; i++) {
        if(filterFields[i] && !data[i].includes(filterFields[i])){
          return false
        }
      }
      return true
    })
  }
  dispatch({type:'filter_data', payload: filterFunction})
}

const sortData = dispatch => async (columnIndex, direction) => {
  await dispatch({type:'loading_screen'})
  const sortFunction = (tableData) => {
    return tableData.sort((a, b) => {
      if (parseInt(a[columnIndex].replace(/\D/g,'')) < parseInt(b[columnIndex].replace(/\D/g,''))) {
        return direction === 'up' ? -1 : 1
      }
      if (parseInt(a[columnIndex].replace(/\D/g,'')) > parseInt(b[columnIndex].replace(/\D/g,''))) {
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
  {trackData:[], filterFields:['','','','','',''], loading:true}
)
