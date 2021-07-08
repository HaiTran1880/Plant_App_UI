import React from 'react';
import {Text, View, StyleSheet, Image, ScrollView} from 'react-native';
import R from '../assets';

const Product = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ScrollView style={{flex: 1, marginBottom: 30}}>
        <Image style={{width: '100%'}} source={R.image.img1} />
        <Text style={styles.title}>
          16 Best Plants That Thrive In Your Bedroom
        </Text>
        <View style={styles.containInfo}>
          <View style={styles.info}>
            <Text style={styles.txtinfo}>Interior</Text>
          </View>
          <View style={styles.info}>
            <Text style={styles.txtinfo}>27m2</Text>
          </View>
          <View style={styles.info}>
            <Text style={styles.txtinfo}>Ideas</Text>
          </View>
        </View>
        <Text style={styles.decription}>
          Bedrooms deserve to be decorated with lush {'\n'}
          greenery just like every other room in the house – {'\n'}
          but it can be tricky to find a plant that thrives here.{'\n'}
          Low light, high humidity and warm temperatures {'\n'}
          mean only certain houseplants will flourish.
        </Text>
        <View style={styles.galary}>
          <Text style={{marginVertical: 20, fontSize: 14}}>Gallery</Text>
          <View style={{flexDirection: 'row'}}>
            <Image style={{borderRadius: 5}} source={R.image.gallery1} />
            <Image
              style={{borderRadius: 5, marginHorizontal: 15}}
              source={R.image.gallery2}
            />
            <View
              style={{
                width: 50,
                borderRadius: 5,
                height: 50,
                backgroundColor: '#C5CCD6',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text>+10</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    marginHorizontal: 25,
    marginTop: 25,
    marginBottom: 21,
    fontSize: 20,
  },
  info: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderWidth: 0.5,
    borderRadius: 10,
    marginLeft: 20,
    borderColor: 'gray',
  },
  containInfo: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  txtinfo: {
    fontSize: 12,
    color: 'gray',
  },
  decription: {
    color: 'gray',
    fontSize: 14,
    marginHorizontal: 30,
    marginTop: 20,
    lineHeight: 25,
  },
  galary: {
    marginHorizontal: 30,
    marginTop: 50,
    borderTopWidth: 0.5,
    borderTopColor: 'gray',
  },
});
export default Product;
