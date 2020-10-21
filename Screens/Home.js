import React, {useEffect} from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
  Image,
  ScrollView,
  TextInput,
  Platform,
  WebView,
Alert,
Linking,
BackHandler
} from 'react-native';

import ReactPlayer from 'react-player';

export default class Home extends React.Component {

  constructor() {
    super();
    this.state = {
      text: '',
      displayText: '',
    };
  }

  

  ksks = () => {
    if (
      this.state.text === 'Anaecare' ||
      this.state.text === 'anaecare' ||
      this.state.text === 'ANAECARE'
    ) {
      this.props.navigation.navigate('Anaecare');
    } else if (
      this.state.text === 'Alphashell-D' ||
      this.state.text === 'ALPHASHELL-D' ||
      this.state.text === 'alphashell-d'
    ) {
      this.props.navigation.navigate('Alphashell');
    } else if (
      this.state.text === 'Alpha Chrom-C' ||
      this.state.text === 'Alpha chrom-C' ||
      this.state.text === 'alpha chrom-c' ||
      this.state.text === 'ALPHA CHROM-C'
    ) {
      this.props.navigation.navigate('AlphaChrom');
    } else if (
      this.state.text === 'Appiplex' ||
      this.state.text === 'appiplex' ||
      this.state.text === 'APPIPLEX'
    ) {
      this.props.navigation.navigate('Appiplex');
    } else if (
      this.state.text === 'Ascoferrum-Nm' ||
      this.state.text === 'Ascoferrum-NM' ||
      this.state.text === 'ascoferrum-nm' ||
      this.state.text === 'ASCOFERRUM-NM'
    ) {
      this.props.navigation.navigate('Ascoferrum');
    } else if (
      this.state.text === 'Citrisal-C' ||
      this.state.text === 'citrisal-c' ||
      this.state.text === 'CITRISAL-C'
    ) {
      this.props.navigation.navigate('Citrisal');
    } else if (
      this.state.text === 'Eucasense' ||
      this.state.text === 'EUCASENSE' ||
      this.state.text === 'eucasense'
    ) {
      this.props.navigation.navigate('Eucasense');
    } else if (
      this.state.text === 'Nutrimet' ||
      this.state.text === 'Nutri-Met' ||
      this.state.text === 'NUTRI-MET' ||
      this.state.text === 'NUTRIMET' ||
      this.state.text === 'nutri-met' ||
      this.state.text === 'nutrimet'
    ) {
      this.props.navigation.navigate('Nutrimet');
    } else if (
      this.state.text === 'Nutrimet Concentrate Premix' ||
      this.state.text === 'NUTRIMET CONCENTRATE PREMIX' ||
      this.state.text === 'nutrimet concentrate premix' ||
      this.state.text === 'Nutrimet Concentrate' ||
      this.state.text === 'NUTRIMET CONCENTRATE' ||
      this.state.text === 'nutrimet concentrate'
    ) {
      this.props.navigation.navigate('NutrimetC');
    } else if (
      this.state.text === 'Nutrimet Supreme' ||
      this.state.text === 'NUTRIMET SUPREME' ||
      this.state.text === 'nutrimet supreme'
    ) {
      this.props.navigation.navigate('NutrimetS');
    } else if (
      this.state.text === 'Ovatone Gold' ||
      this.state.text === 'OVATONE GOLD' ||
      this.state.text === 'ovatone gold'
    ) {
      this.props.navigation.navigate('OvatoneG');
    } else if (this.state.text==='Ovatone VM'||this.state.text==='OVATONE VM'||this.state.text==='ovatone vm'||this.state.text==='Ovatone Vm'||this.state.text==='OVATONE Vm'||this.state.text==='ovatone Vm'){
      this.props.navigation.navigate('OvatoneV')
    } 
    else if(this.state.text==='Phytomix'||this.state.text==='PHYTOMIX'||this.state.text==='phytomix'){
this.props.navigation.navigate('Phytomix')
    }
    else if(this.state.text==='Respoclean'||this.state.text==='RESPOCLEAN'|| this.state.text==='respoclean'){
this.props.navigation.navigate('Respoclean')
    }
    else if (this.state.text==='Spermogen'||this.state.text==='SPERMOGEN'||this.state.text==='spermogen'){
      this.props.navigation.navigate('Spermogen')
    }
    else if (this.state.text==='Stimmune-X'||this.state.text==='STIMMUNE-X'||this.state.text==='stimmune-x'){
      this.props.navigation.navigate('Stimmune')
    }
    else if (this.state.text==='Ocimax-Zn'||this.state.text==='Ocimax-ZN'||this.state.text=='Ocimax Zn'||this.state.text==='Ocimax ZN'||this.state.text==='OCIMAX-ZN'||this.state.text==='OCIMAX ZN'||this.state.text==='ocimax-zn'||this.state.text==='ocimax zn'){
      this.props.navigation.navigate('Ocimax')
    }
    else if (this.state.text==='Fertimax'||this.state.text==='FERTIMAX'||this.state.text==='fertimax'){
      this.props.navigation.navigate('Fertimax')
    }
    else{
      Alert.alert('Sorry The Product Name Is Wrong. Kindly Refer To The Index Below.')
    }

  };
  render() {
    return (
      <View>
        <ScrollView style={styles.scrollView}>
       
     
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('AboutUs')}>
            <Image
              style={{
                width: 160,
                height: 105,
                marginLeft: 95,
                marginTop: 28,
              }}
              source={require('../assets/logo-1.png')}
            />
            
          </TouchableOpacity>
          <Text style={styles.textC}>Today's Tip For Poultry Health</Text>
         
          <Text style={styles.textB}>For A Disease Free Flock Of Birds Keep The Water Source Clean, Fresh And Change The Water Daily.</Text>
          <TouchableOpacity
          onPress={()=>{this.props.navigation.navigate('Developer')}}>
    
<Image

style={{
  width:40,
  height:40,
  marginLeft:290,
  marginTop:28
}}
source={require('../assets/images.jpg')}
/> 

          </TouchableOpacity>
          <Text style={styles.textB}>Pls Use The Arrow Sign In The App Which Is At The Top Of Every Page To Go To The Previous Page.</Text>
             <TouchableOpacity
           onPress={()=>{Linking.openURL('https://www.youtube.com/watch?v=0yb4rSVlXSM')}}
 >
            <Image
              style={{
                width: 360,
                height: 155,
                marginLeft: 10,
                marginTop: 28,
              }}
              source={require('../assets/Screenshot (34).png')}
            />
          </TouchableOpacity>
          <Text style={styles.textB}>Tap On The Image To See Our Corporate Film</Text>
          <TouchableOpacity
            style={[styles.buttons]}
            onPress={() => {
              this.props.navigation.navigate('Products');
            }}>
            <Text style={styles.buttonText}>Products</Text>
          </TouchableOpacity>
        
          <TouchableOpacity
            style={[styles.buttons]}
            onPress={() => this.props.navigation.navigate('AboutUs')}>
            <Text style={styles.buttonText}>About Us</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.buttons]}
            onPress={()=>{Linking.openURL('https://alphabiosolution.com/')}}>
