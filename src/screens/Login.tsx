import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Card, Text } from 'react-native-paper';
import { LoginScreenProps } from '../types/types';

const Login = (props: LoginScreenProps) => {
  const { navigation } = props;

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Button disabled onPress={() => navigation.navigate('Chat')}>
            <Text>Navigate to chat</Text>
          </Button>
        </Card.Content>
      </Card>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    width: '100%',
  },
});
