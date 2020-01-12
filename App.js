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
    const [todos, setTodos] = useState([
      {id: '1', title: 'Выучить React Native'},
      {id: '2', title: 'Написать приложение'},
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
      setTodos(prev => prev.filter(todo => todo.id !== id));
    };

    let content = (
      <MainScreen
        todos={todos}
        addTodo={addTodo}
        removeTodo={removeTodo}
        openTodo={setTodoId}/>
    );

    if (todoId) {
      const selectedTodo = todos.find(todo => todo.id === todoId)
      content = <TodoScreen goBack={() => setTodoId(null)} todo={selectedTodo}/>;
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
