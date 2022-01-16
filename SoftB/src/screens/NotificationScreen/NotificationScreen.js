import { Heading, NativeBaseProvider, ScrollView } from 'native-base';
import React from 'react';
import { DefaultBox, HomeScreenBox } from '../../components/box';
import { ScreenContainer } from '../../shared/LinearGradient';
export const NotificationScreen = ({ currentUser }) => {
  return (
    <NativeBaseProvider>
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
              <Heading color="#000000">Alerts 🔔</Heading>
              {[1, 2, 3, 4].map((i, ind) => {
                return <HomeScreenBox p={16} />;
              })}
            </DefaultBox>
          </ScrollView>
        </DefaultBox>
      </ScreenContainer>
    </NativeBaseProvider>
  );
};
