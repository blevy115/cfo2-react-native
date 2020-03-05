import React, {useState, useEffect, useContext } from 'react';
import {Text, StyleSheet, FlatList, TouchableOpacity, View} from 'react-native';
import { Table, Row } from 'react-native-table-component';
import getOrientation from '../hardware/getOrientation';
// import loadData from '../methods/loadData';
import SortArrows from './SortArrows';
import FilterField from './FilterField';
import { Context as WeatherContext } from '../context/WeatherContext';

const TableWrapper = () => {
  const [tableData, setTableData] = useState([]);
  const { state, loadData } = useContext(WeatherContext)
  useEffect(() => {
    loadData();
  }, []);

  const [ orientation ] = getOrientation();
  const headers = ['Date', 'Temp High', 'Temp Avg', 'Temp Low', 'Wind High', 'Wind Avg'];

  const titleElement = (title, columnIndex) => (
    <View style={orientation === 'portrait' ? styles.titlePortrait : styles.titleLandscape}>
      <Text style={styles.headersText}>{title === 'Date' && orientation === 'portrait' ? title + '\n' : title}</Text>
      <SortArrows columnIndex={columnIndex}/>
    </View>
  )

  const rowFilter = (columnIndex) => (
    <FilterField columnIndex={columnIndex} />
  )

  const tableHeaders = headers.map(x => titleElement(x, headers.indexOf(x)));
  const tableFilter = headers.map(x => rowFilter(headers.indexOf(x)))

  return (
    <Table style={orientation === 'portrait' ? styles.listPortrait: styles.listLandscape}>
    <Row data={tableHeaders} style={styles.headers} textStyle={styles.headersText} flexArr={orientation === 'portrait' ? [2,1,1,1,1,1]: [1.3,1,1,1,1]}></Row>
    <Row data={tableFilter} style={styles.headers} textStyle={styles.headersText} flexArr={orientation === 'portrait' ? [2,1,1,1,1,1]: [1.3,1,1,1,1]}></Row>
      <FlatList
        data={state.tableData}
        keyExtractor={item => item[0]}
        renderItem={({ item }) => {
          return <Row data={item} textStyle={styles.text} flexArr={orientation === 'portrait' ? [2,1,1,1,1,1]: [1.3,1,1,1,1]}>
          </Row>
        }}
      />
    </Table>
  )
}

const styles = StyleSheet.create({
  headers: { backgroundColor: '#f1f8ff'},
  headersText: {
    paddingVertical: 6 ,
    textAlign:'center',
    fontSize: 20,
  },
  text: {
    paddingVertical: 6 ,
    textAlign:'center',
    borderColor:'black',
    borderWidth:1
  },
  table: {
    marginVertical: 40,
    marginHorizontal: 10
  },
  listPortrait: {
    marginVertical: 40,
    marginHorizontal: 10
  },
  listLandscape: {
    marginVertical: 10,
    marginHorizontal: 40
  },
  titlePortrait: {
    flexDirection:'column',
    justifyContent:'space-between'
  },
  titleLandscape: {
    flexDirection:'row',
    justifyContent:'space-around'
  }
})

export default TableWrapper;
