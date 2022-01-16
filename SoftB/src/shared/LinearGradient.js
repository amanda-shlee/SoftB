import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

export const ScreenContainer = ({ children }) => {
  return (
    <LinearGradient
      colors={['#087ee1', '#05e8ba']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      flex={1}>
      {children}
    </LinearGradient>
  );
};
