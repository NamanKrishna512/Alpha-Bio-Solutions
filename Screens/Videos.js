import * as React from 'react';
import {Text, View, StyleSheet, Linking, TouchableOpacity, Image, ScrollView} from 'react-native'

export default class Videos extends React.Component{
    render(){
        return(
            <View>
                <ScrollView style={styles.scrollView}>
                <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('AboutUs');
            }}>
            <Image
              style={{
                width: 160,
                height: 105,
                marginLeft: 125,
                marginTop: 24,
              }}
              source={require('../assets/logo-1.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('Home');
            }}>
            <Image
              style={{ width: 30, height: 30, marginLeft: 5 }}
              source={require('../assets/images (1).png')}
            />
          </TouchableOpacity>
          <Text style={styles.textB}>Click On The Image Below To See Our Video On Our Latest Product Fertimax</Text>
          <TouchableOpacity
           onPress={()=>{Linking.openURL('https://www.youtube.com/watch?v=Lfc937_GSnA')}}
 >
            <Image
              style={{
                width: 360,
                height: 155,
                marginLeft: 10,
                marginTop: 28,
              }}
              source={require('../assets/Screenshot (35).png')}
            />
            <Text style={styles.textB}>Click On The Image Below To See Our Corporate Film</Text>
             <TouchableOpacity
           onPress={()=>{Linking.openURL('https://www.youtube.com/watch?v=0yb4rSVlXSM')}}
 >
            <Image
              style={{
                width: 360,
                height: 155,
                marginLeft: 10,
                marginTop: 28,
              }}
              source={require('../assets/Screenshot (34).png')}
            />
            </TouchableOpacity>

            </TouchableOpacity>
          <Text style={styles.textB}>Click On The Image Below To See Our Video On Usage Of  Onion And Garlic In Poultry Reproduction</Text>
          <TouchableOpacity
           onPress={()=>{Linking.openURL('https://www.youtube.com/watch?v=nZx5NtZcY6U')}}
 >
            <Image
              style={{
                width: 360,
                height: 155,
                marginLeft: 10,
                marginTop: 28,
              }}
              source={require('../assets/Screenshot (1).png')}
            />
            </TouchableOpacity>
            <Text style={styles.textB}>Click On The Image Below To See Our Video On Heat Stress In Poultry Part 1</Text>
          <TouchableOpacity
           onPress={()=>{Linking.openURL('https://www.youtube.com/watch?v=JFi4bdOtJAg')}}
 >
            <Image
              style={{
                width: 360,
                height: 155,
                marginLeft: 10,
                marginTop: 28,
              }}
              source={require('../assets/Screenshot (36).png')}
            />
            </TouchableOpacity>
            <Text style={styles.textB}>Click On The Image Below To See Our Video On Heat Stress In Poultry Part 2</Text>
            <TouchableOpacity
           onPress={()=>{Linking.openURL('https://www.youtube.com/watch?v=Woz0MHNcV3U')}}
 >
            <Image
              style={{
                width: 360,
                height: 155,
                marginLeft: 10,
                marginTop: 28,
              }}
              source={require('../assets/Screenshot (36).png')}
            />
            </TouchableOpacity>
                </ScrollView>
            </View>
        )
    }
}
const styles = StyleSheet.create({
  

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