import * as React from 'react';
import {Text, View, StyleSheet, TouchableOpacity,ScrollView, Image, Linking} from 'react-native';

export default class OvatoneG extends React.Component{
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
          onPress={()=>{Linking.openURL('https://alphabiosolution.com/wp-content/uploads/2019/09/OVATON-LIQUID-gold-822x1024.jpg')}}>
          <Image
            style={{ width: 300, height: 400, marginLeft: 22, marginTop: 10 }}
            source={require('../assets/OVATON-LIQUID-gold-822x1024.jpg')}
          />
          </TouchableOpacity>
          <TouchableOpacity
          onPress={()=>{Linking.openURL('https://alphabiosolution.com/wp-content/uploads/2019/09/OVATON-LIQUID-back-822x1024.jpg')}}>
          <Image
          style={{ width: 300, height: 400, marginLeft: 22, marginTop:10 }}
          source={require('../assets/OVATON-LIQUID-back-822x1024.jpg')}
          />
          </TouchableOpacity>
          <Text style={styles.textB}>Main Points About Our Product:-</Text>
          <Text style={styles.textC}>1. Ovatone Gold Liquid Concentrate Is A Unique Blend Of Natural Phytoactive & Bioactive Feed Additives Designed For Optimum Ovarian Health.</Text>
          
<Text style={styles.textC}>2. Ovatone Gold Liquid Concentrate Regulates The Activity Of Hypothalamus-Pituitary-Ovarian Axis, Which Improves Responsivness Of Pituitary Cells To GnRH And Optimises The Release Of FSH & LH.</Text>
<Text style={styles.textC}>3. Ovatone Gold Liquid Concentrate Bring About Healthy & Balanced Secretion Of Estrogen Through Optimum Release Of FSH&LH</Text>
<Text style={styles.textC}>4. Ovatone Gold Concentrate Is Natural Endocrine Stimulator For Optimum Ovarian Functions & Hence Egg Productions.</Text>
<Text style={styles.textC}>5. Natural Enzyme & Enzyme Activators In Ovatone Gold Liquid Concentrate Improve Egg Yolk Protein Synthesis And Tus Augment Egg Production.</Text>
<Text style={styles.textC}>6. The Natural Bioactives In Ovatone Gold Liquid Concentrate Protect Ovaries From Infection & Hastern Recovery From Deleterious Effects Of Pathogens.</Text>
<Text style={styles.textC}>7. </Text>
<Text style={styles.textC}></Text>
<Text style={styles.textC}></Text>
<Text style={styles.textC}></Text>

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
  
    
  
 
