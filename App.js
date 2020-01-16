/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useState} from 'react';
import {StyleSheet, View, ScrollView, Alert} from 'react-native';

import {Navbar} from './src/components/Navbar';
import {MainScreen} from './src/screens/MainScreen';
import {TodoScreen} from './src/screens/TodoScreen';
import {THEME} from './src/theme';

const App: () => React$Node = () => {
    const [todoId, setTodoId] = useState(null);
    const [todos, setTodos] = useState([
      // {id: '1', title: 'Выучить React Native'},
    ]);

    const addTodo = (title) => {
      // const newTodo ={
      //   id: Date.now().toString(),
      //   title: title
      // }
      // setTodos(todos.concat([newTodo]))
      // setTodos((prevTodos) => {
      //   return [
      //     ...prevTodos,
      //     newTodo
      //   ]
      // } )

      setTodos(prev => [
        ...prev, {
          id: Date.now().toString(),
          title,
        }]);
    };

    const removeTodo = id => {
      const todo = todos.find(t => t.id === id);

      Alert.alert(
        'Удаление элемента',
        `Вы уверены, что хотите удалить ${todo.title}?`,
        [
          {
            text: 'Отмена',
            style: 'cancel',
          },
          {
            text: 'Удалить',
            onPress: () => {
              setTodoId(null);
              setTodos(prev => prev.filter(todo => todo.id !== id));
            },
          },
        ],
        {cancelable: true},
      );

    };

    const updateTodo = (id, title) => {
      setTodos(old => old.map(todo => {
        if (todo.id === id) {
          todo.title = title;
        }
        return todo;
      }));
    };

    let content = (
      <MainScreen
        todos={todos}
        addTodo={addTodo}
        removeTodo={removeTodo}
        openTodo={setTodoId}/>
    );

    if (todoId) {
      const selectedTodo = todos.find(todo => todo.id === todoId);
      content = <TodoScreen
        onRemove={removeTodo}
        goBack={() => setTodoId(null)}
        todo={selectedTodo}
        onSave={updateTodo}
      />;
    }


    return (
      <View>
        <Navbar title="Todo App!"/>
        <View style={styles.container}>
          {content}
        </View>
      </View>
    );
  }
;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: THEME.PADDING_HORISONTAL,
    paddingVertical: 20,
  },
});

export default App;
