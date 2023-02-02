import React from 'react';
import { TouchableOpacity, TouchableOpacityProps, Text } from 'react-native';

import styles from './styles';

type Props = {
  label: string;
} & TouchableOpacityProps;

const Button: React.FC<Props> = ({ label, ...props }) => {
  return (
    <TouchableOpacity style={styles.buttonArea} {...props}>
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;
