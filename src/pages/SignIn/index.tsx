import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import Button from '../../components/Button';

import TextField from '../../components/TextField';

import styles from './styles';

const SignIn: React.FC = () => {
  return (
    <SafeAreaView style={styles.pageArea}>
      <View style={styles.signInFormArea}>
        <Text style={styles.headerText}>Bem-vindo de volta</Text>
        <Text style={styles.descriptionText}>
          Insira os dados abaixo para continuar
        </Text>

        <View style={styles.emailTextFieldArea}>
          <Text style={styles.inputLabelText}>E-mail</Text>
          <TextField placeholder="Entre com o seu e-mail" />
        </View>

        <View style={styles.passwordTextFieldArea}>
          <Text style={styles.inputLabelText}>Senha</Text>
          <TextField placeholder="••••••••" />
        </View>

        <View style={styles.signInButtonArea}>
          <Button label="Entrar" />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignIn;
