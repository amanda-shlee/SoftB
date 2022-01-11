import {useNavigation} from '@react-navigation/native';
import {Center, Heading, NativeBaseProvider, Text} from 'native-base';
import React, {useState} from 'react';
import {Alert} from 'react-native';
import {InputEmail, InputPassword} from '../../components/input';
import {PrimaryButton} from '../../components/button';
import auth from '@react-native-firebase/auth';

export const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigation = useNavigation();

  const handleEmail = e => {
    setEmail(e.trim().toLowerCase());
  };

  const handlePassword = e => {
    setPassword(e);
  };

  const handleLogin = async () => {
    try {
      let response = await auth().signInWithEmailAndPassword(email, password);
      if (response && response.user) {
        Alert.alert('Success ✅', 'Authenticated successfully');
      }
    } catch (e) {
      console.error(e.message);
      Alert.alert('Error ⛔', 'Please try again');
    }
  };

  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
        <Heading my="5">Login to SoftB</Heading>
        <InputEmail value={email} onChange={e => handleEmail(e)} />
        <InputPassword
          show={showPassword}
          value={password}
          onPress={() => setShowPassword(!showPassword)}
          onChange={e => handlePassword(e)}
        />
        <Text my="5" onPress={() => console.log('hello')} fontSize="xs" italic>
          Forget Password?
        </Text>
        <PrimaryButton onPress={handleLogin} title="Submit" />
      </Center>
    </NativeBaseProvider>
  );
};
