import React, {useState, useContext} from 'react'
import {TextInput, StyleSheet} from 'react-native';
import columnFilter from '../methods/columnFilter';
import { Context as WeatherContext } from '../context/WeatherContext';

const FilterField = ({ columnIndex }) => {
  const [value, onChangeText] = useState('');
  const { state, filterData } = useContext(WeatherContext)

  const enterText = (text) => {
    onChangeText(text)
    filterData(columnIndex, text)
  }

  return (
    <TextInput
      style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
      onChangeText={text => enterText(text)}
      value={value}
    />
  )
}

export default FilterField;
