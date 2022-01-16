import { Heading, HStack, Button } from 'native-base';
import UserAvatar from 'react-native-user-avatar';
import React from 'react';

export const ScreenHeading = ({ screenTitle, userName, onPress }) => {
  return (
    <HStack space={6}>
      <Button bg="transparent" onPress={onPress}>
        <UserAvatar
          size={70}
          bgColors={['#000000', '#fafafa', '#ccaabb']}
          name={userName}
        />
      </Button>

      <Heading mt="5" color="#000000">
        {screenTitle}
      </Heading>
    </HStack>
  );
};
