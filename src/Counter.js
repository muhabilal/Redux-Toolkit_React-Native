import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, setName } from './counterSlice'
const Counter = () => {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
    const name = useSelector((state) => state.counter.name)
    console.log(name);
    return (
        <View>
            <View>
                <TouchableOpacity onPress={() => dispatch(increment())}>
                    <Text>Increment value</Text>
                </TouchableOpacity>
            </View>
            <Text>{count}</Text>
            <View>
                <TouchableOpacity onPress={() => dispatch(decrement())}>
                    <Text>Decrement value</Text>
                </TouchableOpacity>
            </View>
            <Text>{name}</Text>

            <Button title='change' onPress={() => { dispatch(setName("bilal")) }}>
            </Button>
        </View>
    )
}
export default Counter
const styles = StyleSheet.create({})