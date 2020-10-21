import * as React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image, ScrollView} from 'react-native';

export default class Products extends React.Component{
  render(){
  
    return(
      <View>
        <ScrollView style={styles.scrollView}>
        <TouchableOpacity
        onPress={()=>{this.props.navigation.navigate('AboutUs')}}>
         <Image
style={{ width:160, height:105, marginLeft:125, marginTop:24 }}
source={require('../assets/logo-1.png')}
/>
</TouchableOpacity>
<TouchableOpacity
onPress={()=>{this.props.navigation.navigate('Home')}}>
<Image 
style={{width:30, height:30, marginLeft:5
}}
source={require('../assets/images (1).png')}
/>
</TouchableOpacity>
    <TouchableOpacity 
    style={styles.buttons}
  
    onPress={()=>{this.props.navigation.navigate('Anaecare')}}>
<Text style={styles.buttonText}>Anaecare</Text>
    </TouchableOpacity>

    <TouchableOpacity
    style={styles.buttons}
  onPress={()=>{this.props.navigation.navigate('Alphashell')}}>
    <Text style={styles.buttonText}>Alphashell-D Supreme</Text>
    </TouchableOpacity>
    
    <TouchableOpacity
    style={styles.buttons}
    onPress={()=>{this.props.navigation.navigate('AlphaChrom')}}>
    <Text style={styles.buttonText}>Alpha Chrom-C</Text>
    </TouchableOpacity>
    <TouchableOpacity
    style={styles.buttons}
    onPress={()=>{this.props.navigation.navigate('Appiplex')}}>
    <Text style={styles.buttonText}>Appiplex</Text>
    </TouchableOpacity>
    <TouchableOpacity
    style={styles.buttons}
    onPress={()=>{this.props.navigation.navigate('Ascoferrum')}}>
    <Text style={styles.buttonText}>Ascoferrum-NM</Text>
    </TouchableOpacity>
    <TouchableOpacity
    style={styles.buttons}
    onPress={()=>{this.props.navigation.navigate('Citrisal')}}>
    <Text style={styles.buttonText}>Citrisal-C</Text>
    </TouchableOpacity>
    <TouchableOpacity
    style={styles.buttons}
    onPress={()=>{this.props.navigation.navigate('Eucasense')}}>
    <Text style={styles.buttonText}>Eucasense</Text>
    </TouchableOpacity>
    <TouchableOpacity
    style={styles.buttons}
    onPress={()=>{this.props.navigation.navigate('Nutrimet')}}>
    <Text style={styles.buttonText}>Nutri-Met</Text>

    </TouchableOpacity>
    <TouchableOpacity
    style={styles.buttons}
    onPress={()=>{this.props.navigation.navigate('NutrimetC')}}>
    <Text style={styles.buttonText}>Nutri-Met Concentrate</Text>
    </TouchableOpacity>
    <TouchableOpacity
    style={styles.buttons}
    onPress={()=>{this.props.navigation.navigate('NutrimetS')}}>
    <Text style={styles.buttonText}>Nutrimet Supreme</Text>
    </TouchableOpacity>
    <TouchableOpacity
    style={styles.buttons}
    onPress={()=>{this.props.navigation.navigate('OvatoneG')}}>
    <Text style={styles.buttonText}>Ovatone Gold</Text>
    </TouchableOpacity>
    <TouchableOpacity
    style={styles.buttons}
    onPress={()=>{this.props.navigation.navigate('OvatoneV')}}>
    <Text style={styles.buttonText}>Ovatone-VM</Text>
    </TouchableOpacity>
    <TouchableOpacity
    style={styles.buttons}
    onPress={()=>{this.props.navigation.navigate('Phytomix')}}>
    <Text style={styles.buttonText}>Phytomix</Text>
    </TouchableOpacity>
    <TouchableOpacity
    style={styles.buttons}
    onPress={()=>{this.props.navigation.navigate('Respoclean')}}>
    <Text style={styles.buttonText}>Respoclean</Text>
    </TouchableOpacity>
    <TouchableOpacity
    style={styles.buttons}
    onPress={()=>{this.props.navigation.navigate('Spermogen')}}>
    <Text style={styles.buttonText}>Spermogen</Text>
    </TouchableOpacity>
    <TouchableOpacity
    style={styles.buttons}
    onPress={()=>{this.props.navigation.navigate('Stimmune')}}>
    <Text style={styles.buttonText}>Stimmune-X</Text>
    </TouchableOpacity>
    <TouchableOpacity
    style={styles.buttons}
    onPress={()=>{this.props.navigation.navigate('Ocimax')}}>
  
    <Text style={styles.buttonText}>Ocimax-Zn</Text>
    </TouchableOpacity>
    <TouchableOpacity
    style={styles.buttons}
    onPress={()=>{this.props.navigation.navigate('Fertimax')}}>
    <Text style={styles.buttonText}>FertiMax</Text>
    </TouchableOpacity>
    
 
 </ScrollView>
      </View>
    )
  }
}
const styles = StyleSheet.create({
   buttons:{
    marginTop:10,
    marginLeft:45,
    borderWidth:2,
    borderColor:'black',
    fontStyle:'italics',
  width:315,
  height:35,
  borderRadius:8
  },
  buttonText:{
    color:'black',
    alignSelf:'center',
    alignItems:'center',
    alignContent:'center',
    marginTop:5
  },
  scrollView: {
    backgroundColor: 'white',
    marginHorizontal: 20,
  },
  
})