import * as React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image, ScrollView} from 'react-native'

export default class Articles extends React.Component{
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
              this.props.navigation.navigate('Home');
            }}>
            <Image
              style={{ width: 30, height: 30, marginLeft: 5 }}
              source={require('../assets/images (1).png')}
            />
              </TouchableOpacity>  
            <Text style={styles.textB}>All The Articles Given Below Are Researched And Founded By Us. (Except The Plants That Are Described Below.)</Text>
            <Text style={styles.textB}>Health Benefit Of Herbs : Tribulus Terrestris</Text>
            <Text style={styles.textC}>By Alpha Bio Solutions</Text>
          <Text style={styles.textC}>Tribulus Terrestris plant also called as “puncture vine”  has long been used all around the world for various diseases. Tribulus Terrestris popularly claimed functioning to improve human sexual. It is widely used to treat ailments such as headache, nervous disruption, constipation, and sexual dysfunction. Tribulus terrestris is used in the Arabic folk medicine to treat various diseases, mainly diabetes. Extract of Tribulus Terrestris plant stimulated the power production in the body and brings fitness and happiness to life. It is a strong aphrodisiac herb, increases endogenous production of testosterone, improves spermatogenesis and male fertility.</Text>
         <Text style={styles.textB}>Gokharu Plant </Text>
         <Text style={styles.textC}>Gokharu is a tap-rooted herbaceous perennial plant that grows as a summer annual in colder climates. Gokhru  primary branches which is up to 1.5 meters long radiating from the crown of the taproot. The roots of this plant are slender, cylindrical, somewhat fibrous, 10 to 15 centimetres long, light brown and faintly aromatic. The leaves of this plant are opposite, paripinnate, up to 5.5 centimetres long, one of each pair usually smaller than the other. The leaflets are of 3 to 6 pairs and are 6 to 12 millimetres long, with silky hairs on surfaces, apex mucronate, base rounded oblique and petioles are very short. Flowers of Gokharu plant are yellow in colour and are 0.7 to 2 centimetres in diameter. The fruits of Gokhru are globose and possess 5 to 12 woody cocci, each with two pairs of hard, sharp, divaricate spines, with one pair longer than the other. There are several seeds in each crocus with transverse partitions between them. The fruits and flowers are available throughout the year.</Text>
<Text style={styles.textB}>Recent Research</Text>
<Text style={styles.textC}>Gokhru is well supported with research papers published all over the world in renowned medical research journals of recent times.</Text>
<Text style={styles.textC}>1. School of Exercise Science and Sport Management, Southern Cross University Lismore, New South Wales, Australia. study – Tribulus terrestris is an herbal nutritional supplement that is promoted to produce large gains in strength and lean muscle mass in 5-28 days</Text>
<Text style={styles.textC}>2. In a recent Tribulus Terrestris study of males and females, over 90% of  the participants had significantly increased sexual performance and libido within the first day. There are numerous libido enhancers available, and Tribulus Terrestris is the main ingredient in all libido enhancers.</Text>
<Text style={styles.textC} >3. Tribulus Terrestris also has phenomenal anti-aging benefits! Testosterone levels decline with age, leading to many of the physiological problems associating with aging (loss of muscle, increased body fat,  decreased sexual drive & function, etc.) Tribulus Terrestris restores testosterone back to youthful levels, thus eliminating many of the physical signs of aging.</Text>      
<Text style={styles.textC}>4. Studies show that it works very well when stacked with DHEA and androstenedione. It increased testosterone levels in a different way, however, than either DHEA or andro do. Instead of being a testosterone precursor, it leads to the production of the luteinizing hormone (LH). When LH levels are increased, the natural production of testosterone also increases. LH is a hormone that also deals with sex drive.</Text>
<Text style={styles.textB}>Stress In Birds</Text>
<Text style={styles.textC}>By Alpha Bio Solutions</Text>
<Text style={styles.textD}>Stress And How To Reduce It</Text>
<Text style={styles.textC}>Stress In Birds</Text>
<Text style={styles.textC}>Stress can have a major impact on a bird’s health. Stress can come from large or small issues, and can affect even the healthiest of birds. In fact, it has been shown that genetics can also play a part in how a bird reacts to stress.

The fine bird breeds tend to have more of a reaction to stress and illness than do the hybrids. Chickens are naturally afraid of many things, even if they are raised to be accustomed to a situation. Since fear causes great stress, sometimes even the healthiest of birds can suddenly become ill.

