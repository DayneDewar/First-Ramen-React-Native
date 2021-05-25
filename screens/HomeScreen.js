import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function HomeScreen() {
    return(
        <View style={styles.container}>
            <Text style={styles.text}> Home </Text>
        </View>
    )
}
export default HomeScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      color: '#888'
    }
  })