import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import R from '../assets';
import LinearGradient from 'react-native-linear-gradient';
import {Categories} from '../constants';
const Item = props => {
  const {name, img, count} = props.item;
  const {navigation} = props;

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Explore')}
      style={styles.Item}>
      <Image source={img} />
      <Text style={styles.nameItem}>{name}</Text>
      <Text style={styles.countItem}>{count} products</Text>
    </TouchableOpacity>
  );
};
const Explore = ({navigation}) => {
  const [tabSeleced, setTabSelected] = useState(0);

  return (
    <View style={styles.container}>
      <View style={styles.InfoBar}>
        <Text style={styles.title}>Explore</Text>
        <View style={styles.Search}>
          <TextInput
            placeholder="Search"
            placeholderTextColor="gray"
            style={styles.inputSearch}
          />
          <TouchableOpacity style={styles.btnSearch}>
            <Image source={R.image.icon_search} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.Content}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{flex: 1, marginBottom: 30}}>
          <TouchableOpacity onPress={() => navigation.navigate('Product')}>
            <Image
              style={{width: '100%', borderRadius: 5, marginVertical: 25}}
              source={R.image.img2}
            />
          </TouchableOpacity>
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <TouchableOpacity
              style={{flex: 5}}
              onPress={() => navigation.navigate('Product')}>
              <Image
                style={{borderRadius: 5, width: '100%'}}
                source={R.image.img3}
              />
            </TouchableOpacity>
            <View style={{flex: 0.2}} />
            <TouchableOpacity
              style={{flex: 3}}
              onPress={() => navigation.navigate('Product')}>
              <Image
                style={{borderRadius: 5, width: '100%'}}
                source={R.image.img4}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 20,
            }}>
            <TouchableOpacity
              style={{flex: 4.9}}
              onPress={() => navigation.navigate('Product')}>
              <Image style={{borderRadius: 5}} source={R.image.img5} />
            </TouchableOpacity>
            <View style={{flex: 0.2}} />
            <TouchableOpacity
              style={{flex: 4.9}}
              onPress={() => navigation.navigate('Product')}>
              <Image style={{borderRadius: 5}} source={R.image.img6} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('Product')}>
            <Image
              style={{width: '100%', borderRadius: 5, marginVertical: 20}}
              source={R.image.img7}
            />
          </TouchableOpacity>
        </ScrollView>
      </View>
      <View style={styles.bottom}>
        <LinearGradient
          locations={[0, 1]}
          colors={['rgba(255,255,255,0)', 'rgba(255,255,255,100)']}
          style={styles.bottom}>
          <TouchableOpacity onPress={() => {}} style={styles.btnLogin}>
            <LinearGradient
              style={styles.gradient}
              start={{x: 0.0, y: 0.0}}
              end={{x: 1.0, y: 1.0}}
              colors={['#0AC4BA', '#2BDA8E']}>
              <Text style={{color: '#FFF', fontSize: 14}}>Filters</Text>
            </LinearGradient>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  InfoBar: {
    flex: 1,
    paddingHorizontal: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  Content: {
    flex: 8,
    paddingHorizontal: 30,
  },
  avata: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  title: {
    fontSize: 26,
  },
  Search: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnSearch: {
    paddingHorizontal: 10,
    height: 35,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    backgroundColor: 'rgba(142,142,147,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputSearch: {
    width: 140,
    paddingLeft: 10,
    height: 35,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    backgroundColor: 'rgba(142,142,147,0.3)',
  },
  bottom: {
    bottom: 0,
    left: 0,
    right: 0,
    height: 100,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'visible',
  },
  btnLogin: {
    width: 140,
    height: 40,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gradient: {
    flex: 1,
    width: 140,
    height: 40,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Explore;
