import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackHeaderProps,
} from '@react-navigation/native-stack';
import Login from './src/screens/Login';
import MainHeader from './src/components/main/header/MainHeader';
import Chat from './src/screens/Chat';
import CreateAccount from './src/screens/CreateAccount';
import Counter from './src/screens/Counter';

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          header: (props: NativeStackHeaderProps) => <MainHeader {...props} />,
        }}>
        <Stack.Screen name={'Login'} component={Login} />
        <Stack.Screen
          options={{ gestureEnabled: false }}
          name={'Chat'}
          component={Chat}
        />
        <Stack.Screen name={'Create account'} component={CreateAccount} />
        <Stack.Screen name={'Counter'} component={Counter} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
