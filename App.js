import { StyleSheet, Text, View } from 'react-native';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { LogBox } from 'react-native';
LogBox.ignoreLogs(["AsyncStorage has been extracted from"]);

// import the screens
import Start from './components/Start';
import Chat from './components/Chat';

// import react Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Create the navigator
const Stack = createNativeStackNavigator();

const App = () => {
  const firebaseConfig = {
    apiKey: "AIzaSyCB6a5M0okig3Pro-b498rt_fwCo7cxyM0",
    authDomain: "chat-app-52345.firebaseapp.com",
    projectId: "chat-app-52345",
    storageBucket: "chat-app-52345.appspot.com",
    messagingSenderId: "244142399598",
    appId: "1:244142399598:web:f8c9800c1470ab21a4467f",
    measurementId: "G-2VZ2QZQG07"
  };

  const app = initializeApp(firebaseConfig);
  const db =getFirestore(app);
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Start"
      >
        <Stack.Screen
          name="Start"
          component={Start}
        />
         <Stack.Screen name="Chat">
          {(props) => <Chat {...props} db={db} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
