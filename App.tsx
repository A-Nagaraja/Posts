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
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Posts from './src/Components/Posts/Posts';
import Headers from './src/Components/Header/AppHeader';
import { PaperProvider } from 'react-native-paper';
import { DarkTheme, LightTheme } from './src/Utillity/AppConstant';
import PostScreen from './src/Components/PostScreen/PostScreen';
import UserScreen from './src/Components/UserScreen/UserScreen';
import { Screens } from './src/Utillity/Screens';


const Stack = createNativeStackNavigator();

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
    // <View style={styles.container}>
    //  {/* <Posts /> */}
    //  {/* {<UserScreen/>} */}
    // </View>
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName='Posts'
      screenOptions={{headerShown:false}}
      >
        <Stack.Screen name={Screens.POSTS_SCREEN} component={Posts} />
        <Stack.Screen name={Screens.POST_SCREEN} component={PostScreen} />
        <Stack.Screen name={Screens.USER_SCREEN} component={UserScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
