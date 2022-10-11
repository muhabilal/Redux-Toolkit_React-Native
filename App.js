import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Provider } from 'react-redux'
import { store } from './src/store'
import Counter from './src/Counter'
const App = () => {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({})