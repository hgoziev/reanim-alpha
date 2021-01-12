import React from 'react';
import {View, StyleSheet, Button} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';

function Box() {
  const offset = useSharedValue(0);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{translateX: withSpring(offset.value * 255)}],
    };
  });

  return (
    <>
      <Animated.View style={[styles.box, animatedStyles]} />
      <Button onPress={() => (offset.value = Math.random())} title="Move" />
    </>
  );
}

export default Box;

const styles = StyleSheet.create({
  box: {
    height: 70,
    width: 70,
    borderRadius: 20,
    backgroundColor: 'blue',
  },
});
