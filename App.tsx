import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Navigation from './src/navigation/Navigation';

const App = () => {
  // const backgroundStyle = 'bg-neutral-200 dark:bg-slate-900';

  return (
    // <SafeAreaView className={backgroundStyle}>
    // </SafeAreaView>

    <Navigation />
  );
};

export default App;