<Text style={styles.buttonText}>Website</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.buttons]}
            onPress={()=>{this.props.navigation.navigate('Contact')}}>
            <Text style={styles.buttonText}>Contact Us</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.buttons]}
            onPress={()=>{this.props.navigation.navigate('Videos')}}>
<Text style={styles.buttonText}>Videos</Text>
          </TouchableOpacity>
          <TouchableOpacity
          style={[styles.buttons]}
          onPress={()=>{this.props.navigation.navigate('Articles')}}>
            <Text style={styles.buttonText}>Alpha-Articles</Text>
          </TouchableOpacity>
          <Text style={styles.textC}>
            Type The Product Name You Are Looking For In The Given Box. Please Type The Full Name Of The Product On Your Own.{' '}
          </Text>
          <TextInput
            onChangeText={(text) => {
              this.setState({
                text: text,
              });
            }}
            placeHolder="Which Product Are You Searching"
            value={this.state.text}
            style={styles.inputBox}></TextInput>
          <TouchableOpacity style={styles.sbutton} 
           onPress={this.ksks}>
             
           
        
      
            <Text style={styles.buttonText}>Enter</Text>
          </TouchableOpacity>
        

<Text style={styles.textB}>Our Product Names :-</Text>
<Text style={styles.textC}>1. Alpha Chrom-C</Text>
<Text style={styles.textC}>2. Alphashell-D </Text>
<Text style={styles.textC}>3. Anaecare </Text>
<Text style={styles.textC}>4. Appiplex</Text>
<Text style={styles.textC}>5. Ascoferrum-NM</Text>
<Text style={styles.textC}>6. Citrisal-C</Text>
<Text style={styles.textC}>7. Eucasense</Text>
<Text style={styles.textC}>8. Fertimax</Text>
<Text style={styles.textC}>9. Nutri-Met</Text>
<Text style={styles.textC}>10. Nutrimet Concentrate Premix</Text>
<Text style={styles.textC}>11. Nutrimet Supreme</Text>
<Text style={styles.textC}>12. Ovatone Gold</Text>
<Text style={styles.textC}>13. Ovatone-VM</Text>
<Text style={styles.textC}>14. Ocimax-Zn</Text>
<Text style={styles.textC}>15. Phytomix</Text>
<Text style={styles.textC}>16. Respoclean</Text>
<Text style={styles.textC}>17. Spermogen</Text>
<Text style={styles.textC}>18. Stimmune-X</Text>
          <Text style={styles.textC}> About Us</Text>
          <Text style={styles.textB}>
            Alpha Bio solutions is a poultry health and nutrition company, born
            in the year 2012, to take-up the challenges of the changing scenario
            of poultry health care segment. Since our inception, we are fast
            becoming the preferred choice of majority of poultry farmers and
            poultry consultants. We produce unique range of poultry feed
            supplements and poultry feed additives available in the market. We
            are providing reliable, traceable, proven and sustainable, quality
            finished products. The Founding partners are in this business from
            more than a two decade. We always believe that progress can happen
            by providing innovative and scientific solutions to our customers.
            We are building our organization by trust of the end users.
          </Text>
          <Text style={styles.textC}>Our Newest Products</Text>
