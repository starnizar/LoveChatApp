import React from 'react';
import {Appbar} from 'react-native-paper';

const MainHeader = (props: any) => {
  const {route, navigation} = props;

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
