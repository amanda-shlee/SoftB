import { NativeBaseProvider, ScrollView } from 'native-base';
import React from 'react';
import { DefaultBox, HomeScreenBox } from '../../components/box';
import { ScreenHeading } from '../../components/header';
import { ScreenContainer } from '../../shared/LinearGradient';
import { useNavigation } from '@react-navigation/native';
import screens from '../../navigator/navigator';
export const HomeScreen = ({ currentUser }) => {
  const navigation = useNavigation();

  const onPressAvatar = () => {
    navigation.navigate(screens.profile);
  };

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
              <ScreenHeading
                screenTitle="Home 🏠"
                userName={currentUser.userName}
                onPress={onPressAvatar}
              />
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
