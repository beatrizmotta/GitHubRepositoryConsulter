import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import Repositories from './src/telas/Repositories';
import ShowRepositories from './src/telas/ShowRepositories';

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen component={Repositories} name='Repositories' />
        <Stack.Screen component={ShowRepositories} name='ShowRepositories' />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // backgroundColor: 'blue',
    alignItems: 'center',
    marginTop: '15%',
    justifyContent: 'flex-start',
  },
});
