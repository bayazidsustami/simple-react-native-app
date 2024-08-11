import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface CardProps {
  title: string;
}

export default function Card({title}: CardProps): React.JSX.Element {
  return (
    <View style={styles.card}>
      <Text>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginVertical: 10,
    marginHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
});
