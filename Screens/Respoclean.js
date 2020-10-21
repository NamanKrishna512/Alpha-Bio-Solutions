import * as React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image, ScrollView, Linking} from 'react-native';

export default class Respoclean extends React.Component{
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
          onPress={()=>{Linking.openURL('https://alphabiosolution.com/wp-content/uploads/2019/09/RESPOCLEAN-FRONT-815x1024.jpg')}}>
          <Image
            style={{ width: 300, height: 400, marginLeft: 22, marginTop: 10 }}
            source={require('../assets/RESPOCLEAN-FRONT-815x1024.jpg')}
          />
          </TouchableOpacity>
          <TouchableOpacity
          onPress={()=>{Linking.openURL('https://alphabiosolution.com/wp-content/uploads/2019/09/RESPOCLEAN-BACK-815x1024.jpg')}}>
          <Image
          style={{ width: 300, height: 400, marginLeft: 22, marginTop:10 }}
          source={require('../assets/RESPOCLEAN-BACK-815x1024.jpg')}
          />
</TouchableOpacity>

          <Text style={styles.textC}>Main Points About Our Products :- </Text>
          <Text style={styles.textB}>1. Respoclean Optimizes Respiratory Functions, Controls Respiratory Pathogens, Improve Oxygen Update. </Text>
          <Text style={styles.textB}>2. Antimicrobial Action In Respoclean Helps In Controlling Growth And Multiplication Of Respiratory Pathogens.</Text>
          <Text style={styles.textB}>3. Mucolytic Action In Respoclean Keeps The Respiratory System Free From Mucous Build Up Discourages Pathogen Growth.</Text>
          <Text style={styles.textB}>4. Anti-Tussive Action Helps Reducing Cough.</Text>
          <Text style={styles.textB}>5. Decongestant Action Keeps Respiratory Pathway Clean And Help Optimum Oxygen Uptake.</Text>
          <Text style={styles.textB}>6. Anti-Allergic And Demulcent Actions Limit Respiratory Allergy & Irritation And Thus Control Sneezing And Rales Sound.</Text>
          <Text style={styles.textB}>7. Immune Modulatory Actions Strengthen Respiratory Defense And Control Recurrence.</Text>
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