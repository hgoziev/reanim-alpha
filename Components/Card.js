import React from 'react';
import {Dimensions, Image, StyleSheet} from 'react-native';

const {width} = Dimensions.get('window');
const ratio = 228 / 362;

export const CARD_WIDTH = width * 0.8;
export const CARD_HEIGHT = CARD_WIDTH * ratio;

export const assets = [
  require('../assets/cards/card1.png'),
  require('../assets/cards/card2.png'),
  require('../assets/cards/card3.png'),
  require('../assets/cards/card4.png'),
  require('../assets/cards/card5.png'),
  require('../assets/cards/card6.png'),
];

export const cards = [0, 1, 2, 3, 4, 5, 6];
const styles = StyleSheet.create({
  card: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
  },
});

const Card = ({card}) => {
  return <Image style={styles.card} source={assets[card]} />;
};

export default Card;
