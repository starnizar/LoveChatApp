import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { ChatScreenProps } from '../types/types';
import { Card, Text } from 'react-native-paper';

const Chat = (props: ChatScreenProps) => {
  const { navigation } = props;

  const isLoggedIn = true;

  useEffect(() => {
    navigation.addListener('beforeRemove', event => {
      event.preventDefault();
      if (isLoggedIn) {
        return;
      }
    });
  }, [isLoggedIn, navigation]);

  return (
    <View style={styles.container}>
      <Card>
        <Text>Chat screen</Text>
      </Card>
    </View>
  );
};

export default Chat;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
