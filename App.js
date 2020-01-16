/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useState} from 'react';
import {StyleSheet, View, ScrollView, Alert} from 'react-native';

import {MainLayout} from './src/MainLayout';
import {TodoState} from './src/context/todo/TodoState';

const App: () => React$Node = () => {

    return (
      <TodoState>
        <MainLayout/>
      </TodoState>
    );
  }
;


export default App;
