import * as React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image, ScrollView, Linking} from 'react-native';

export default class Citrisal extends React.Component{
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
          onPress={()=>{Linking.openURL('https://alphabiosolution.com/wp-content/uploads/2019/09/CITRISAL-C-FRONT-801x1024.jpg')}}>
          <Image
            style={{ width: 300, height: 400, marginLeft: 22, marginTop: 10 }}
            source={require('../assets/CITRISAL-C-FRONT-801x1024.jpg')}
          />
          </TouchableOpacity>
          <TouchableOpacity
          onPress={()=>{Linking.openURL('https://alphabiosolution.com/wp-content/uploads/2019/09/CITRISAL-C-BACK-801x1024.jpg')}}>
                <Image
          style={{ width: 300, height: 400, marginLeft: 22, marginTop:10 }}
          source={require('../assets/CITRISAL-C-BACK-801x1024.jpg')}
          />
          </TouchableOpacity>
          <Text style={styles.textB}>Main Points About Our Product :-</Text>
          <Text style={styles.textC}>1. Citrisal-C Is A Unique Concept Of Limiting Hyperthermia And Heat Stroke In Birds</Text>
          <Text style={styles.textC}>2. Natural & Concentrated Bioflavanoids From Amla Fruits In Citrisal-C Restores Antioxidant Status Of The Body. It Also Improves Body Ability To Hold And Absorb Vitamin-C By Extra 35%.</Text>
          <Text style={styles.textC}>3. The Unique Heat-Lock Complex Present In Citrisal-C Helps To Control Central Hyperthermia And Thus Limits Mortality Due To Heat-Stroke.</Text>
          <Text style={styles.textC}>4. Mint Extract In Citrisal-C Brings Natural Cooling Effect In Birds During Hot Climatic Conditions.</Text>
          <Text style={styles.textB}>Usages Of Citrisal-C :</Text>
          <Text style={styles.textC}>1. During High Enviornmental Temperatures Resulting In Poor Growth Production Drop & Mortality Due To Heat Stress.</Text>
          <Text style={styles.textC}>2. During Conditions When The Bird's System Lose Acid And Electrolyte Balance As A Result Of Extreme Climatic Conditions.</Text>
          <Text style={styles.textC}>3. To Maintain Best Eggshell Quality In Commercial Layer Birds.</Text>
         
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