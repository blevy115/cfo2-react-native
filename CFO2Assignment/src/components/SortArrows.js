import React from 'react'
import {TouchableOpacity, View, StyleSheet} from 'react-native';
import columnSort from '../methods/columnSort';
import { AntDesign } from '@expo/vector-icons';
import getOrientation from '../hardware/getOrientation';

const SortArrows = ({setTableData, column}) => {
  const [ orientation ] = getOrientation();

  return (
    <View style={orientation === 'portrait' ? styles.arrowsPortrait : styles.arrowsLandcape}>
      <TouchableOpacity onPress={() => setTableData(columnSort(column, 'up'))}>
        <AntDesign name="caretup" size={15} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setTableData(columnSort(column, 'down'))}>
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
