import * as React from 'react';
import { Text, View, StyleSheet, Image} from 'react-native';
import AppHeader from "./components/AppHeader";
import {createSwitchNavigator, createAppContainer} from 'react-navigation'
import Home from "./Screens/Home";
import Products from "./Screens/Products"
import Anaecare from "./Screens/Anaecare"
import AboutUs from "./Screens/AboutUs"
import Alphashell from "./Screens/Alphashell"
import AlphaChrom from "./Screens/AlphaChrom"
import Appiplex from "./Screens/Appliplex"
import Ascoferrum from "./Screens/Ascoferrum"
import Citrisal from "./Screens/Citrisal"
import Eucasense from "./Screens/Eucasense"
import Nutrimet from "./Screens/Nutrimet"
import NutrimetC from "./Screens/NutrimetC"
import NutrimetS from "./Screens/NutrimetS"
import OvatoneG from "./Screens/OvatoneG"
import Developer from "./Screens/Developer"
import OvatoneV from "./Screens/OvatoneV"
import Phytomix from "./Screens/Phytomix"
import Respoclean from "./Screens/Respoclean"
import Spermogen from "./Screens/Spermogen";
import Stimmune from "./Screens/Stimmune";
import Ocimax from "./Screens/Ocimax"
import Fertimax from "./Screens/Fertimax"
import Contact from "./Screens/Contact"
import Videos from "./Screens/Videos"
import Articles from "./Screens/Articles"
export default class App extends React.Component{
  render(){
  
  return (
    <View>

<AppContainer/>
     
    </View>
  );
  }
}

var AppNavigator = createSwitchNavigator({
Home:Home,
Products:Products,
Anaecare:Anaecare,
AboutUs:AboutUs,
Alphashell:Alphashell,
AlphaChrom:AlphaChrom,
Appiplex:Appiplex,
Ascoferrum:Ascoferrum,
Citrisal:Citrisal,
Eucasense:Eucasense,
Nutrimet:Nutrimet,
NutrimetC:NutrimetC,
NutrimetS:NutrimetS,
OvatoneG:OvatoneG,
Developer:Developer,
OvatoneV:OvatoneV,
Phytomix:Phytomix, 
Respoclean:Respoclean,
Spermogen:Spermogen,
Stimmune:Stimmune,
Fertimax:Fertimax,
Ocimax:Ocimax,
Contact:Contact,
Videos:Videos,
Articles:Articles
})

var AppContainer = createAppContainer(AppNavigator)