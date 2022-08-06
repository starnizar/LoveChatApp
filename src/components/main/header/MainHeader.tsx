import React from 'react';
import { Appbar, DefaultTheme } from 'react-native-paper';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';

const MainHeader = (props: NativeStackHeaderProps) => {
  const { route, navigation } = props;

  return (
    <Appbar.Header theme={DefaultTheme} dark={true}>
      {route.name !== 'Login' && route.name !== 'Chat' && (
        <Appbar.BackAction onPress={() => navigation.goBack()} />
      )}
      <Appbar.Content title={route.name} />
      {route.name === 'Login' && (
        <Appbar.Action
          icon="account-plus"
          onPress={() => navigation.navigate('Create account')}
        />
      )}
      {route.name === 'Chat' && (
        <Appbar.Action icon="logout" onPress={() => navigation.pop()} />
      )}
    </Appbar.Header>
  );
};

export default MainHeader;
