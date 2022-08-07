import React from 'react';
import { Appbar } from 'react-native-paper';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import { Keyboard, StyleSheet } from 'react-native';
import { colors } from '../../../styles/colors';
import { useDispatch } from 'react-redux';
import { reset } from '../../../redux/counter/counterSlice';

const MainHeader = (props: NativeStackHeaderProps) => {
  const { route, navigation } = props;
  const dispatch = useDispatch();

  return (
    <Appbar.Header style={styles.header}>
      <>
        {route.name !== 'Login' && route.name !== 'Chat' && (
          <Appbar.BackAction onPress={() => navigation.goBack()} />
        )}
      </>

      <>
        <Appbar.Content titleStyle={styles.headerContent} title={route.name} />
      </>

      <>
        {route.name === 'Login' && (
          <>
            <Appbar.Action
              icon="account-plus"
              onPress={() => navigation.navigate('Create account')}
            />
            <Appbar.Action
              icon="counter"
              onPress={() => navigation.navigate('Counter')}
            />
          </>
        )}
        {route.name === 'Chat' && (
          <Appbar.Action icon="logout" onPress={() => navigation.pop()} />
        )}
        {route.name === 'Counter' && (
          <Appbar.Action
            icon="refresh"
            size={40}
            onPress={() => {
              Keyboard.dismiss();
              dispatch(reset());
            }}
          />
        )}
      </>
    </Appbar.Header>
  );
};

export default MainHeader;

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.light,
  },
  headerContent: {
    marginLeft: 15,
    color: colors.dark,
  },
});
