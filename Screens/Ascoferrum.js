import * as React from "react";
import {Text, View, StyleSheet, TouchableOpacity, Image, ScrollView, Linking} from 'react-native'
export default class Ascoferrum extends React.Component{
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
              this.props.navigation.navigate('Products');
            }}>
            <Image
              style={{ width: 30, height: 30, marginLeft: 5 }}
              source={require('../assets/images (1).png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
          onPress={()=>{Linking.openURL('https://alphabiosolution.com/wp-content/uploads/2019/09/ASCOFERRUM-NM-FRONT-822x1024.jpg')}}>
          <Image
            style={{ width: 300, height: 400, marginLeft: 22, marginTop: 10 }}
            source={require('../assets/ASCOFERRUM-NM-FRONT-822x1024.jpg')}
          />
          </TouchableOpacity>
          <TouchableOpacity
          onPress={()=>{Linking.openURL('https://alphabiosolution.com/wp-content/uploads/2019/09/ASCOFERRUM-NM-BACK-822x1024.jpg')}}>
          <Image
          style={{ width: 300, height: 400, marginLeft: 22, marginTop:10 }}
          source={require('../assets/ASCOFERRUM-NM-BACK-822x1024.jpg')}
          />
          </TouchableOpacity>
          <Text style={styles.textC}>Main Points About Our Product :-</Text>
          <Text style={styles.textB}>1. Ferous Ascorbate In Ascoferrum-Nm Remains In Bioactive Reduced Form And Ensures Best Bioavailibility Of Iron. </Text>
          <Text style={styles.textB}>2. Haem Iron In Ascoferrum-Nm Along With Folic Acid &Vitamin B-12 Help RBC Formations And Haemoglobin Synthesis.</Text>
          <Text style={styles.textB}>3. Natural Nucleotides In Ascoferrum-Nm Helps In The Synthesis Of RBC's & Ensure Natural Immunity Against Chicken Anemia Virus While Malt Extract Provides Energy Required To Cope Up During Anaemic Stress.
          </Text>
          <Text style={styles.textB}>4. B-Glucan Present In Ascoferrum-Nm Helps Birds To Fight Against Pathogens Including Chicken Anaemia Virus.</Text>
          <Text style={styles.textB}>5. There Are 3 Benefits Of Using Ascoferrum-Nm : Fulfills The Requirment Of Iron And Folic Acid, Limits The Chance Of Anaemia, Improves Growth And Production Performance.</Text>
          
  </ScrollView>
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
  },
  scrollView: {
    backgroundColor: 'white',
    marginHorizontal: 20,
  },

   
});
