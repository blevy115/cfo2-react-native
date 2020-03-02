import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import getOrientation from './src/hardware/getOrientation'

export default function App() {
  const [orientation, setOrientation] = getOrientation()
  return (
    <View style={styles.container}>
      {
        orientation == 'portrait' ?
        <Text>Portrait</Text>:
        <Text>Landscape</Text>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
