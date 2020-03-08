import React, {useState, useContext} from 'react'
import {TextInput, StyleSheet} from 'react-native';
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
      style={styles.input}
      onChangeText={text => enterText(text)}
      value={value}
      placeholder="Filter..."
      placeholderTextColor={'black'}
    />
  )
}

const styles = StyleSheet.create({
  input:{
    height: 35,
    borderColor: 'gray',
    borderWidth: 1
  },
  placeholder: {
    color:'black',
    textAlign:'center'
  }
})

export default FilterField;
