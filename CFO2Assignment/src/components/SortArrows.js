import React from 'react'
import {TouchableOpacity, View} from 'react-native';
import columnSort from '../methods/columnSort';
import { AntDesign } from '@expo/vector-icons';
import getOrientation from '../hardware/getOrientation';

const SortArrows = ({setTableData, column}) => {
  const [ orientation ] = getOrientation();

  return (
    <View style={{alignSelf:orientation === 'portrait' ? 'center': 'flex-end', marginVertical:3}}>
      <TouchableOpacity onPress={() => setTableData(columnSort(column, 'up'))}>
        <AntDesign name="caretup" size={15} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setTableData(columnSort(column, 'down'))}>
        <AntDesign name="caretdown" size={15} />
      </TouchableOpacity>
    </View>
  )
}

export default SortArrows;
