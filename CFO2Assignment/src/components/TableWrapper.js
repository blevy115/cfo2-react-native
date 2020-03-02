import React from 'react';
import {StyleSheet, FlatList} from 'react-native';
import austinWeather from '../data/austin_weather.json';
import { Table, Row, Rows } from 'react-native-table-component';

const tableData = austinWeather.map(item => [item.Date, item.TempHighF+'F', item.TempAvgF+'F', item.TempLowF+'F', item.WindHighMPH+'MPH', item.WindAvgMPH+'MPH'])
tableData.unshift(['Date', 'Temp High', 'Temp Avg', 'Temp Low', 'Wind High', 'Wind Avg']);

const TableWrapper = () => {
  return (
    <Table borderStyle={styles.table}>
      <FlatList
        style={styles.list}
        data={tableData}
        keyExtractor={item => item[0]}
        renderItem={({ item }) => {
          return <Row data={item} textStyle={styles.text} flexArr={[1.5,1,1,1,1,1]} style={item[0] === 'Date' ? styles.head: null}>
          </Row>
        }}
      />
    </Table>
  )
}

const styles = StyleSheet.create({
  head: { backgroundColor: '#f1f8ff'},
  text: {
    paddingVertical: 6 ,
    textAlign:'center',
    borderColor:'black',
    borderWidth:1
  },
  table: {
    borderWidth: 2,
    borderColor: '#c8e1ff',
    marginTop:50
  },
  list: {
    marginVertical: 40,
    marginHorizontal:10
  },
})

export default TableWrapper;
