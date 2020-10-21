import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  Linking
} from 'react-native';

export default class Appiplex extends React.Component {
  render() {
    return (
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
          onPress={()=>{Linking.openURL('https://alphabiosolution.com/wp-content/uploads/2019/09/APPIPLEX-FRONT-801x1024.jpg')}}>
         
          <Image
            style={{ width: 300, height: 400, marginLeft: 22, marginTop: 10 }}
            source={require('../assets/APPIPLEX-FRONT-801x1024.jpg')}
          />
          </TouchableOpacity>
          <TouchableOpacity
          onPress={()=>{Linking.openURL('https://alphabiosolution.com/wp-content/uploads/2019/09/APPIPLEX-BACK-801x1024.jpg')}}>
          <Image
          style={{ width: 300, height: 400, marginLeft: 22, marginTop:10 }}
          source={require('../assets/APPIPLEX-BACK-801x1024.jpg')}
          />
          </TouchableOpacity>
          <Text style={styles.textB}>Main Points About Our Product</Text>
          <Text style={styles.textC}>
            1. Appiplex Is A Unique Blend Of Fruit Nutrient Concentrates And
            Selected Phyto-Extracts Which Is Designed For Rapid Growth And Best
            Production Performance Of Poultry Birds.
          </Text>
          <Text style={styles.textC}>2. Appiplex Optimises Gut Immunity And Limits The Load Of Pathogenic Bacteria In Gut</Text>
          <Text style={styles.textC}>3. Appiplex Helps In The Growth And Multiplication Of Probiotic Bacteria And Stimulates Development Of Intestinal Villi For Better Nutrient Utilization</Text>
          <Text style={styles.textC}>4. Appiplex Supports Haemoglobin Synthesis And Thus Controls Anaemia Following Viral Infection And Coccidiosis.</Text>
          <Text style={styles.textC}>5. Appiplex Also Optimises Appetite, Digestion And Nutrient Metabolization Through Improved Liver Function.</Text>
          <Text style={styles.textB}>Usage Of Appiplex :-</Text>
          <Text style={styles.textC}>1. For Optimum Growth And Production Performance.</Text>
          <Text style={styles.textC}>2. For Optimising Feeed Intake And FCR.</Text>
          <Text style={styles.textC}>3. To Control And Limit Anaemic Conditions.</Text>
          <Text style={styles.textC}>4. To Increase Farm Profitability.</Text>
    
        </ScrollView>
      </View>
    );
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
