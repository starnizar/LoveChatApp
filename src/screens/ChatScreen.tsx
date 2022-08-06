import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

interface ChatScreenProps {
  navigation: NativeStackNavigationProp<any>;
}

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
