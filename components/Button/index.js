import React from 'react';
import {
  StyleSheet, 
  Text, 
  TouchableOpacity
} from 'react-native';

const Button = ({onPress, children:text}) => {

  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#AF6ADE',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginTop: 24,
  },
  text: {
    color: '#FFFFFF',
    fontWeight: '500',
    width: '70vw',
    textAlign: 'center',
  },
});

export default Button;