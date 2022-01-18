import auth from '@react-native-firebase/auth';
import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider } from 'native-base';
import React, { useEffect, useState } from 'react';
import { LogBox } from 'react-native';
import 'react-native-gesture-handler';
import { getRealtimeData } from './firebaseConfig';
import { AuthStackScreen, TabNavigator } from './src/navigator/stackNavigator';

const App = () => {
  const [initializing, setInitializing] = useState(true);
  const [authUser, setAuthUser] = useState();
  const [currentUser, setCurrentUser] = useState({});

  const onAuthStateChanged = e => {
    setAuthUser(e);
    if (initializing) {
      setInitializing(false);
    }
  };

  const onResult = querySnapshot => {
    if (querySnapshot) {
      const data = querySnapshot._data;
      setCurrentUser({
        userName: data.user_name,
        email: data.user_email,
        id: authUser.uid,
      });
    }
  };

  const onError = error => {
    console.log({ hello: error });
  };

  useEffect(() => {
    if (authUser && authUser.uid) {
      getRealtimeData('users', authUser.uid).onSnapshot(onResult, onError);
    }
  }, [authUser]);

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  if (initializing) {
    return null;
  }

  LogBox.ignoreLogs(['Warning: ...']);

  return (
    <NativeBaseProvider>
      <NavigationContainer>
        {authUser ? (
          <TabNavigator currentUser={currentUser} />
        ) : (
          <AuthStackScreen />
        )}
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;
