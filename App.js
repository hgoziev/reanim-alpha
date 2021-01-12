import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Gestures from './Gestures/Gestures';
import MovingCircle from './MovingCircle/MovingCircle';
import VanillaMovingCircle from './MovingCircle/VanillaMovingCircle';
import TransitionsVanilla from './Transitions/TransitionsVanilla';
import Tut from './Tut/Tut';
function App() {
  return (
    <View style={styles.container}>
      {/* <MovingCircle /> */}

      {/* <TransitionsVanilla /> */}
      <Gestures />
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontFamily: 'monospace',
    fontSize: 35,
    fontWeight: 'bold',
  },
});
