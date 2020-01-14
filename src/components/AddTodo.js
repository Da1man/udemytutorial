import React, {useState} from 'react';
import {View, TextInput, StyleSheet, Button, Alert, TouchableOpacity} from 'react-native';
import {THEME} from '../theme';
import {AppText} from './ui/AppText';

import Icon from 'react-native-vector-icons/FontAwesome';

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
      <TouchableOpacity style={styles.addButton} onPress={pressHendler} >
        <Icon name="plus" size={15} color="#fff" />
        <AppText style={{color: '#fff'}}>
          ДОБАВИТЬ
        </AppText>
      </TouchableOpacity>
      {/*<Button title="Добавить" onPress={pressHendler} />*/}
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
    width: '60%',
    padding: 10,
    borderBottomWidth: 2,
    borderStyle: 'solid',
    borderBottomColor: THEME.MAIN_COLOR,
  },
  addButton: {
    width: '30%',
    padding: 10,
    backgroundColor: THEME.MAIN_COLOR,
    borderRadius: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
