import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

export default function App() {

  const [input, setInput] = useState('');
  const [input2, setInput2] = useState('');
  const [result, setResult] = useState('');


  return (
    <View style={styles.container}>
      <Text>Result: {result} </Text>
      <TextInput
      style={styles.input}
      keyboardType="numeric"
      onChangeText={input => setInput(input)}
      value={input}
      />
      <TextInput
      style={styles.input}
      keyboardType="numeric"
      onChangeText={input2 => setInput2(input2)}
      value={input2}
      />
      <View style={styles.buttons}>
      <Button onPress={result => setResult(parseInt(input) + parseInt(input2))} title= '+'/>
      <Button onPress={result => setResult(parseInt(input) - parseInt(input2))} title= '-'/>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: 200,
    borderColor: 'gray',
    borderWidth: 1
  },
  buttons: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  }
});
