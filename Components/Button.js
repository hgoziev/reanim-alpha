import * as React from 'react';
import {SafeAreaView, StyleSheet, View, Button} from 'react-native';
import StyleGuide from './StyleGuide';
import Text from './Text';

const styles = StyleSheet.create({
  container: {
    padding: StyleGuide.spacing * 2,
  },
  label: {
    textAlign: 'center',
  },
});

const Buttons = ({label, primary, onPress}) => {
  const color = primary ? 'white' : undefined;
  const backgroundColor = primary ? StyleGuide.palette.primary : undefined;
  return (
    <Button
      backgroundColor={backgroundColor}
      onPress={() => onPress}
      title={label}
    />
  );
};

export default Buttons;
