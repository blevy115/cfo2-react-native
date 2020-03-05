import React, {useState} from 'react'
import {TextInput, StyleSheet} from 'react-native';
import columnFilter from '../methods/columnFilter';

const FilterField = ({ title, column, setTableData }) => {
  const [value, onChangeText] = React.useState('');
  const enterText = (text) => {
    onChangeText(text)
    setTableData(columnFilter(column, text))
  }

  return (
    <TextInput
      style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
      onChangeText={text => enterText(text)}
      value={value}
      placeholder={title}
    />
  )
}

export default FilterField;
