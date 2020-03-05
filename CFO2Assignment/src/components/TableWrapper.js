import React, {useState, useEffect} from 'react';
import {Text, StyleSheet, FlatList, TouchableOpacity, View} from 'react-native';
import { Table, Row } from 'react-native-table-component';
import getOrientation from '../hardware/getOrientation';
import loadData from '../methods/loadData';
import SortArrows from './SortArrows';
import FilterField from './FilterField';


const TableWrapper = () => {
  const [tableData, setTableData] = useState([]);
  useEffect(() => {
    setTableData(loadData());
  }, []);

  const [ orientation ] = getOrientation();
  const headers = [['Date', 'Date'], ['Temp High','TempHighF'], ['Temp Avg', 'TempAvgF'], ['Temp Low', 'TempLowF'], ['Wind High', 'WindHighMPH'], ['Wind Avg', 'WindAvgMPH']];

  const titleElement = (title, column) => (
    <View style={orientation === 'portrait' ? styles.titlePortrait : styles.titleLandscape}>
      <Text style={styles.headersText}>{title === 'Date' && orientation === 'portrait' ? title + '\n' : title}</Text>
      <SortArrows setTableData={setTableData} column={column}/>
    </View>
  )

  const rowFilter = (title, column) => (
    <FilterField title={title} column={column} setTableData={setTableData} />
  )

  const tableHeaders = headers.map(x => titleElement(x[0],x[1]));
  const tableFilter = headers.map(x => rowFilter(x[0],x[1]))

  return (
    <Table style={orientation === 'portrait' ? styles.listPortrait: styles.listLandscape}>
    <Row data={tableHeaders} style={styles.headers} textStyle={styles.headersText} flexArr={orientation === 'portrait' ? [2,1,1,1,1,1]: [1.3,1,1,1,1]}></Row>
    <Row data={tableFilter} style={styles.headers} textStyle={styles.headersText} flexArr={orientation === 'portrait' ? [2,1,1,1,1,1]: [1.3,1,1,1,1]}></Row>
      <FlatList
        data={tableData}
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
