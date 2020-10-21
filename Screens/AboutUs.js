import * as React from 'react';
import {Text, View, StyleSheet, Image, ScrollView, TouchableOpacity} from 'react-native'

export default class AboutUs extends React.Component{
  render(){
    return(
      <View>
        <ScrollView style={styles.scrollView}>

 <Image
            style={{ width: 160, height: 105, marginLeft: 125, marginTop: 24 }}
            source={require('../assets/logo-1.png')}
          />
           <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('Home');
            }}>
            <Image
              style={{ width: 30, height: 30, marginLeft: 5 }}
              source={require('../assets/images (1).png')}
            />
          </TouchableOpacity>
<Text style={styles.textC}> Firm Profile</Text>
        <Text style={styles.textB}>
        Alpha Biosolutions is a poultry health and nutrition company, born in the year 2012, to take-up the challenges of the changing scenario of poultry health care segment. Since our inception, we are fast becoming the preferred choice of majority of poultry farmers and poultry consultants. We produce unique range of poultry feed supplements and poultry feed additives available in the market. We are providing reliable, traceable, proven and sustainable, quality finished products. The Founding partners are in this business from more than a decade. We always believe that progress can happen by providing innovative and scientific solutions to our customers. We are building our organization by trust of the end users. Our competence lies in manufacturing unique poultry health care products and feed supplements. We maintain hygienic, bio-secured stock points to store raw materials and finished products. Strict quality control measures are followed at each point of the production stages. Fully equipped quality control laboratories attached to our production unit working around the clock to deliver the quality products. We adopt improved manufacturing practices that are in line with global manufacturing standards with teams of highly qualified and trained technologists who are backed with a refined manufacturing culture. Stringent process control measures are imposed to impart consistency and reliability to every act in the manufacturing process.
        </Text>
        

        
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