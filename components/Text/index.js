import React from 'react';
import {
  StyleSheet, 
  Text
} from 'react-native';

const MyText = ({children:text}) => {

  return (
    <Text style={styles.text}>
      {text}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    color: '#FFFFFF',
    fontSize: 16,
    textAlign: 'left',
  },
});

export default MyText;