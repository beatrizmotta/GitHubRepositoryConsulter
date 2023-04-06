import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Repositories from './src/telas/Repositories';

export default function App() {
  return (
    <View style={styles.container}>
      <Repositories />
      {/* <Text>Esse é o meu primeiro app</Text> */}
      <StatusBar style="auto" />
    </View>
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
