/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NewAppScreen } from '@react-native/new-app-screen';
import { StatusBar, StyleSheet, useColorScheme, View,  } from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import Posts from './src/Components/Posts/Posts';
import Headers from './src/Components/Header/AppHeader';
import { PaperProvider } from 'react-native-paper';
import { DarkTheme, LightTheme } from './src/Utillity/AppConstant';


function App() {
 const scheme = useColorScheme(); // Detect system light/dark mode
  const theme = scheme === 'dark' ? DarkTheme : LightTheme;

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={DarkTheme ? 'light-content' : 'dark-content'} />
       <PaperProvider theme={theme}>
      <AppContent />
      </PaperProvider>
    </SafeAreaProvider>
  );
}

function AppContent() {
  const safeAreaInsets = useSafeAreaInsets();

  return (
    <View style={styles.container}>
     <Posts />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
