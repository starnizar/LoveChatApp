import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from './src/screens/LoginScreen';
import MainHeader from './src/components/main/header/MainHeader';
import ChatScreen from './src/screens/ChatScreen';

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          header: props => <MainHeader {...props} />,
        }}>
        <Stack.Screen name={'Login'} component={LoginScreen} />
        <Stack.Screen name={'Chat'} component={ChatScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
