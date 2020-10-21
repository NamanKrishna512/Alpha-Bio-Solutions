import * as React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, ScrollView,Image, Linking} from 'react-native';

export default class Alphashell extends React.Component{
render(){
  return(
  
    <View>
<ScrollView style={styles.scrollView}>
<TouchableOpacity
onPress={()=>{this.props.navigation.navigate('AboutUs')}}>
          <Image
            style={{ width: 160, height: 105, marginLeft: 125, marginTop: 24 }}
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
          onPress={()=>{Linking.openURL('https://alphabiosolution.com/wp-content/uploads/2019/09/ALPHA-SHALL-D-SUPREME-FRONT-822x1024.jpg'
          )}}>
             <Image
            style={{ width: 300, height: 400, marginLeft: 22, marginTop: 10 }}
            source={require('../assets/ALPHA-SHALL-D-SUPREME-FRONT-822x1024.jpg')}
          />
          </TouchableOpacity>
          <TouchableOpacity
          onPress={()=>{Linking.openURL(
            'https://alphabiosolution.com/wp-content/uploads/2019/09/ALPHA-SHALL-D-SUPREME-BACK-822x1024.jpg'

          )}}>
          <Image
            style={{ width: 300, height: 400, marginLeft: 22, marginTop: 10 }}
            source={require('../assets/ALPHA-SHALL-D-SUPREME-BACK-822x1024.jpg')}
          />
          </TouchableOpacity>
          <Text style={styles.textC}>Key Points About Our Product</Text>
          <Text style={styles.textB}>1. Alphashell-D Supreme Is Enriched With Enzyme Activator, Organic Zinc, Organic Manganese, Organic Copper, Estrogenic Phyto-Active, Active Vitamin-D. </Text>
          <Text style={styles.textB}>2. Activators Of Carbonic Anhydrase, Alkaline Phosphatase & Lysyl Oxidase Enzymes And Estrogenic Phyto-Active In Alphashell-D Supreme Ensures Optimum Bi-Carbonate, Synthesis Of Mucopolysaccharide Components, Protein Matrix And Calcium Absorption. </Text>
          <Text style={styles.textB}>3. The Natural Enzyme Activators Present In Alphashell-D Supreme Ensure Efficient Release Of Bi-Carbonate, Synthesis Of Muco-Polysaccharide Components & Protein Matrix And Helps In The Formation Of Strong Eggshell. </Text>
          <Text style={styles.textB}>4. Minerals Present In Glycinate Form In Alphashell-D Supreme Ensure Optimum Bio-Availibility And Highest Effeciency.  </Text>
          <Text style={styles.textB}>5. Organic Zinc Present In Alphashell-D Supreme Improves Shell Quality Through Generation Of Bi-Carbonate. </Text>
          <Text style={styles.textB}>6. Presence Of Organic Copper Give Rise To Lysyl Oxidase For Synthesis Of Bone And Eggshell Matrix.</Text>
          <Text style={styles.textB}>7. Organic Manganese Activates Alkaline Phosphatase And Acts As A Enzyme Co-Factor In The Synthesis Of Mucopolysaccharide.</Text>
          <Text style={styles.textB}>8. Phyto-Estrogenic Extract And Vitamin D3 In Alphashell-D Supreme Optimizes Calcium Absorption.  </Text>
         <Text style={styles.textC}>Benefits Of Using Our Product:-</Text>
         <Text style={styles.textB}>1. Improves Eggshell Thickness, Minimizes Egg Breakage In Commercial Layers And Breeders.</Text>
         <Text style={styles.textB}>2. Improves Skeletal Integrity, Growth And Calcium ReserveIn Grower Chicks.</Text>
         <Text style={styles.textB}>3. Improves Growth In Broiler And Hatchability In Breeders.</Text>
         <Text style={styles.textB}>4. Prevents Leg Weakness And Lameness In Broilers.</Text>

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
    marginTop:15
  },
  scrollView: {
    backgroundColor: 'white',
    marginHorizontal: 20,
  },

 
});
