import * as React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image, ScrollView, Linking} from 'react-native';

export default class Stimmune extends React.Component{
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
          onPress={()=>{Linking.openURL('https://alphabiosolution.com/wp-content/uploads/2019/09/STIMMUNE-ALPHA-FRONT-801x1024.jpg')}}>
          <Image
            style={{ width: 300, height: 400, marginLeft: 22, marginTop: 10 }}
            source={require('../assets/STIMMUNE-ALPHA-FRONT-801x1024.jpg')}
          />
          </TouchableOpacity>
          <TouchableOpacity
          onPress={()=>{Linking.openURL('https://alphabiosolution.com/wp-content/uploads/2019/09/STIMMUNE-ALPHA-BACK-801x1024.jpg')}}>
          <Image
          style={{ width: 300, height: 400, marginLeft: 22, marginTop:10 }}
          source={require('../assets/STIMMUNE-ALPHA-BACK-801x1024.jpg')}
          />
</TouchableOpacity>

          <Text style={styles.textC}>Main Points About Our Products :- </Text>
          <Text style={styles.textB}>1. Stimmune-X Is A Natural Poultry Feed Additive, Designed To Optimise Growth And Development Of Immune Organs From Early Chick's Life.</Text>
          <Text style={styles.textB}>2. Phyto-Actives In Stimmune-X Stimulate Immune System Of Birds And Help Optmimum Production Of T & B - Lymphocytes, Macrophages, NK-Celles, Interleukins, Interferon, Plasma & Memory Cells, ETC.</Text>
          <Text style={styles.textB}>3. Tannoids Present In Stimmune-X Optimise Development Of Thymus & Harderian Gland & Improve Respiratory Immunity.</Text>
          <Text style={styles.textB}>4. Allin & Allicin Present In The Phyto-Extracts Of Stimmune-X Improves Muscosal Immunity.</Text>
          <Text style={styles.textB}>5. Eugenol & B-Caryophyllene Present In Stimmune-X Exert Anti-Stress Action & Also Improves Antibody Production & Disease Resistance.</Text>
          <Text style={styles.textB}>6. Bitter Glycosides & Tri-Terpenes Of Stimmune-X Improves Antibody Production & Protect Against Bacteria, Virus & Mycoplasma.</Text>
          <Text style={styles.textB}>Usage Of Stimmune-X :-</Text>
          <Text style={styles.textB}>1. For Proper Development & Functioning Of Immune Organs From Early Stage Of Life.</Text>
          <Text style={styles.textB}>2. To Optimise Humoral, Cell-Mediated & Non-Specific Immunity In Chicks, Growers And Layers.</Text>
          <Text style={styles.textB}>3. To Built-Up Optimum And Sustained Vaccine Titre Following Primary And Booster Vaccination.</Text>
          <Text style={styles.textB}>4. To Limit Morbidity And Mortality From Infective Diseases.</Text>
          </ ScrollView>
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