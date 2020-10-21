import * as React from 'react';
import {Text, View, StyleSheet, ScrollView, TouchableOpacity, Image} from 'react-native';

export default class Developer extends React.Component{
  render(){
    return(
       <ScrollView style={styles.scrollView}>
 <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('Home');
            }}>
            <Image
              style={{ width: 30, height: 30, marginLeft: 5, marginTop:30 }}
              source={require('../assets/images (1).png')}
            />
          </TouchableOpacity>
          <Text style={styles.textC}>Developer Information</Text>
          <Text style={styles.textB}>Made By Krishna Aggarwal</Text>
          
       </ScrollView>
    )
  }
}
const styles = StyleSheet.create({
  textC: {
    marginTop: 15,
    fontSize: 20,
    fontWeight: 'bold',
    fontStyle: 'italics',
  },
  textB: {
    fontSize: 20,
    fontWeight: 'bold',
    fontStyle: 'italics',
    marginTop: 15,
  },
  scrollView: {
    backgroundColor: 'white',
    marginHorizontal: 20,
  },

 
});
  
    
  
 
