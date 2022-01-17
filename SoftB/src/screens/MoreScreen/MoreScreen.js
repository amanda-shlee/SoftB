import {
  Heading,
  NativeBaseProvider,
  ScrollView,
  Text,
  StatusBar,
} from 'native-base';
import { Linking } from 'react-native';
import React from 'react';
import { DefaultBox, HomeScreenBox } from '../../components/box';
import { ScreenContainer } from '../../shared/LinearGradient';
export const MoreScreen = ({ currentUser }) => {
  const onPress = () => {
    Linking.openURL('http://google.com');
  };
  return (
    <NativeBaseProvider>
      <StatusBar translucent={true} backgroundColor={'transparent'} />
      <ScreenContainer>
        <DefaultBox>
          <ScrollView
            // eslint-disable-next-line react-native/no-inline-styles
            _contentContainerStyle={{
              flexGrow: 1,
              px: '20px',
              mb: '4',
              minW: '100%',
            }}>
            <DefaultBox px="1" alignItems="flex-start">
              <Heading color="#000000">Settings 🔎</Heading>
              <HomeScreenBox p={16} />
              <Heading color="#000000">Visit Us</Heading>
              <HomeScreenBox p={16}>
                <Text>
                  Please visit our website at {''}
                  <Text onPress={onPress}>Google</Text>
                </Text>
              </HomeScreenBox>
            </DefaultBox>
          </ScrollView>
        </DefaultBox>
      </ScreenContainer>
    </NativeBaseProvider>
  );
};
