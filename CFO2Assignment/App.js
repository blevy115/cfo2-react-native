import React from 'react';
import { StyleSheet, View } from 'react-native';
import TableWrapper from './src/components/TableWrapper'

export default function App() {
  return (
    <View style={styles.container}>
    <TableWrapper />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

});
