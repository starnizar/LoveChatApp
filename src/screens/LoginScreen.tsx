import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Card, Text} from 'react-native-paper';

const LoginScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Card style={{width: '80%'}}>
        <Button onPress={() => navigation.navigate('Chat')}>
          <Text>Navigate to chat</Text>
        </Button>
      </Card>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
