import * as React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, ScrollView, Image, Linking} from 'react-native';

export default class NutrimetS extends React.Component{
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
          onPress={()=>{Linking.openURL('https://alphabiosolution.com/wp-content/uploads/2019/09/NUTRIMET-SUPEREM-FRONT-822x1024.jpg')}}>
          <Image
            style={{ width: 300, height: 400, marginLeft: 22, marginTop: 10 }}
            source={require('../assets/NUTRIMET-SUPEREM-FRONT-822x1024.jpg')}
          />
          </TouchableOpacity>
          <TouchableOpacity
          onPress={()=>{Linking.openURL('https://alphabiosolution.com/wp-content/uploads/2019/09/NUTRIMET-SUPEREM-BACK-822x1024.jpg')}}>
          <Image
          style={{ width: 300, height: 400, marginLeft: 22, marginTop:10 }}
          source={require('../assets/NUTRIMET-SUPEREM-BACK-822x1024.jpg')}
          />
          </TouchableOpacity>
          <Text style={styles.textB}>Main Points About Our Product:-</Text>
          <Text style={styles.textC}>1. Nutrimet Supreme Is A Unique Combination Of Supplementary Additives With Lipotropic, Dextoxicant & Metabolic Stimulant Actions.</Text>
<Text style={styles.textC}>2. On The Basic Of Research Phyto-Actives In Nutrimet Supreme Exert Synergistic Actions With Choline For Efficient Removal Of Liver And Carcass Fat.</Text>
<Text style={styles.textC}>3. Unique Ingredients Of Nutrimet Supreme Are Lecithins, Tricholine Citrate, Biotin, Liver Extract, Hydrolyzed Protein, Vitamin B-12, Bile Extract, Niacin, Organic Iron, Hepatogenic & Hepato-Protective Phyto-Actives</Text>
<Text style={styles.textB}>Usage Of Nutrimet Supreme :-</Text>
<Text style={styles.textC}>1. To Control Liver & Abdominal Fat Deposition And To Optimize Dressing Yield In Commercial Broilers.</Text>
<Text style={styles.textC}>2. To Improve Liver Functions, Growth & Production Performances.</Text>
<Text style={styles.textC}>3. For Promoting The Process Of Detoxification & Tissue Regeneration.</Text>
<Text style={styles.textC}>4. For Best Digestion & Metabolization Of Nutrients.</Text>
 

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
  
    
  
 
