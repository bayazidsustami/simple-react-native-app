/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

function App(): React.JSX.Element {
  return (
    <View style={styles.textHighlight}>
      <Text>Hello, world!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  textHighlight: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