Basically, stress lowers the natural pH in the bird’s digestive tract, allowing gram negative bacteria to live comfortably there. This is what causes the illness.</Text>
<Text style={styles.textC}>Weather And Stress</Text>
<Text style={styles.textC}>Chickens are prone to feel stress, and often novice keepers are surprised at what upsets the birds. Extremes of weather, both cold and heat, cause the birds to suffer and to become upset. Sudden changes in weather may cause the same problem.

Only the healthiest birds can survive extremes of cold or heat. The birds sense when a storm is approaching or if there is a change in barometric pressure. This causes an instinctive behaviour in the birds as they prepare to survive. They often will want food and water as they hunker down to withstand any impending weather change. The same reaction occurs at nightfall. The birds become agitated at dusk, wanting a last meal and water before they begin to roost. This makes pre-dusk the best time to feed the birds, especially in cold weather. A second feeding during the daytime hours is also necessary.</Text>
<Text style={styles.textC}>The Problem With The Frost</Text>
<Text style={styles.textC}>One of the main concerns when the weather becomes cold is frostbite of the rooster’s comb. Single comb varieties – those with long wattles – suffer the most. Some keepers will massage Vaseline into the comb to help prevent frostbite, but after testing this myself, I have found no evidence that roosters who receive Vaseline fared any better than those without it.

A more effective way of battling the cold is to keep the effect of wind-chill down by keeping drafts out of the coop. If you are concerned a bird may have developed frostbite, look for these signs, in increasing severity: the comb or wattles have turned white; they are black and scabbed; and finally, the loss of the blackened wattle.</Text>
<Text style={styles.textC}>Stress And Breeding</Text>
<Text style={styles.textC}>Beyond issues of weather, the birds can suffer increased stress during breeding and laying seasons, especially during their first season of maturity, or the first of their mate’s.

Around this time, one should also beware of issues of disease (such as Mareks), as this period of a birds life is likely to be the most susceptible.

Further, there is no hard medical poultry science research that supports the theory that young roosters will ‘go crazy’ if not allowed to breed, however it is crucial to breed them as soon as possible to avoid tension. On the hen side, laying her first egg can be difficult, on top of issue with mates. Her hormones will be changing, and for a first time layer, the effort will be extreme.

</Text>
<Text style={styles.textC}>Nutrients</Text>
<Text style={styles.textC}>The nutrition requirements must be met for a laying hen. Oyster shell is a very good source of calcium and must be supplied as a free-feed. If the calcium required to help form the eggshells is not provided in diet, the female will have to steal from its own bones. It may make the female weaker.

Some people by mistake use it as grit which is a kind of sileceous sandstone, as well as a source of calcium. Since, fine grounded Oyster is completely soluble in water it never reaches gizzard (where food is actually ground up). So, I prefer to provide sand or poultry grit whenever your birds are confined. If they are in free-range, they will find grit of their own.

Always make sure that a laying female is having plenty of water. Their water in-take increases when they are producing an egg. I would prefer to add a little flavoured probiotic liquid to make them drink more.

Though Oyster shells supply ample calcium, I would have to caution you possible harm: The free-feed of calcium before sexual maturity can cause kidney damage.</Text> 
<Text style={styles.textC}>Change Of Envioronment</Text>
<Text style={styles.textC}>It may not seem to be an issue to you, but changing your birds’ environment and surroundings can be hard on them. It’s best not to change housing or to separate birds that are used to being together unless you absolutely must.

I once had a pair of birds that got along very well and were good friends. I split them up in an effort to keep their appearance show-quality. One bird reacted fine, and is to this day unchanged. But, the other bird did not take it well and was never been the same, and has since passed away as a result.

Birds do not react well to change or stress, and stress can build up over time. It’s best to change a bird’s environment only slightly, and only if you must.

Practices such as cleaning, feather adjustment, clipping and beaks and nails modification, and treating for develop mite, are all trying and un-natural to our birds. If you do need to groom your birds then do if gradually over a period of days.

Also perhaps number one advice is not to hold your birds upside down by their feet. This is very stressful for the bird and there is a link between this and the birds getting a respiratory disease.</Text>       
         </ScrollView>

        </View>
    )
}
}
const styles = StyleSheet.create({
    textC: {
      marginTop: 15,
      fontSize: 18,
      fontWeight: 'bold',
      fontStyle: 'italics',
    },
    textB: {
      fontSize: 20,
      fontWeight: 'bold',
      fontStyle: 'italics',
      marginTop: 15,
      color:'red'
    },
    textD:{
        fontSize: 20,
        
        fontStyle: 'italics',
        marginTop: 15,
        color:'black'
    },
    scrollView: {
      backgroundColor: 'white',
      marginHorizontal: 20,
    },
  
   
  });
  