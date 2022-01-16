import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';
import { Heading, NativeBaseProvider, ScrollView } from 'native-base';
import React, { useState } from 'react';
import { DefaultBox, HomeScreenBox } from '../../components/box';
import { SecondaryButton } from '../../components/button';
import screens from '../../navigator/navigator';
import { ScreenContainer } from '../../shared/LinearGradient';
import { Modal } from '../../components/modal';
export const ProfileScreen = ({ currentUser }) => {
  const navigation = useNavigation();
  const [logout, setLogout] = useState(false);

  const onPressConfirmLogout = () => {
    setLogout(!logout);
  };

  const onPressLogout = () => {
    auth()
      .signOut()
      .then(() => navigation.navigate(screens.root));
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
              <Heading color="#000000">{` Hello 👋 ${currentUser.userName}`}</Heading>
              <HomeScreenBox p={16} />
            </DefaultBox>
            <DefaultBox px="5" alignItems="center" flex>
              <SecondaryButton onPress={onPressConfirmLogout} title="Log out" />
            </DefaultBox>
          </ScrollView>
        </DefaultBox>
      </ScreenContainer>
      {logout && (
        <Modal
          isOpen={logout}
          onClose={onPressConfirmLogout}
          onPress={onPressLogout}
          text="Are you sure you want to log out?"
        />
      )}
    </NativeBaseProvider>
  );
};
