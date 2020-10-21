import * as React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, ScrollView, Image} from 'react-native';

export default class Fertimax extends React.Component{
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
          <TouchableOpacity>
          <Image
            style={{ width: 300, height: 400, marginLeft: 22, marginTop: 10 }}
            source={require('../assets/Ferti Front.jpeg')}
          />
          </TouchableOpacity>
          <TouchableOpacity>
          <Image
          style={{ width: 300, height: 400, marginLeft: 22, marginTop:10 }}
          source={require('../assets/Ferti Back.jpeg')}
          />
          </TouchableOpacity>
          <Text style={styles.textB}>Main Points About Our Product:-</Text>
          <Text style={styles.textC}>1. Fertimax Is A Breeder Feed Premix, To Optimize The Growth And Development Of Testis And Other Reproductive Organs Of Breeder Cockerels.</Text>
          <Text style={styles.textC}>2. Fertimax Maintains Production Of Semen And Active Spermatozoa Of Roosters, Even After 50 Weeks Of Age, And Improves Fetility, Hatchability In Breeding Operation.</Text>
          <Text style={styles.textC}>3. Major Ingredients In Fertimax Are Allium Sativum,  Allium Cepa, Tribulus Terrestris, Mucuna Pruriens & Zinc Chelate.</Text>
          <Text style={styles.textC}>4. Organo-Sulphur Compounds Of Garlic And Onion In Fertimax Improves Synthesis And Release LH, FSH, Testosterone And Activate Androgen Binding Protein In Seminferous Tubules.</Text>
          <Text style={styles.textC}>5. The Steroidal Saponins Of Gokhru Fruits Improves LH And Testosterone Production.</Text>
          <Text style={styles.textC}>6. Levo DOPA Of Konch Seed Improves Synthesis Of Release Of GnRH For Synthesis Of LH And Testosterone.</Text>
          <Text style={styles.textC}>7. Zinc Helps In Maturation And Functional Activity Of Spermatozoa.</Text>
          <Text style={styles.textC}>8. Testosterone Improves Spermatogenesis In Adult Birds And Structural & Functional Development Of Testis And Other Reproductive Organs In Cockerels.</Text>
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
  
    
  
 
