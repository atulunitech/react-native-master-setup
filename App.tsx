import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';

function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Hello World</Text>
      <Button mode="contained" onPress={() => console.log('Pressed')}>Press me</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 32,
    fontFamily: 'GeoramaSemiExpanded-Regular',
  },
});

export default App;
