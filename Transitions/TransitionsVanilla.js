import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import Animated from 'react-native-reanimated';
import {
  mix,
  transformOrigin,
  useTransition,
} from 'react-native-redash/lib/module/v1';
import {CARD_WIDTH, Card, StyleGuide, cards} from '../Components';

const alpha = 0.5;

function TransitionsVanilla() {
  const [toggled, setToggled] = useState(false);
  const transition = useTransition(toggled, {duration: 300});

  return (
    <View style={styles.container}>
      {cards.slice(0, 3).map((card, index) => {
        const rotate = mix(transition, 0, (index - 1) * alpha);
        return (
          <Animated.View
            key={card}
            style={[
              styles.overlay,
              {
                transform: transformOrigin(
                  {x: -CARD_WIDTH / 2, y: 0},
                  {rotate},
                ),
              },
            ]}>
            <Card {...{card}} />
          </Animated.View>
        );
      })}

      <TouchableOpacity
        style={styles.btn}
        hitSlop={{top: 30, bottom: 30, left: 30, right: 30}}
        onPress={() => setToggled(!toggled)}>
        <Text style={styles.text}>{toggled ? 'Reset' : 'Start'}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'flex-end',
    // zIndex: 100,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    padding: StyleGuide.spacing * 4,
  },
  btn: {
    padding: 20,
    paddingHorizontal: 30,
    borderRadius: 15,
    backgroundColor: 'rgb(25, 1, 66)',
    marginVertical: 30,
  },
  text: {
    color: 'white',
    textAlign: 'center',
    fontSize: 25,
    fontWeight: '700',
  },
});

export default TransitionsVanilla;
