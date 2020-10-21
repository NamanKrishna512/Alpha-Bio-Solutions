import * as React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image, ScrollView, Linking} from 'react-native';

export default class OvatoneV extends React.Component{
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
          onPress={()=>{Linking.openURL('https://alphabiosolution.com/wp-content/uploads/2019/09/OVATONE-VM-FRONT-819x1024.jpg')}}>
          <Image
            style={{ width: 300, height: 400, marginLeft: 22, marginTop: 10 }}
            source={require('../assets/OVATONE-VM-FRONT-819x1024.jpg')}
          />
          </TouchableOpacity>
          <TouchableOpacity
          onPress={()=>{Linking.openURL('https://alphabiosolution.com/wp-content/uploads/2019/09/OVATONE-VM-BACK-819x1024.jpg')}}>
          <Image
          style={{ width: 300, height: 400, marginLeft: 22, marginTop:10 }}
          source={require('../assets/OVATONE-VM-BACK-819x1024.jpg')}
          />
          </TouchableOpacity>
          <Text style={styles.textC}>Main Points About Our Product:-</Text>
          <Text style={styles.textB}>1. Ovatone-VM Is A Unique Blend Of Natural Feed Additives Designed For Optimum Ovarian Health. </Text>
          <Text style={styles.textB}>2. Organic Chromium In Ovatone VM Regulates The Activity Of Hypothalamus-Pituitary-Ovarian Axis, Which In Turn Improves Responsiveness Of Pituitary Cells & Optimise The Release Of FSH & LH.</Text>
          <Text style={styles.textB}>3. Puraria Mirifica, The Richest Natural Source Of Estrogenic Phyto-Actives, Helps Optimising Ovarian Functions.</Text>
          <Text style={styles.textB}>4. Chest Tree Barriers Extract And Maca Root Extract Work Through The Hypothalamus-Pituitary-Ovarian Axis And Gives Out A Balanced Secretion Of FSH & LH. These Herb Are Regarded As Natural Alternative To Clomiphene Citrate.</Text>
          <Text style={styles.textB}>5. Ovatone VM Also Includes Black Cohosh Roots & Rhizomes Extract.</Text>
          <Text style={styles.textB}>6. Natural Enzymes And Enzyme Activators In Ovatone VM Improve Protein Utilization & Thus Augmented Egg Production.</Text>
          <Text style={styles.textB}>7. Presence Of Zinc & Manganese In Organic Glycinate Form Alongwith Biotin Optimize Eggshell Quality & Hatchability.</Text>
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
  
    
  
 
