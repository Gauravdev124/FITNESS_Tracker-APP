
import React,{useState} from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Dimensions ,TextInput ,Alert,SafeAreaView,StatusBar} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
const mobileW =  Dimensions.get('window').width
const mobileH = Dimensions.get('window').height
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Colors ,Fonts}from './color/color.ts'
export default function SignupScreen({ navigation }) {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  // Regex for validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^.{6,}$/; // At least 6 chars, one letter & one number

  const handleSignUp = async () => { 
    if (!firstName.trim()) {
      Alert.alert('Invalid Name', 'Please enter your name.');
      return;
    }
    if (!emailRegex.test(email)) {
      Alert.alert('Invalid Email', 'Please enter a valid email.');
      return;
    }
    if (!passwordRegex.test(password)) {
      Alert.alert('Weak Password', 'Password must be at least 6 characters and contain a number.');
      return;
    }

    try {
      const userData = { firstName, email, password };
      await AsyncStorage.setItem('user', JSON.stringify(userData));
      Alert.alert('Success', 'Account created! Please log in.');
      navigation.navigate('Login');
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Something went wrong.');
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor={Colors.primary} />
    <View style={styles.container}>
       <Text style={styles.buttonTextt}> Sign up !!</Text>
      <Text style={styles.text}>First Name</Text>
      <TextInput
        placeholder='Enter a Name'
         placeholderTextColor="black"
  style={[styles.input, { color: 'black' }]}
        value={firstName}
        onChangeText={setFirstName} />

       <Text style={styles.text}>Email</Text>
      <TextInput
     
        placeholder='Enter a Email'
       placeholderTextColor="black"
  style={[styles.input, { color: 'black' }]}
        value={email}
        onChangeText={setEmail} />

       <Text style={styles.text}>Password</Text>
      <TextInput
        placeholder='Enter a Password'
        placeholderTextColor="black"
  style={[styles.input, { color: 'black' }]}
        secureTextEntry value={password}
        onChangeText={setPassword} />

       <TouchableOpacity activeOpacity={0.6}   onPress={handleSignUp}>
              <LinearGradient
                colors={['#FC8EAC', '#FFC0CB']}
                style={styles.button}>
                <Text style={styles.buttonText}>Sign up</Text>
              </LinearGradient>
            </TouchableOpacity>
      </View>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
   safeArea: {
    flex: 1,
    backgroundColor: Colors.background, 
  },
  container: {
    justifyContent: "center",
    flex:1,
    alignSelf:"center"
  },
  buttonTextt:{
   color: Colors.forgottxtcolor,
    fontSize: mobileW * 5 / 100,
    marginBottom:mobileW*2/100
  },
  input: {
    borderWidth: mobileW*0.2/100,
     padding: mobileW*4/100, 
    marginVertical: mobileW*2/100,
     borderRadius:mobileW*2/100,
     width: mobileW * 85 / 100,
    height: mobileW * 12 / 100,
  },
   button: {
    borderRadius: mobileW*3/100,
    alignItems: 'center',
     justifyContent:"center",
    width: mobileW * 85 / 100,
    height: mobileW * 12 / 100,
    alignSelf:"center"
  },
  text:{
    color: Colors.forgottxtcolor,
    fontSize: mobileW * 3 / 100,
  },
  
  buttonText: {
    fontSize: mobileW*5/100,
    color: Colors.buttontxtcolor,
    fontWeight: Fonts.fontWeight,
    
  
  },
});