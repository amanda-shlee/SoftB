import auth from '@react-native-firebase/auth';
import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider } from 'native-base';
import React, { useEffect, useState } from 'react';
import 'react-native-gesture-handler';
import { getUser } from './firebaseConfig';
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

  useEffect(() => {
    if (authUser && authUser.uid) {
      getUser(authUser.uid).then(res => {
        if (res.data()) {
          setCurrentUser({
            userName: res.data().user_name,
            email: res.data().user_email,
          });
        }
      });
    }
  }, [authUser]);

  console.log(authUser);

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  if (initializing) {
    return null;
  }

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
