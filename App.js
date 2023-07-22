import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import CurrencyConverter from './src/api/currencyConverter';

export default function App() {
  return (
    <View style={styles.container}>
     <Text style={styles.title}>Converter Moeda</Text>
     <View style={styles.space} />
      <CurrencyConverter />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F1EFFF',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color:'#0D4BF2',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
  space: {
    height:20,
    
  }
});
