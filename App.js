/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useState} from 'react';
import {StyleSheet, View, Text, ScrollView, FlatList} from 'react-native';

import {Navbar} from './src/components/Navbar';
import {MainScreen} from './src/screens/MainScreen';
import {TodoScreen} from './src/screens/TodoScreen';

const App: () => React$Node = () => {
    const [todoId, setTodoId] = useState(null);
    const [todos, setTodos] = useState([]);

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
      setTodos(prev => prev.filter(todo => todo.id !== id));
    };

    let content = (
      <MainScreen todos={todos} addTodo={addTodo} removeTodo={removeTodo}/>
    );

    if (todoId) {
      content = <TodoScreen/>;
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
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
});

export default App;
