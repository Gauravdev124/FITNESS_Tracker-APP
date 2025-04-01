import React, {useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
const mobileW =  Dimensions.get('window').width
const mobileH = Dimensions.get('window').height
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Text, TextInput, Alert, StyleSheet, TouchableOpacity ,FlatList,Dimensions ,SafeAreaView,StatusBar} from 'react-native';
import {Colors, Fonts}from './color/color.ts'
const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  // const handleLogin = async () => {
  //   try {
  //     const userData = await AsyncStorage.getItem('user');
  //     if (userData) {
  //       const { email: storedEmail, password: storedPassword } = JSON.parse(userData);
  //       if (email === storedEmail && password === storedPassword) {
  //         Alert.alert('Success', 'Login successful!');
  //         navigation.navigate('Dashboard', { userEmail: email });
  //       } else {
  //         Alert.alert('Error',"please field data");
  //       }
  //     } else {
  //       Alert.alert('Error', 'No user found. Please sign up first.');
  //     }
  //   } catch (error) {
  //     console.error(error);
  //     Alert.alert('Error', 'No User Found.');s
  //   }
  // };
const handleLogin = async () => {
  // Regular expressions for validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^.{6,}$/;

  // Email validation
  if (!email) {
    Alert.alert('Error', 'Please enter an email');
    return;
  }
  if (!emailRegex.test(email)) {
    Alert.alert('Error', 'Please enter a valid email (e.g., example@domain.com)');
    return;
  }

  // Password validation
  if (!password) {
    Alert.alert('Error', 'Please enter a password');
    return;
  }
  if (!passwordRegex.test(password)) {
    Alert.alert(
      'Error',
      'Password must be at least 6 characters long, include one uppercase letter, one lowercase letter, one digit, and one special character.'
    );
    return;
  }

  try {
    const userData = await AsyncStorage.getItem('user');
    if (userData) {
      const { email: storedEmail, password: storedPassword } = JSON.parse(userData);

      if (email === storedEmail && password === storedPassword) {
        Alert.alert('Success', 'Login successful!');
        navigation.navigate('Dashboard', { userEmail: email });
      } else {
        Alert.alert('Error', 'Invalid email or password');
      }
    } else {
      Alert.alert('Error', 'No user found. Please sign up first.');
    }
  } catch (error) {
    console.error(error);
    Alert.alert('Error', 'Something went wrong. Please try again.');
  }
};


  return (
     <SafeAreaView style={styles.safeArea}>
          <StatusBar barStyle="light-content" backgroundColor={Colors.primary} />
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
       <Text styles ={styles.text}>Email</Text>
      <TextInput
          placeholder="Email"
 placeholderTextColor="black"
  style={[styles.input, { color: 'black' }]} // Ensure text is visible
        keyboardType="email-address"
        onChangeText={setEmail} />
       <Text styles ={styles.text}>Password</Text>
      <TextInput
        placeholder="Password"
       placeholderTextColor="black"
  style={[styles.input, { color: 'black' }]} // Ensure text is visible
        secureTextEntry={!showPassword}
        onChangeText={setPassword}
      />

      <TouchableOpacity activeOpacity={0.6}  onPress={() => setShowPassword(!showPassword)}>
        <Text style={styles.showPassword}>{showPassword ? "Hide Password" : "Show Password"}</Text>
      </TouchableOpacity>

      
<TouchableOpacity activeOpacity={0.6}  onPress={handleLogin} >
        <LinearGradient
        colors={['#FC8EAC', '#FFC0CB']}
          style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </LinearGradient>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.6}  onPress={() => navigation.navigate('ForgotPasswordScreen')}>
        <Text style={styles.forgotPassword}>Forgot Password ?</Text>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.6}   onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.linkText}>Don't have an account? Sign Up</Text>
        </TouchableOpacity>
      
    </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
 safeArea: {
     flex: 1,
     backgroundColor: Colors.background, 
   },
   linkText:{
     color: Colors.forgottxtcolor,
     fontSize: mobileW * 3.5/ 100,
     marginTop:mobileW*5/100,
     left:mobileW*20/100,

   },
   container: {
     justifyContent: "center",
     flex:1,
     alignSelf:"center"
   },
   input: {
     borderWidth: mobileW*0.2/100,
      padding: mobileW*4/100, 
     marginVertical: mobileW*2/100,
      borderRadius: mobileW*2/100,
      width: mobileW * 85 / 100,
     height: mobileW * 12 / 100,
     color:Colors.tetxt
   },
    button: {
     borderRadius: mobileW*3/100,
     alignItems: 'center',
      justifyContent:"center",
     width: mobileW * 85 / 100,
     height: mobileW * 12 / 100,
     alignSelf:"center"
  },
     title: {
    fontSize: mobileW * 8 / 100,
    fontWeight: Fonts.fontWeight,
    marginBottom: mobileW * 5 / 100
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
 
  
  showPassword: { 
    color: Colors.forgottxtcolor,
     marginBottom:mobileW*3/100
     },
  forgotPassword: {
    color: Colors.forgottxtcolor,
    marginTop: mobileW * 5 / 100,
     fontSize: mobileW * 3.5 / 100
  },
   
});

export default LoginScreen;