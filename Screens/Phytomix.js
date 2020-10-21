import * as React from 'react'
import {Text, View, StyleSheet, TouchableOpacity, ScrollView, Image, Linking} from 'react-native';

export default class Phytomix extends React.Component{
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
          onPress={()=>{Linking.openURL('https://alphabiosolution.com/wp-content/uploads/2019/09/PHYTOMIX-1-747x1024.jpg')}}>
          <Image
            style={{ width: 300, height: 400, marginLeft: 22, marginTop: 10 }}
            source={require('../assets/PHYTOMIX-1-747x1024.jpg')}
          />
          </TouchableOpacity>
          <TouchableOpacity
          onPress={()=>{Linking.openURL('https://alphabiosolution.com/wp-content/uploads/2019/09/PHYTOMIX-2-747x1024.jpg')}}>
          <Image
          style={{ width: 300, height: 400, marginLeft: 22, marginTop:10 }}
          source={require('../assets/PHYTOMIX-2-747x1024.jpg')}
          />
          </TouchableOpacity>
          <TouchableOpacity
          onPress={()=>{Linking.openURL('https://alphabiosolution.com/wp-content/uploads/2019/09/PHYTOMIX-3-747x1024.jpg')}}>
          <Image
          style={{width:300, height:400, marginLeft:22, marginTop:10}}
          source={require('../assets/PHYTOMIX-3-747x1024.jpg')}
          />
          </TouchableOpacity>
          <TouchableOpacity
          onPress={()=>{Linking.openURL('https://alphabiosolution.com/wp-content/uploads/2019/09/PHYTOMIX-4-752x1024.jpg')}}>
          <Image 
          style={{width:300, height:400, marginLeft:22, marginTop:10}}
          source={require('../assets/PHYTOMIX-4-752x1024.jpg')}
          />
</TouchableOpacity>
          <Text style={styles.textC}>Main Points About Our Products :- </Text>
          <Text style={styles.textB}>1. Phytomix Is A Natural Anti-Microbial Growth Promoter & Immune Enhancer. </Text>
          <Text style={styles.textB}>2. Major Ingredients Of Phytomix - Garlic, Turmeric, Thyme, Ginger.</Text>
          <Text style={styles.textC}>Advantages Of Using Phytomix :- </Text>
          <Text  style={styles.textC}>1. No Need To Supplement In-Feed Antibiotic Growth Promoter.</Text>
          <Text style={styles.textC}>2. No Need To Supplement Probiotics And Organic Acids In Poultry Feed.</Text>
          <Text style={styles.textC}>3. Improves Appetite, Feed Intake, Digestion, FCR, Performances, Immunity & Livability.</Text>
          <Text style={styles.textC}>4.It Limits Round-Worm Infection & It Improves Meat Flavour And Reduces Cholestrol Level. </Text>
          <Text style={styles.textC}>5. Checks Larval Growth In Poultry Litter.</Text>
          <Text style={styles.textC}>6. It Is Completely Safe, Non-Toxic & Eco-Friendly Products. </Text>
          <Text style={styles.textC}>7. Phytomix Also Contains Mould Inhibitory And Immune Modultary Phytoextracts. Regular Application Of Phytomix Through Feeds Helps To Reduce The Load Of Flies And Other Insect Larvae In Poultry Litter.</Text>
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