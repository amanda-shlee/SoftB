import { useNavigation } from '@react-navigation/native';
import {
  Heading,
  NativeBaseProvider,
  ScrollView,
  StatusBar,
  Text,
  HStack,
  Button,
} from 'native-base';
import React, { useEffect, useState } from 'react';
import { DefaultBox, ProfileBox } from '../../components/box';
import screens from '../../navigator/navigator';
import { ScreenContainer } from '../../shared/LinearGradient';
import { getAllData } from '../../../firebaseConfig';
export const MoreScreen = ({ currentUser }) => {
  const navigation = useNavigation();
  const [list, setList] = useState([]);

  const onPress = () => {
    navigation.navigate(screens.profile);
  };

  useEffect(() => {
    getAllData('users').then(res => {
      if (res) {
        const result = res._docs[0]._data;
        setList(result);
      }
    });
  }, []);

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
              <HStack space={10}>
                <>
                  <Heading color="#000000">More Employees🔎</Heading>
                  <Button
                    onPress={onPress}
                    colorScheme="amber"
                    width="20%"
                    mx="2">
                    +
                  </Button>
                </>
              </HStack>
              {[list]?.map((i, ind) => {
                return (
                  <ProfileBox onPress={onPress} p="16" key={ind}>
                    <Text>{`Name: ${i.user_name}`}</Text>
                    <Text>{`Job Title: ${i.user_jobTitle}`}</Text>
                  </ProfileBox>
                );
              })}
            </DefaultBox>
          </ScrollView>
        </DefaultBox>
      </ScreenContainer>
    </NativeBaseProvider>
  );
};
