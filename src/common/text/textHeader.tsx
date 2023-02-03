import React from 'react';
import {StyleProp, StyleSheet, Text, TextStyle} from 'react-native';
import {hp} from '../util/LayoutUtils';
import * as Colors from '../../constants/Colors';

type TextHeaderProps = {
  label: string;
  style?: StyleProp<TextStyle>;
};

export const TextHeader = ({label, style}: TextHeaderProps) => {
  return <Text style={[styles.label, style]}>{label}</Text>;
};

const styles = StyleSheet.create({
  label: {
    fontSize: hp(20),
    color: Colors.black,
  },
});