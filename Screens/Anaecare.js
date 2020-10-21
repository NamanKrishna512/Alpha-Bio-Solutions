import * as React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  StyleSheet,
  SafeAreaView, 
  Linking
} from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';
export default class Anaecare extends React.Component {
  render() {
    
    return (
      <View>
        <ScrollView style={{backgroundColor:'white', marginHorizontal:20}}>
        <ScrollView 
        minimumZoomScale={1}
        maximumZoomScale={1}>
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
          onPress={()=>{Linking.openURL('https://alphabiosolution.com/wp-content/uploads/2019/09/ANAECARE-FRONT-822x1024.jpg')}}>
          <Image
            style={{ width: 300, height: 400, marginLeft: 22, marginTop: 10 }}
            source={require('../assets/ANAECARE-FRONT-822x1024.jpg')}
          />
          </TouchableOpacity>
       <TouchableOpacity
          onPress={()=>{Linking.openURL('https://alphabiosolution.com/wp-content/uploads/2019/09/ANACARE-BACK-822x1024.jpg')}}>
          <Image
            style={{ width: 300, height: 400, marginLeft: 22, marginTop: 10 }}
            source={require('../assets/ANACARE-BACK-822x1024.jpg')}
          />
</TouchableOpacity>
          <Text style={styles.textC}>Main Key Points About Our Product :-</Text>
          <Text style={styles.textB}>
            1. Anaecare Is A Unique Combination Of Phyto-Extracts With Haem
            Iron, Vitamin B-12, And Folic Acid.
          </Text>


          <Text style={styles.textB}>
            2. Phytoactives Of Anaecare Are Reported To Stimulate Bone Marrow
            Stem Cells And Help In The Formation Of RBC's And Haemoglobin Even
            In The Case Of Aplastic Anaemia.{' '}
          </Text>


          <Text style={styles.textB}>
            3. Phytoactives Of Anaecare Contain High Level Of Chlorophyllic
            Material.
          </Text>


          <Text style={styles.textB}>
            4. These Phytoactives Also Help In The Formation And Multiplication
            Of WBC's and Platelets From Bone Marrow Stem Cells Giving Protective
            Immunity During CIA (Chicken Infectious Anaemia).
          </Text>
          <Text style={styles.textB}>
            5. The Chlorophyllic Phytoactives Of Anaecare Also Gives Greater Red
            Cell Stability And Less Red Cell Reduction.
          </Text>
          <Text style={styles.textB}>6. Unlike Non-Haem Iron, Haem Iron In Anaecare Remains In Active State And Absorbed Completely Into The Body.</Text>
          <Text style={styles.textB}>7. This Iron Helps In The Formation Of Haemoglobin When RBC Is Produced From Bone Marrow Stem Cells Under The Influence Of Phytoactives Of Anaecare.</Text>
          <Text style={styles.textB}>8. Folic Acid And Vitamin B-12 In Anaecare Help In Multiplication And Maturation Of Newly Formed RBC's</Text>
          <Text style={styles.textB}>9. Besides CIA, Anaecare Can Also Be Used In Growing Chicks For Better RBC And WBC Formation, Hameoglobin Synthesis, Immune Functioning And Tissue Oxygenation, Leading To The Best Growth.</Text>
          <Text style={styles.textB}>10. Anaecare Improves Blood Formation In Young Chicks Through Stimulation Of Stem Cells And Thus Improves Nutrient Supply To Tissues And Consequently Growth Is Improved.</Text>
         
          
        </ScrollView>
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
    marginTop:15
  },

  
});
