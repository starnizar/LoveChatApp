import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ChatScreenProps } from '../types/types';

const ChatScreen = (props: ChatScreenProps) => {
  const { navigation } = props;
  return <View style={styles.container} />;
};

export default ChatScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
