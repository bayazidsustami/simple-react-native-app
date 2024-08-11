/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StyleSheet, View} from 'react-native';
import Card from './components/Card';

function App(): React.JSX.Element {
  return (
    <View style={styles.textContainer}>
      <Card title="Hello World" />
    </View>
  );
}

const styles = StyleSheet.create({
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  textHighlight: {
    color: '#4287f5',
    fontSize: 24,
  },
});

export default App;
