import { Center, Box } from 'native-base';
import React from 'react';

export const DefaultBox = ({ children, px, alignItems, flex }) => {
  return (
    <Center
      flex={flex ? 1 : null}
      mt="5"
      py="5"
      px={px}
      alignItems={alignItems}>
      {children}
    </Center>
  );
};

export const LoginBox = ({ children }) => {
  return (
    <Center
      bg="primary.50"
      _text={{
        color: 'white',
        fontWeight: 'bold',
      }}
      rounded="lg"
      height={375}
      width={{
        base: 375,
        lg: 400,
      }}>
      {children}
    </Center>
  );
};

export const HomeScreenBox = ({ children, p }) => {
  return (
    <Box
      bg="primary.50"
      width="100%"
      p={p}
      rounded="xl"
      borderWidth="2"
      borderColor="primary.50"
      my="2"
      _text={{
        fontSize: 'md',
        fontWeight: 'medium',
        color: '#000000',
        textAlign: 'left',
      }}>
      {children}
    </Box>
  );
};
