import "react-native-get-random-values"

import { StatusBar } from 'expo-status-bar';

import { StyleSheet, Text, View,Button } from 'react-native';
import {v4 as uuidv4} from "uuid"

import Home from "./src/components/Home"


const App=()=> {
 
  return (
    <View style={styles.container}>
      <Home/> 
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height:"100vh",
    padding:30,
    paddingTop:40
    
  },
});


export default App