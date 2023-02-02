import React, { useState } from 'react';
import { TextInput, TextInputProps } from 'react-native';

import styles from './styles';

type Props = {} & TextInputProps;

const TextField: React.FC<Props> = ({ ...props }) => {
  const [focus, setFocus] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const borderColor = () => {
    if (focus) {
      return { borderColor: '#4385FF' };
    }

    if (error) {
      return { borderColor: '#FF0000' };
    }

    return { borderColor: '#FFFFFF' };
  };

  return (
    <TextInput
      style={[styles.textFieldArea, borderColor()]}
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
      {...props}
    />
  );
};

export default TextField;
