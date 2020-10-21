import * as React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image, ScrollView, Linking} from 'react-native';

export default class Nutrimet extends React.Component{
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
          onPress={()=>{Linking.openURL('https://alphabiosolution.com/wp-content/uploads/2019/09/NUTRIMET-front-829x1024.jpg')}}>
          <Image
            style={{ width: 300, height: 400, marginLeft: 22, marginTop: 10 }}
            source={require('../assets/NUTRIMET-front-829x1024.jpg')}
          />
          </TouchableOpacity>
          <TouchableOpacity
          onPress={()=>{Linking.openURL('https://alphabiosolution.com/wp-content/uploads/2019/09/NUTRIMET-bakc-829x1024.jpg')}}>
          <Image
          style={{ width: 300, height: 400, marginLeft: 22, marginTop:10 }}
          source={require('../assets/NUTRIMET-bakc-829x1024.jpg')}
          />
          </TouchableOpacity>
          <Text style={styles.textB}>Main Points About Our Product</Text>
          <Text style={styles.textC}>1. Nutri-Met Is A Unique Combination Of Standardized Herbal Extracts Known For Lipotropic And Detoxicant Action Along With Other Nutri-Additives For Optimizing Nutrient Metabolization & To Control Carcass Fat And Hepatic Toxicants. </Text>
          <Text style={styles.textC}>2. Haeme Iron Present In Nutri-Met Improves Haemoglobin Synthesis & Limits The Inicidence Of Anaemia.</Text>
          <Text style={styles.textB}>Usage Of Nutri-Met</Text>
          <Text style={styles.textC}>1. For Optimum Digestion & Metabolization Of Nutrients</Text>
          <Text style={styles.textC}>2. For Promoting The Process Of Detoxification & Tissue Regeneration. </Text>
          <Text style={styles.textC}>3. To Limit The Incidence Of Anaemia And Mortality.</Text>
          <Text style={styles.textC}>4. To Reduce The Pre-Lay Time And To Bring Birds Into Peak Production Earlier.</Text>
          <Text style={styles.textC}>5. To Control Liver And Carcass Fat And To Optimize Dressing Yield In Commercial Broilers.</Text>
          <Text style={styles.textC}>6. To Improve Liver Functions, Growth And Production Performances.</Text>
          
        
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
  }
});