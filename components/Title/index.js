import React from 'react';
import {
  StyleSheet, 
  Text
} from 'react-native';

const Title = ({children:text}) => {

  return (
    <Text style={styles.title}>
      {text}
    </Text>
  );
};

const styles = StyleSheet.create({
  title: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: '700',
  },
});

export default Title;