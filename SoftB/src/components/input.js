import React from 'react';
import {Input, Button} from 'native-base';

export const InputEmail = ({value, onChange}) => {
  return (
    <Input
      mx="3"
      my="3"
      size="md"
      w={{
        base: '75%',
        md: '25%',
      }}
      keyboardType="email-address"
      onChangeText={onChange}
      value={value}
      placeholder="Email*"
    />
  );
};

export const InputPassword = ({value, onChange, show, onPress}) => {
  return (
    <Input
      mx="3"
      my="3"
      size="md"
      type={show ? 'text' : 'password'}
      w={{
        base: '75%',
        md: '25%',
      }}
      InputRightElement={
        <Button size="xs" rounded="none" w="1/6" h="full" onPress={onPress}>
          {show ? 'Hide' : 'Show'}
        </Button>
      }
      placeholder="Password*"
      onChangeText={onChange}
      value={value}
    />
  );
};
