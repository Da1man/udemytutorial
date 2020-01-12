import React, {useState} from 'react';
import {View, TextInput, StyleSheet, Button, Alert} from 'react-native';
import {THEME} from '../theme';

export const AddTodo = ({onSubmit}) => {

  const [value, setValue] = useState([])

  const pressHendler = () => {
    if (value.trim()) {
      onSubmit(value)
      setValue('')
    } else {
      Alert.alert('Название дела не может быть пустым')
    }

  }

  return (
    <View style={styles.block}>
      <TextInput
        style={styles.input}
        placeholder={'Введите название дела...'}
        onChangeText={setValue}
        value={value}
        autoCorrect={false}
        autoCapitalize={'none'}
      />
      <Button title="Добавить" onPress={pressHendler} />
    </View>
  )
};

const styles = StyleSheet.create({
  block: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  input: {
    width: '70%',
    padding: 10,
    borderBottomWidth: 2,
    borderStyle: 'solid',
    borderBottomColor: THEME.MAIN_COLOR,
  }
});
