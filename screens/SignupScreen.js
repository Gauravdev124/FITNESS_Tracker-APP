
import React,{useState} from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Dimensions ,TextInput ,Alert,SafeAreaView,StatusBar} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
const mobileW =  Dimensions.get('window').width
const mobileH =  Dimensions.get('window').height
import {Colors ,Fonts}from './color/color.ts'
export default function SignupScreen({ navigation }) {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    if (!firstName || !email.includes('@') || password.length < 6) {
      Alert.alert('Error', 'Fill all fields');
      return;
    }
    Alert.alert('Done', ' Successfully done Sign up');
    navigation.navigate('Login');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor={Colors.primary} />
    <View style={styles.container}>
      <Text style={styles.text}>First Name</Text>
      <TextInput
        placeholder='Enter a Name'
        style={styles.input}
        value={firstName}
        onChangeText={setFirstName} />

       <Text style={styles.text}>Email</Text>
      <TextInput
        placeholder='Enter a Email'
        style={styles.input}
        value={email}
        onChangeText={setEmail} />

       <Text style={styles.text}>Password</Text>
      <TextInput
        placeholder='Enter a Password'
        style={styles.input}
        secureTextEntry value={password}
        onChangeText={setPassword} />

       <TouchableOpacity  onPress={handleSignup}>
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