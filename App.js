/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useState} from 'react';
import {StyleSheet, View, Text, ScrollView, FlatList} from 'react-native';

import {Navbar} from './src/Navbar';
import {AddTodo} from './src/AddTodo';
import {Todo} from './src/Todo';

const App: () => React$Node = () => {
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
    setTodos (prev => prev.filter(todo => todo.id !== id))
  }

  return (
    <View>
      <Navbar title="Todo App!"/>
      <View style={styles.container}>
        <AddTodo onSubmit={addTodo}/>

        <FlatList
          keyExtractor={item => item.id.toString()}
          data={todos}
          renderItem={({item}) => <Todo todo={item} onRemove={removeTodo}/>
          }
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
});

export default App;
