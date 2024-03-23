import React from 'react';
import {
  StyleSheet, 
  Text, 
  View
} from 'react-native';

const CardNumber = ({children:text}) => {

  return (
    <View style={styles.card}>
      <Text style={styles.textCard}>
        {text}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    alignSelf: 'center',
    color: '#FFFFFF',
    fontSize: 16,
    borderWidth: 2,
    borderColor: "#FFFFFF",
    paddingVertical: 6,
    paddingHorizontal: 18,
    borderRadius: 50,
    width: 'min-content',
  },
  textCard: {
    color: '#AF6ADE',
    fontSize: 36,
    fontWeight: '600',
  }
});

export default CardNumber;