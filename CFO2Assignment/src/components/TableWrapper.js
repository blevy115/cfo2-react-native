import React, {useState, useEffect} from 'react';
import {Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import { Table, Row } from 'react-native-table-component';
import getOrientation from '../hardware/getOrientation';
import columnSort from '../methods/columnSort';

const TableWrapper = () => {
  const [tableData, setTableData] = useState([]);
  useEffect(() => {
    setTableData(columnSort());
  }, []);

  const titleElement = (title, column) => (
    <TouchableOpacity onPress={() => setTableData(columnSort(column, 'up'))}>
      <Text style={styles.headersText}>{title}</Text>
    </TouchableOpacity>
  )

  const headers = [['Date', 'Date'], ['Temp High','TempHighF'], ['Temp Avg', 'TempAvgF'], ['Temp Low', 'TempLowF'], ['Wind High', 'WindHighMPH'], ['Wind Avg', 'WindAvgMPH']];

  const tableHeaders = headers.map(x => titleElement(x[0],x[1]));

  const [ orientation ] = getOrientation();

  return (
    <Table style={orientation === 'portrait' ? styles.listPortrait: styles.listLandscape}>
    <Row data={tableHeaders} style={styles.headers} textStyle={styles.headersText} flexArr={[2,1,1,1,1,1]}></Row>
      <FlatList
        data={tableData}
        keyExtractor={item => item[0]}
        renderItem={({ item }) => {
          return <Row data={item} textStyle={styles.text} flexArr={[2,1,1,1,1,1]}>
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
  }
})

export default TableWrapper;
