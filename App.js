import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import {Controller, useForm} from 'react-hook-form'
import { useState } from 'react';

export default function App() {
  const [value, setText] = useState("")

  const {control} = useForm()

  const onChange = (t) => setText(t)

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>Open up App.js to start working on your app!</Text>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="firstName"
        rules={{ required: true }} />

        <TextInput 
          style={styles.input}
          onChangeText={onChange}
          value={value}
        />
        <TextInput 
          style={styles.input}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap:10,
    padding: 12,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  input: {
    padding: 4,
    borderWidth:1,
    borderColor: 'black',
  }
});
