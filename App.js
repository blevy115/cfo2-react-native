import React from 'react';
import { StyleSheet, View } from 'react-native';
import TableWrapper from './src/components/TableWrapper'
import { Provider as WeatherProvider } from './src/context/WeatherContext';

export default function App() {
  return (
    <WeatherProvider>
    <View style={styles.container}>
    <TableWrapper />
    </View>
    </WeatherProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