<TouchableOpacity
onPress={()=>{this.props.navigate.navigation('Fertimax')}}>
          <Image
            style={{ width: 270, height: 400, marginLeft: 22 }}
            source={require('../assets/Ferti Front.jpeg')}
          />
          </TouchableOpacity>
          <TouchableOpacity
          onPress={()=>{this.props.navigation.navigate('Ocimax')}}>
          <Image
            style={{ width: 270, height: 400, marginLeft: 22, marginTop: 10 }}
            source={require('../assets/Ocimax Front.jpeg')}
          />
</TouchableOpacity>
        
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
    fontFamily: 'italics',
  },

  textB: {
    fontSize: 20,
    color: 'green',
    fontStyle: 'italic',
    marginLeft: 5,
  },
  buttons: {
    marginTop: 10,
    marginLeft: -0,
    borderWidth: 2,
    borderRadius:8,
    borderColor: 'black',
    fontStyle: 'italics',
    width: 110,
    height: 30,
  },
  buttonText: {
    color: 'black',
    alignSelf: 'center',
    fontSize: 16,
    alignContent:'center',
    textAlign:'center',
    marginTop:2.5
  },

  scrollView: {
    backgroundColor: 'white',
    marginHorizontal: 30,
  },
  inputBox: {
    marginTop: 30,
    width: '90%',
    alignSelf: 'center',
    alignItems: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 2,
    outline: 'none',
    borderRadius:10
  },
  sbutton: {
    marginTop: 10,
    marginLeft: 120,
    borderWidth: 2,
    borderColor: 'black',
    fontStyle: 'italics',
    width: 110,
    height: 30,
    borderRadius:8
  },
  
});
