import * as React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, ScrollView, Image} from 'react-native';

export default class Ocimax extends React.Component{
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
            source={require('../assets/Ocimax Front.jpeg')}
          />
          </TouchableOpacity>
          <TouchableOpacity>
          <Image
          style={{ width: 300, height: 400, marginLeft: 22, marginTop:10 }}
          source={require('../assets/Ocimax Back.jpeg')}
          />
          </TouchableOpacity>
          <Text style={styles.textB}>Main Points About Our Product:-</Text>
          <Text style={styles.textC}>1. Ocimax-Zn Is A Natural Poultry Feed Additive That Improves Respiratory Immunity In Poultry Birds Against Bacteria, Virus And Mycoplasma.</Text>
          <Text style={styles.textC}>2. Ocimax-Zn Prevents Infection To Set Up In Respiratory Tract And Controls Infection Which Have Already Occured.</Text>
          <Text style={styles.textC}>3. Ocimax-Zn Is Standardized With Eugenol B-Caryophyllenes Present In Tulsi, Cinnamaldehyde Present In Cinnamon Bark, Zinc, Selenium And Natural Vitamin-E.</Text>
          <Text style={styles.textC}>Usage Of Ocimax-Zn</Text>
          <Text style={styles.textC}>1. To Control And Limit Al Respiratory Infections In Commercial Poultry Operations.</Text>
          <Text style={styles.textC}>2. To Promote Respiratory Immunity Against Pathogenic Infections.</Text>
          <Text style={styles.textC}>3. To Reduce Morbidity & Mortality From Respiratory Infections.</Text>
          <Text style={styles.textC}>4. For Faster Recovery From Respiratory Infections, When Given With Antibiotics.</Text>
          <Text style={styles.textC}>5. Controls Immune Suppressive Action Of IBD Virus Vaccine.</Text>
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
  
    
  
 
