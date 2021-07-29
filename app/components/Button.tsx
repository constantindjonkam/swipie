import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import colors from '../config/colors';

export interface ButtonProps {
  title: string;
  onPress: () => void;
  color?:
    | 'black'
    | 'red'
    | 'blue'
    | 'gray'
    | 'white'
    | 'black'
    | 'yellow'
    | 'green';
  style?: object;
}

const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  color = 'blue',
  style,
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, style, {backgroundColor: colors[color]}]}
      onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.blue,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    padding: 15,
    marginVertical: 10,
  },
  text: {
    color: colors.white,
    fontSize: 18,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
});
