import * as React from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity, ScrollView, Linking} from 'react-native';
import ImageViewer from "react-native-image-zoom-viewer"
export default class Eucasense extends React.Component{
 
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
         onPress={()=>{Linking.openURL('https://alphabiosolution.com/wp-content/uploads/2019/09/EUCASNSE-FRONT-815x1024.jpg')}}>
        
         
          <Image
          style={{ width: 300, height: 400, marginLeft: 22, marginTop:10 }}
          source={require('../assets/EUCASNSE-FRONT-815x1024.jpg')}
          />
         </TouchableOpacity>
         <TouchableOpacity
         onPress={()=>{Linking.openURL('https://alphabiosolution.com/wp-content/uploads/2019/09/EUCASNSE-BACK-821x1024.jpg')}}>
          <Image
          style={{ width: 300, height: 400, marginLeft: 22, marginTop:10 }}
          source={require('../assets/EUCASNSE-BACK-821x1024.jpg')}
          />
          </TouchableOpacity>
          <Text style={styles.textB}>Main Points About Our Product :</Text>
          <Text style={styles.textC}>1. Eucasense Is A Water Soluble Liquid Concentrate Based On A Combination Of Ethereal Oils Of Plant Origin. Eucasense Contains 70% Ethereal Oil With Proven Efficiency Against All Respiratory Pathogens And Disorders.</Text>
          <Text style={styles.textC}>2. The Main Components Of Eucasense Are 1,8-Cineole, Pinene, Eugenol, B-Caryophyllene, Carvacrol, Menthol And Cinnamaldehyde, Along With More Phyto-Synergists.</Text>
          <Text style={styles.textB}>How To Use Eucasense:-</Text>
          <Text style={styles.textC}>5 ml Of Eucasense In 50 Litres Of Warm Drinking Water (1-2 Hr) For 1000 Birds, Twice Daily, For 3-5 Days. Dissolve Eucasense In Small Quantity Of Water And Mix Properly.</Text>
          <Text style={styles.textC}>For Areal Spray, Use 50 ml Eucasense For 10,000 Birds Upto 3 Weeks Of Age Diluted In 5-10 Litre Of Warm Water, Twice Daily, For 3-5 Days. For Older Birds, 100 ml Of Eucasense May Be Sprayed Mixed In 10 Litres Of Warm Water Twice Daily</Text>
          <Text style={styles.textC}>For Poultry House Of Example 10-12 Thousand Sq Ft For Chickens Upto 3 Weeks Of Age, 50 ml Of Eucasense In 10 Litre Of Warm Water Daily Is Ideally Recommended. Keep Curtains Down By 75% After Spraying Eucasense. 
          </Text>
          <Text style={styles.textC}>These Applications Can Be Repeated At The Recommended Method Until The Desired Results Are Obtained.</Text>

          <TouchableOpacity
        style={{marginTop:200}} >

          </TouchableOpacity>

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