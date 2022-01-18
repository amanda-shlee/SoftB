import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';
import {
  Button,
  FormControl,
  Heading,
  Input,
  NativeBaseProvider,
  ScrollView,
  StatusBar,
  Text,
} from 'native-base';
import React, { useState } from 'react';
import { Alert } from 'react-native';
import { updateData } from '../../../firebaseConfig';
import { DefaultBox, HomeScreenBox } from '../../components/box';
import { SecondaryButton, VariantButton } from '../../components/button';
import { Modal } from '../../components/modal';
import screens from '../../navigator/navigator';
import { ScreenContainer } from '../../shared/LinearGradient';

export const ProfileScreen = ({ currentUser }) => {
  const navigation = useNavigation();
  const [logout, setLogout] = useState(false);
  const [update, setUpdate] = useState(false);
  const [userName, setUserName] = useState(currentUser.userName);
  const [password, setPassword] = useState('');
  const [department, setDepartment] = useState(currentUser.department);
  const [jobTitle, setJobTitle] = useState(currentUser.jobTitle);
  const [phone, setPhone] = useState(currentUser.phone);

  const onPress = () => {
    navigation.navigate(screens.more);
  };

  const onChangeUserName = e => {
    setUserName(e);
  };

  const onChangePhone = e => {
    setPhone(e);
  };

  const onChangeDepartment = e => {
    setDepartment(e);
  };

  const onChangeJobTitle = e => {
    setJobTitle(e);
  };

  const onChangePassword = e => {
    setPassword(e);
  };

  const onPressConfirmUpdate = () => {
    setUpdate(!update);
  };

  const onPressUpdate = async () => {
    await updateData('users', currentUser.id)
      .update({
        user_name: userName,
        user_department: department,
        user_jobTitle: jobTitle,
      })
      .then(() => {
        Alert.alert('Success ✅', 'Updated successfully');
      });
    setUpdate(!update);
  };

  const onPressConfirmLogout = () => {
    setLogout(!logout);
  };

  const onPressLogout = () => {
    auth()
      .signOut()
      .then(() => navigation.navigate(screens.root))
      .catch(error => {
        console.error(error);
      });
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
              <Button onPress={onPress} my="2">
                Back
              </Button>
              <Heading color="#000000">{` Hello 👋 ${currentUser.userName}`}</Heading>
              <HomeScreenBox p={5}>
                <Text fontWeight="bold" mb="5" fontSize="md">
                  Profile Information
                </Text>
                <FormControl>
                  <FormControl.Label>Email Address</FormControl.Label>
                  <Input value={currentUser.email} isDisabled={true} />
                  <FormControl.HelperText>
                    Please contact your administrator if you would like to
                    update your email address.
                  </FormControl.HelperText>
                </FormControl>
                <FormControl mt="3">
                  <FormControl.Label>Full Name</FormControl.Label>
                  <Input
                    value={userName}
                    onChangeText={onChangeUserName}
                    placeholder="Full Name"
                  />
                </FormControl>

                <FormControl mt="3">
                  <FormControl.Label>Phone</FormControl.Label>
                  <Input
                    value={phone}
                    onChangeText={onChangePhone}
                    placeholder="Phone Number"
                  />
                </FormControl>
                <FormControl mt="3">
                  <FormControl.Label>Password</FormControl.Label>
                  <Input
                    type="password"
                    value={password}
                    onChangeText={onChangePassword}
                    placeholder="Password"
                  />
                </FormControl>
                <FormControl mt="3">
                  <FormControl.Label>Department</FormControl.Label>
                  <Input
                    value={department}
                    onChangeText={onChangeDepartment}
                    placeholder="Department"
                  />
                </FormControl>
                <FormControl mt="3">
                  <FormControl.Label>Job Title</FormControl.Label>
                  <Input
                    value={jobTitle}
                    onChangeText={onChangeJobTitle}
                    placeholder="Job Title"
                  />
                </FormControl>
              </HomeScreenBox>
            </DefaultBox>
            <DefaultBox px="2" alignItems="center">
              <VariantButton
                onPress={onPressConfirmUpdate}
                title="Update Your Profile"
              />
            </DefaultBox>
            <DefaultBox px="2" alignItems="center">
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

      {update && (
        <Modal
          isOpen={update}
          onClose={onPressConfirmUpdate}
          onPress={onPressUpdate}
          text="Are you sure you want to update your profile?"
        />
      )}
    </NativeBaseProvider>
  );
};
