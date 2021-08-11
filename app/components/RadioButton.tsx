import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';

import colors from '../config/colors';

export interface RadioButtonProps {
  onPress: () => void;
  style?: object;
  active?: boolean;
}

const RadioButton: React.FC<RadioButtonProps> = ({onPress, active, style}) => {
  return (
    <TouchableOpacity
      style={[
        styles.radio,
        style,
        {backgroundColor: active ? colors.green : colors.red},
      ]}
      onPress={onPress}></TouchableOpacity>
  );
};

export default RadioButton;

const styles = StyleSheet.create({
  radio: {
    borderRadius: 50,
    padding: 20,
    marginVertical: 10,
  },
});
