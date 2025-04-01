import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Dimensions ,SafeAreaView,StatusBar ,Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
const mobileW =  Dimensions.get('window').width
const mobileH = Dimensions.get('window').height
import {Colors, Fonts}from './color/color.ts'
const ProfileScreen = ({ navigation }) => {
  const user = [
    { id: '1', label: 'Name', value: 'John Doe' },
    { id: '2', label: 'Email', value: 'john@example.com' },
    { id: '3', label: 'Date of Birth', value: '1995-08-20' },
    { id: '4', label: 'Gender', value: 'Male' }
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor={Colors.primary} />
       <View style={styles.Header}>
              <TouchableOpacity onPress={()=>navigation.goBack()}>
                <Image style={styles.Image} source={ require('../screens/icon/arrow.png')} />
              </TouchableOpacity>
              
            
            </View>
    <View style={styles.container}>
      <Text style={styles.Text}>Profile Screen</Text>
      
      <FlatList
        data={user}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.label}>{item.label} : </Text>
            <Text style={styles.value}>{item.value}</Text>
          </View>
        )}
      />

      <TouchableOpacity onPress={() => navigation.navigate('WorkoutHistory')}>
        <LinearGradient
        colors={['#FC8EAC', '#FFC0CB']}
          style={styles.button}>
          <Text style={styles.buttonText}>Edit Profile</Text>
        </LinearGradient>
      </TouchableOpacity>
      </View>
      </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: Colors.background,
    flex: 1,
  },
  safeArea: {
     flex: 1,
     backgroundColor: Colors.background, 
   },
  title: {
    fontSize: mobileW*7/100,
    fontWeight:Fonts.fontWeight,
     marginBottom: mobileW*3/100,
    textAlign: 'center',
  },
  item: {
    flexDirection: 'row',
    backgroundColor: Colors.background,
    padding: 15,
    marginBottom: mobileW*0.2/10,
    borderRadius: mobileW*3/100,
    elevation: mobileW * 0.5 / 100,
    borderWidth: mobileW * 0.1 / 100,
  },
  label: {
    fontSize: mobileW*5/100,
    fontWeight:Fonts.fontWeight,
    color: Colors.text,
  },
  value: {
    fontSize:mobileW*5/100,
    color: Colors.forgottxtcolor,
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
    color: Colors.buttontxtcolor,
    fontWeight:Fonts.fontWeight,
    
  
  },
  Header: {
      width: mobileW * 100 / 100,
      height: mobileW * 15 / 100,
      flexDirection:'row',
        padding:mobileW*3/100,
    },
    Image: {
      width:mobileW*7/100,
      height: mobileW * 7 / 100,
    },
    Text: {
      fontSize: mobileW * 5 / 100,
      color: Colors.forgottxtcolor,
      marginBottom:mobileW*3/100
    }
});
