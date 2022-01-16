import { Button } from 'native-base';
import React from 'react';

export const PrimaryButton = ({ onPress, title }) => {
  return (
    <Button size="lg" colorScheme="primary" w="50%" onPress={onPress}>
      {title}
    </Button>
  );
};

export const SecondaryButton = ({ onPress, title }) => {
  return (
    <Button size="lg" colorScheme="danger" w="50%" onPress={onPress}>
      {title}
    </Button>
  );
};

export const VariantButton = ({ onPress, title }) => {
  return (
    <Button size="md" variant="outline" w="50%" onPress={onPress}>
      {title}
    </Button>
  );
};
