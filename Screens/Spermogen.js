import * as React from 'react';
import {Text, View, StyleSheet, ScrollView, TouchableOpacity, Image, Linking} from 'react-native';

export default class Spermogen extends React.Component{
  render(){
    return(
      <View>
     < ScrollView style={styles.scrollView}>
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
          onPress={()=>{Linking.openURL('https://alphabiosolution.com/wp-content/uploads/2019/09/SPERMOGEN-FRONT-822x1024.jpg')}}>
          <Image
            style={{ width: 300, height: 400, marginLeft: 22, marginTop: 10 }}
            source={require('../assets/SPERMOGEN-FRONT-822x1024.jpg')}
          />
          </TouchableOpacity>
          <TouchableOpacity
          onPress={()=>{Linking.openURL('https://alphabiosolution.com/wp-content/uploads/2019/09/SPERMOGEN-BACK-822x1024.jpg')}}>
          <Image
          style={{ width: 300, height: 400, marginLeft: 22, marginTop:10 }}
          source={require('../assets/SPERMOGEN-BACK-822x1024.jpg')}
          />
</TouchableOpacity>

          <Text style={styles.textC}>Main Points About Our Products :- </Text>
          <Text style={styles.textB}>1. Spermogen Is A Natural Reproductive Efficiency Optimizer For Male Breeds. </Text>
          <Text style={styles.textB}>2. Spermogen Has Been Formulated Using Optimum Quantity Of Aphrodisiac Herbs, Fortified With Natural Nutrients Like Zinc, Processed Shilajit, Folic Acid And Vitamin-E As Ideal Synergistic Agents To Strengthen Reproductive System & Maximize Male Breeding Performance.</Text>
          <Text style={styles.textB}>3. Mucuna Prureins In Spermogen Optimises Testosterone Biosynthesis, Maintains Libido, Testicular Maturity, Sperm Production, Fertility, Lean Muscle Mass In Male Breeders. </Text>
          <Text style={styles.textB}>4. Tribulus Terrestris In Spermogen Stimulates Testosterone Secretion & Improves Testicular Activities And Also Improves Sperm Viability, Forward Motility & Survival.</Text>
          <Text style={styles.textB}>5. Pureria Tuberosa In Spermogen Stimulates The Seminiferous Tubules, Promoting The Activity Of Sertoli Cells, Ensures Development Of Sperm Cells.</Text>
          <Text style={styles.textB}>6. Withania Somnifera In Spermogen Improves The Number Of Live Normal Spermotozoa, Controls Sperm Abnormalities, Stimulates Testosterone Secretion & Testicular Activities.</Text>
          <Text style={styles.textB}>7. Usage Of Spermogen Are - 1. For Improving Semen Quality.</Text>
          <Text style={styles.textB}>2. For Controlling Low Sperm Count.</Text>
          <Text style={styles.textB}>3. To Optimise Sperm Motility.</Text>
          <Text style={styles.textB}>4. For Optimising Semen Viscosity & Viability.</Text>
          <Text style={styles.textB}>5. To Maintain Normal Sperm Morphology.</Text>
          <Text style={styles.textB}>6. For Optimum Development And Maturity Of Sexual Organs.</Text>
          
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