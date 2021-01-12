import React from 'react';
import {View, Text, StyleSheet, PanResponder, Animated} from 'react-native';

function VanillaMovingCircle() {
  const position = new Animated.ValueXY();
  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponderCapture: () => true,
    onPanResponderGrant: () => {
      position.setOffset({
        x: position.x._value,
        y: position.y._value,
      });
      position.setValue({x: 0, y: 0});
    },
    onPanResponderMove: Animated.event([
      null,
      {dx: position.x, dy: position.y},
    ]),
    onPanResponderRelease: () => {
      position.flattenOffset();
    },
  });

  return (
    <View style={styles.container}>
      <Animated.View
        style={[styles.ball, position.getLayout()]}
        {...panResponder.panHandlers}
      />
    </View>
  );
}

export default VanillaMovingCircle;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ball: {
    backgroundColor: 'rgb(16, 195, 255)',
    height: 80,
    width: 80,
    borderRadius: 40,
  },
});
