import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Image } from 'native-base';
import React from 'react';
import Images from '../assets/tabIcons';
import { HomeScreen } from '../screens/HomeScreen';
import { LoginScreen } from '../screens/LoginScreen';
import { FeedsScreen } from '../screens/FeedsScreen';
import { NotificationScreen } from '../screens/NotificationScreen';
import { MoreScreen } from '../screens/MoreScreen';
import { ProfileScreen } from '../screens/ProfileScreen';
import { ScreenContainer } from '../shared/LinearGradient';
import screens from './navigator';

const HomeStackScreen = ({ currentUser }) => {
  const HomeStack = createStackNavigator();
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <HomeStack.Screen name={screens.home}>
        {props => <HomeScreen {...props} currentUser={currentUser} />}
      </HomeStack.Screen>
      <HomeStack.Screen name={screens.profile}>
        {props => <ProfileScreen {...props} currentUser={currentUser} />}
      </HomeStack.Screen>
      <HomeStack.Screen name={screens.more}>
        {props => <MoreScreen {...props} currentUser={currentUser} />}
      </HomeStack.Screen>
      <HomeStack.Screen name={screens.root}>
        {props => <LoginScreen {...props} />}
      </HomeStack.Screen>
    </HomeStack.Navigator>
  );
};

const FeedsStackScreen = ({ currentUser }) => {
  const FeedsStack = createStackNavigator();
  return (
    <FeedsStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <FeedsStack.Screen name={screens.feeds}>
        {props => <FeedsScreen {...props} currentUser={currentUser} />}
      </FeedsStack.Screen>
    </FeedsStack.Navigator>
  );
};

const NotificationStackScreen = ({ currentUser }) => {
  const NotificationStack = createStackNavigator();
  return (
    <NotificationStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <NotificationStack.Screen name={screens.notification}>
        {props => <NotificationScreen {...props} currentUser={currentUser} />}
      </NotificationStack.Screen>
    </NotificationStack.Navigator>
  );
};

const MoreStackScreen = ({ currentUser }) => {
  const MoreStack = createStackNavigator();
  return (
    <MoreStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <MoreStack.Screen name={screens.more}>
        {props => <MoreScreen {...props} currentUser={currentUser} />}
      </MoreStack.Screen>
    </MoreStack.Navigator>
  );
};

export const AuthStackScreen = () => {
  const AuthStack = createStackNavigator();
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <AuthStack.Screen name={screens.root} component={LoginScreen} />
      <AuthStack.Screen name={screens.home} component={HomeScreen} />
    </AuthStack.Navigator>
  );
};

export const TabNavigator = ({ currentUser }) => {
  const Tab = createBottomTabNavigator();
  return (
    <ScreenContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: 'bold',
            marginTop: 2,
            color: '#000000',
            backgroundColor: 'transparent',
          },
          tabBarStyle: {
            borderTopWidth: 0,
            backgroundColor: 'transparent',
            elevation: 0,
          },
        }}>
        <Tab.Screen
          name="Home"
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: () => (
              <Image source={Images.home} alt="success" size={8} mt="2" />
            ),
          }}>
          {props => <HomeStackScreen {...props} currentUser={currentUser} />}
        </Tab.Screen>
        <Tab.Screen
          name="Feeds"
          options={{
            tabBarLabel: 'Feeds',
            tabBarIcon: () => (
              <Image source={Images.feed} alt="success" size={7} mt="2" />
            ),
          }}>
          {props => <FeedsStackScreen {...props} currentUser={currentUser} />}
        </Tab.Screen>
        <Tab.Screen
          name="Alerts"
          options={{
            tabBarLabel: 'Alerts',
            tabBarIcon: () => (
              <Image
                source={Images.notification}
                alt="success"
                size={7}
                mt="2"
              />
            ),
          }}>
          {props => (
            <NotificationStackScreen {...props} currentUser={currentUser} />
          )}
        </Tab.Screen>
        <Tab.Screen
          name="More"
          options={{
            tabBarLabel: 'More',
            tabBarIcon: () => (
              <Image source={Images.more} alt="success" size={7} mt="2" />
            ),
          }}>
          {props => <MoreStackScreen {...props} currentUser={currentUser} />}
        </Tab.Screen>
      </Tab.Navigator>
    </ScreenContainer>
  );
};
