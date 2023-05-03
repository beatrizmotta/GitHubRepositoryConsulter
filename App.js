import { StyleSheet } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { useFonts } from "expo-font"
import Repositories from './src/telas/Repositories';
import ShowRepositories from './src/telas/ShowRepositories';
import Home from './src/telas/Home';

const Stack = createNativeStackNavigator();

export default function App() {

  const [loaded] = useFonts({
    KonkhmerSleokchher: require('./assets/fonts/KonkhmerSleokchher-Regular.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen component={Home} name="Home" options={{
          headerShown: false
        }} />
        <Stack.Screen component={Repositories} name="Buscar" />
        <Stack.Screen component={ShowRepositories} name='Meus Repositórios' />
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
