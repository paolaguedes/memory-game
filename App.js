import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { 
  StyleSheet, 
  View 
} from 'react-native';

import Button from './components/Button';
import Title from './components/Title';
import MyText from './components/Text';
import CardNumber from './components/CardNumber';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}> 
        <Title>oi, vamos jogar?</Title>
        <MyText>tente acertar os números gerados</MyText>
      </View>

      <View style={styles.boxCardNumbers}>
        <CardNumber>1</CardNumber>
        <CardNumber>1</CardNumber>
        <CardNumber>1</CardNumber>
        <CardNumber>1</CardNumber>
        <CardNumber>1</CardNumber>
        <CardNumber>1</CardNumber>
        <CardNumber>1</CardNumber>
        <CardNumber>1</CardNumber>
        <CardNumber>1</CardNumber>
        <CardNumber>1</CardNumber>
        <CardNumber>1</CardNumber>
        <CardNumber>1</CardNumber>
      </View>

      

      <Button>realizar tentativa</Button>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#050505',
    paddingHorizontal: 20,
    paddingTop: 100,
    paddingBottom: 100,
    justifyContent: 'space-between'
  },
  header: {
    marginBottom: 48,
  },
  boxCardNumbers: {
    flexDirection: 'row',
    gap: 16,
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
});
