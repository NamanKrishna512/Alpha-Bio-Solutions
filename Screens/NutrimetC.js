import * as React from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity, ScrollView, Linking} from 'react-native'

export default class NutrimetC extends React.Component{
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
          onPress={()=>{Linking.openURL('https://alphabiosolution.com/wp-content/uploads/2019/09/NUTRIMET-PREMIX-FRONT-830x1024.jpg')}}>
          <Image
            style={{ width: 300, height: 400, marginLeft: 22, marginTop: 10 }}
            source={require('../assets/NUTRIMET-PREMIX-FRONT-830x1024.jpg')}
          />
          </TouchableOpacity>
          <TouchableOpacity
          onPress={()=>{Linking.openURL(
'https://alphabiosolution.com/wp-content/uploads/2019/09/NUTRIMET-PREMIX-BACK-830x1024.jpg'
          )}}>
          <Image
          style={{ width: 300, height: 400, marginLeft: 22, marginTop:10 }}
          source={require('../assets/NUTRIMET-PREMIX-BACK-830x1024.jpg')}
          />
          </TouchableOpacity>
          <Text style={styles.textB}>Main Points About Our Product:-</Text>
          <Text style={styles.textC}>1. Nutrimet Conc Premix Is A Unique Combination Of Phytogenic Compounds With Lipotropic, Mould Inhibitor & Hepatogenic Feed Additives </Text>
<Text style={styles.textC}>2. Nutrimet Conc Premix Helps In Efficient Digestion And Utilization Of Nutrients. It Also Helps To Regenerate Damaged Liver Cells And Controls Fungal Growth In Feeds.</Text>
<Text style={styles.textC}>3. The Major Ingredients In Nutrimet Conc Premix Are Phytogenic Compounds, Tricholine Citrate, Biotin, Liver Extract, Na-Formate & Ca-Propionate, Niacinamide.</Text>
<Text style={styles.textB}>Benefits Of Using Nutrimet Conc Premix :-</Text>
<Text style={styles.textC}>1. For Optimum Digestion & Metabolization Of Nutrients.</Text>
<Text style={styles.textC}>2. For Promoting The Process Of Detoxification & Tissue Regeneration.</Text>
<Text style={styles.textC}>3. To Control Liver And Carcass Fat & To Limit Fatty Liver Syndrome.</Text>
<Text style={styles.textC}>4. To Improve Liver Functions, Production Performances & Livability.</Text>

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
  
    
  
 
