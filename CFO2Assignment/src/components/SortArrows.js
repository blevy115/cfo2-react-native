import React, {useContext} from 'react'
import {TouchableOpacity, View, StyleSheet} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import getOrientation from '../hardware/getOrientation';
import { Context as WeatherContext } from '../context/WeatherContext';


const SortArrows = ({columnIndex}) => {
  const [ orientation ] = getOrientation();
  const { state, sortData } = useContext(WeatherContext)

  return (
    <View style={orientation === 'portrait' ? styles.arrowsPortrait : styles.arrowsLandcape}>
      <TouchableOpacity onPress={() => sortData(columnIndex, 'up')}>
        <AntDesign name="caretup" size={15} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => sortData(columnIndex, 'down')}>
        <AntDesign name="caretdown" size={15} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  arrowsPortrait: {
    alignSelf: 'center',
    marginBottom:5
  },
  arrowsLandcape: {
    alignSelf: 'flex-end',
    marginVertical:2
  }
})

export default SortArrows;
