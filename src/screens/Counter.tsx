import React, { Dispatch, useState } from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { Card, IconButton, Text, TextInput } from 'react-native-paper';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import {
  decrement,
  increment,
  incrementByValue,
} from '../redux/counter/counterSlice';

const Counter = () => {
  const dispatch = useDispatch();
  const { value } = useTypedSelector(state => state.counter);
  const [inputValue, setInputValue] = useState('');

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Card style={styles.card}>
          <Text variant="headlineLarge">{value}</Text>
        </Card>

        <KeyboardAvoidingView>
          <TextInput
            keyboardAppearance="dark"
            value={inputValue}
            onChangeText={changedValue => setInputValue(changedValue)}
            mode="outlined"
            keyboardType="number-pad"
            style={styles.input}
            right={
              <TextInput.Icon
                name="check-bold"
                onPress={() => {
                  Keyboard.dismiss();
                  dispatch(incrementByValue(+inputValue));
                }}
              />
            }
          />

          <View style={styles.buttonsWrapper}>
            <IconButton
              size={70}
              icon="numeric-positive-1"
              onPress={() => dispatch(increment())}
            />

            <IconButton
              size={70}
              icon="numeric-negative-1"
              onPress={() => dispatch(decrement())}
            />
          </View>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Counter;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    paddingHorizontal: 20,
  },
  card: {
    alignSelf: 'center',
    width: 200,
    alignItems: 'center',
    padding: 10,
  },
  input: {
    marginBottom: 20,
  },
  buttonsWrapper: {
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
});
