import * as React from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity, ScrollView, Linking} from 'react-native';

export default class AlphaChrom extends React.Component{
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
          onPress={()=>{Linking.openURL('https://alphabiosolution.com/wp-content/uploads/2019/09/ALPHA-CHROM-FRONT-819x1024.jpg')}}
          >
          <Image
            style={{ width: 300, height: 400, marginLeft: 22, marginTop: 10 }}
            source={require('../assets/ALPHA-CHROM-FRONT-819x1024.jpg')}
          />
          </TouchableOpacity>
         
      
          <TouchableOpacity
          onPress={()=>{Linking.openURL('https://alphabiosolution.com/wp-content/uploads/2019/09/ALPHA-CHROM-BACK-819x1024.jpg')}}>

         
         
          <Image
            style={{ width: 300, height: 400, marginLeft: 22, marginTop: 10 }}
            source={require('../assets/ALPHA-CHROM-BACK-819x1024.jpg')}
          />
          </TouchableOpacity>
          <Text style={styles.textC}>Key Points About Our Products :- </Text>
          <Text style={styles.textB}>1. Alpha Chrom-C Is A Scientific Combination Of Chromium Amino Acid Chelate And Is Enriched With Natural Vitamin C And Antioxidant Bioflavonoids. </Text>
          <Text style={styles.textB}>2. Highly Bio-Available Chromium Amino Acid Chelate Reduces Blood Cortisol Level, Controls Protein Catabolism, Improves Glucose, Protein & Lipid Metabolism During Stress.</Text>
          <Text style={styles.textB}>3. 400 Mg Organic Chromium Can Spare 250g Vitamin C Per Ton Feed.</Text>
          <Text style={styles.textB}>4. Osmolytic Action Of Betain Helps Holding Intracellular Water & Thus Prevents Cellular Dehydration During Summer Stress.</Text>
          <Text style={styles.textB}>5. Osmolyte Betaine Reduces The Body's Reliance On Energy, Due To Which Despite Heat Stress, More Energy Remains Available For Growth & Production Performance Of Birds. 
          </Text>
          <Text style={styles.textB}>6. Orange Extract Provides Highest Quality Natural Vitamin-C Along With Some Important Electrolyte Minerals To Combat Heat Stress </Text>
          <Text style={styles.textB}>7. Natural And Concentrated Bioflavonoids From Amla Fruits Restores Antioxidant Status Of The Body. It Prevents Destruction Of Ascorbic Acid And Improves Body Ability To Hold And Absorb Vitamin-C By 35% Extra.</Text>
          <Text style={styles.textC}>Usage Of AlphaChrom-C :-</Text>
          <Text style={styles.textB}>1. To Limit Mortality Due To Climatic And Other Stress.</Text>
          <Text style={styles.textB}>2. To Limit Cellular Dehydration & Osmotic Cell Death.</Text>
          <Text style={styles.textB}>3. To Improve Livability & Production Performance.</Text>
          <Text style={styles.textB}>4. To Optimize Energy Utilization During Stressful Conditions</Text>
               
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