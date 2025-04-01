import React, {useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
const mobileW =  Dimensions.get('window').width
const mobileH =  Dimensions.get('window').height
import { View, Text, TextInput, Alert, StyleSheet, TouchableOpacity ,FlatList,Dimensions ,SafeAreaView, Image ,StatusBar} from 'react-native';
import {Colors, Fonts}from './color/color.ts'

const ForgotPasswordScreen = ({navigation}) => {
  const [email, setEmail] = useState('');

  const handleResetPassword = () => {
    if (email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      Alert.alert("Success", "A password reset email has been sent to " + email);
      navigation.navigate('Login');
    } else {
      Alert.alert("Error", "Invalid email address");
    }
  };

  return (
      <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor={Colors.primary} />

              <View style={styles.Header}>
              <TouchableOpacity activeOpacity={0.6}  onPress={()=>navigation.goBack()}>
                <Image style={styles.Image} source={ require('../screens/icon/arrow.png')} />
              </TouchableOpacity>
              
            
            </View>
    <View style={styles.container}>
      <Text style={styles.text}>Forgot Password ?</Text>
        <TextInput
 placeholder="Enter your email"
          placeholderTextColor="black"
  style={[styles.input, { color: 'black' }]} // Ensure text is visible
          keyboardType="email-address"
           onChangeText={setEmail} />
        
        

        <TouchableOpacity activeOpacity={0.6}  onPress={handleResetPassword} >
                <LinearGradient
                  colors={['#FC8EAC', '#FFC0CB']}
                  style={styles.button}>
                  <Text style={styles.buttonText}>Reset Password</Text>
                </LinearGradient>
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
      fontSize: mobileW*4/100,
      color: Colors.buttontxtcolor,
       fontWeight: Fonts.fontWeight,
     },
     Header: {
        width: mobileW * 100 / 100,
        height: mobileW * 7 / 100,
        flexDirection:'row',
        padding:mobileW*3/100,
      },
      Image: {
        width:mobileW*7/100,
        height: mobileW * 7 / 100,
      },
      Text: {
        fontSize: mobileW * 4 / 100,
        color:Colors.forgottxtcolor
      }
});

export default ForgotPasswordScreen;