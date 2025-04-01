import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Dimensions ,SafeAreaView ,StatusBar,Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
const mobileW =  Dimensions.get('window').width
const mobileH =  Dimensions.get('window').height
import {Colors,Fonts}from './color/color.ts'

const DashboardScreen = ({ route, navigation }) => {
  const { userEmail } = route.params || {};


  

  return (
     <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor={Colors.primary} />
      <View style={styles.Header}>
        <TouchableOpacity onPress={()=>navigation.goBack()}>
          <Image style={styles.Image} source={ require('../screens/icon/arrow.png')} />
        </TouchableOpacity>
       
      </View>
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome, {userEmail}</Text>
      <Text style={styles.welcome}>10,000 steps today</Text>
    
 <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
        <LinearGradient
         colors={['#FC8EAC', '#FFC0CB']}
          style={styles.button}>
          <Text style={styles.buttonText}>Track Workout</Text>
        </LinearGradient>
      </TouchableOpacity>
      </View>
      </SafeAreaView>
  );
}
export default DashboardScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
   safeArea: {
     flex: 1,
     backgroundColor: Colors.background, 
   },
  welcome: {
    fontSize: mobileW * 5 / 100,
    fontWeight: Fonts.fontWeight,
    marginBottom: mobileW * 3 / 100
  },
   button: {
    borderRadius: mobileW*3/100,
    alignItems: 'center',
     justifyContent:"center",
    width: mobileW * 85 / 100,
    height: mobileW * 12 / 100,
    alignSelf:"center"
  },
  buttonText: {
    fontSize: mobileW*5/100,
    color :Colors.buttontxtcolor,
    fontWeight: Fonts.fontWeight,
    
  
  },
  Header: {
    width: mobileW * 100 / 100,
    height: mobileW * 7 / 100,
    flexDirection: 'row',
    padding:mobileW*3/100

  },
  Image: {
    width:mobileW*7/100,
    height: mobileW * 7/ 100,
  },
  Text: {
    fontSize: mobileW * 4 / 100,
    color:Colors.forgottxtcolor
  }
});