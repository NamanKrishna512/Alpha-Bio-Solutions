import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default class AppHeader extends React.Component{
render(){
  return(
    <View style={styles.textContainer}>
<Text style={styles.text}>Alpha Bio Solutions</Text>
    </View>
  )
}
}
const styles=StyleSheet.create({
  textContainer:{
    backgroundColor:'#99ff99'
  },
  text:{
    marginTop:10,
    fontSize:22,
    fontStyle:'italic',
    borderRadius:10,
    textAlign:'center',
    fontWeight:'bolder'
  }
})