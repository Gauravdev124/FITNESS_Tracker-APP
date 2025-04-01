import React, {useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
const mobileW =  Dimensions.get('window').width
const mobileH =  Dimensions.get('window').height
import { View, Text, TextInput, Alert, StyleSheet, TouchableOpacity ,FlatList,Dimensions ,SafeAreaView,StatusBar} from 'react-native';
import {Colors, Fonts}from './color/color.ts'
const LoginScreen= ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    const hardcodedEmail = 'test@example.com';
    const hardcodedPassword = 'password123';

    if (email === hardcodedEmail && password === hardcodedPassword) {
      navigation.navigate('Dashboard', { firstName: 'John' });
    } else {
      Alert.alert("Error", "Invalid email or password");
    }
  };

  return (
     <SafeAreaView style={styles.safeArea}>
          <StatusBar barStyle="light-content" backgroundColor={Colors.primary} />
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
       <Text styles ={styles.text}>Email</Text>
      <TextInput
        placeholder="Email" style={styles.input}
        keyboardType="email-address"
        onChangeText={setEmail} />
       <Text styles ={styles.text}>Password</Text>
      <TextInput
        placeholder="Password"
        style={styles.input}
        secureTextEntry={!showPassword}
        onChangeText={setPassword}
      />

      <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
        <Text style={styles.showPassword}>{showPassword ? "Hide Password" : "Show Password"}</Text>
      </TouchableOpacity>

      
<TouchableOpacity onPress={handleLogin} >
        <LinearGradient
        colors={['#FC8EAC', '#FFC0CB']}
          style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </LinearGradient>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('ForgotPasswordScreen')}>
        <Text style={styles.forgotPassword}>Forgot Password ?</Text>
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
     fontSize: mobileW * 5 / 100
  },
   
});

export default LoginScreen;