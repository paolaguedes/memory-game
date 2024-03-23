import React, {useState} from 'react';
import {
  StyleSheet, 
  TextInput,
  View
} from 'react-native';

const Input = ({onChange, value}) => {

  return (
    <View>
      <Text></Text>
      <TextInput
        style={styles.input}
        onChangeText={onChange}
        value={value}
        placeholder={'Digite os números...'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginTop: 24,
  },
});

export default Input;