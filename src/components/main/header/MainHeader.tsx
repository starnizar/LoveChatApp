import React from 'react';
import { Appbar } from 'react-native-paper';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';

const MainHeader = (props: NativeStackHeaderProps) => {
  const { route, navigation } = props;

  return (
    <Appbar.Header>
      {route.name !== 'Login' && (
        <Appbar.BackAction onPress={() => navigation.goBack()} />
      )}
      <Appbar.Content title={route.name} />
    </Appbar.Header>
  );
};

export default MainHeader;
