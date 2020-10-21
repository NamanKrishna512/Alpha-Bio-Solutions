import * as React from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';

export default class Contact extends React.Component{
    render(){
        return(
            <View>
<Image
            style={{ width: 160, height: 105, marginLeft: 125, marginTop: 24 }}
            source={require('../assets/logo-1.png')}
          />
           <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('Home');
            }}>
            <Image
              style={{ width: 30, height: 30, marginLeft: 5 }}
              source={require('../assets/images (1).png')}
            />
          </TouchableOpacity>
          <Text style={styles.textC}>Contact Us</Text>
          <Text style={styles.textB}>Phone No - 9216480343</Text>
          <Text style={styles.textB}>Email Address - rajeevnaman2007@rediffmail.com</Text>
          <Text style={styles.textB}>For Buisness Query - Go To Website At Home Page Or www.alphabiosolutions.com</Text>
            </View>
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
    }
})