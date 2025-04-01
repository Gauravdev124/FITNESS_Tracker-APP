
import React from 'react';
import { View, Text, FlatList, TouchableOpacity,Image, StyleSheet, Dimensions,SafeAreaView,StatusBar } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
const mobileW =  Dimensions.get('window').width
const mobileH =  Dimensions.get('window').height
import {Colors, Fonts}from './color/color.ts'
const workoutHistory = [
  { id: '1', date: '2024-03-25', type: 'Running', duration: '30 mins' },
  { id: '2', date: '2024-03-24', type: 'Cycling', duration: '45 mins' },
  { id: '3', date: '2024-03-23', type: 'Yoga', duration: '40 mins' }
];

export default function WorkoutHistoryScreen({navigation}) {
  return (
     <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor={Colors.background} />
      <View style={styles.Header}>
              <TouchableOpacity onPress={()=>navigation.goBack()}>
                <Image style={styles.Image} source={ require('../screens/icon/arrow.png')} />
              </TouchableOpacity>
              
           
            </View>
    <View style={styles.container}>
    <Text style={styles.Text}>Workout History</Text>
      <FlatList
        data={workoutHistory}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
             <Text style={styles.label}> Date : {item.date} </Text>
            <Text style={styles.label}>Workout : {item.type}</Text>
            <Text style={styles.label}>Duration : {item.duration}</Text>
          </View>
        )}
      />
      </View>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  safeArea: {
     flex: 1,
     backgroundColor: Colors.background, 
   },
    label: {
    fontSize: mobileW*5/100,
    fontWeight: Fonts.fontWeight,
      color: Colors.text,
    padding:mobileW*1/100
  },
  title: {
    fontSize: mobileW*7/100,
    fontWeight:Fonts.fontWeight,
     marginBottom: mobileW*3/100,
    textAlign: 'center',
  },
  Header: {
      width: mobileW * 100 / 100,
      height: mobileW * 7 / 100,
      flexDirection:'row',
        //  justifyContent: "space-evenly",
        padding:mobileW*3/100,
    },
    Image: {
      width:mobileW*7/100,
      height: mobileW * 7 / 100,
    },
    Text: {
      fontSize: mobileW * 4 / 100,
      color:Colors.forgottxtcolor
    },

  item: { borderWidth: mobileW*0.2/100, padding: mobileW*1/100, marginVertical: mobileW*1/100,}
});