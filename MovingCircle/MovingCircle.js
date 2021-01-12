import React from 'react';
import {StyleSheet, View} from 'react-native';
import {PanGestureHandler} from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';
import {panGestureHandler, withOffset} from 'react-native-redash/lib/module/v1';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ball: {
    backgroundColor: 'red',
    height: 80,
    width: 80,
    borderRadius: 40,
  },
});

const MovingCircle = () => {
  const {gestureHandler, translation, state} = panGestureHandler();
  const translateX = withOffset(translation.x, state);
  const translateY = withOffset(translation.y, state);

  return (
    <View style={styles.container}>
      <PanGestureHandler {...gestureHandler}>
        <Animated.View
          style={[styles.ball, {transform: [{translateX}, {translateY}]}]}
        />
      </PanGestureHandler>
    </View>
  );
};

export default MovingCircle;
