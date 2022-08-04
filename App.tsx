import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from './src/screens/LoginScreen';
import MainHeader from './src/components/main/header/MainHeader';

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          header: ({back, options, navigation, route}) => (
            <MainHeader
              navigation={navigation}
              back={back}
              options={options}
              route={route}
            />
          ),
        }}>
        <Stack.Screen name={'Login'} component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
