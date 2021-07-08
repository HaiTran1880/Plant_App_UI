import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  TextInput,
  Switch,
} from 'react-native';
import R from '../assets';
import {Categories} from '../constants';
import Slider from 'react-native-slider';

const Setting = ({navigation}) => {
  const [editUserName, setEditUserName] = useState(false);
  const [editLocal, setEditLocal] = useState(false);
  const [editEmail, setEditEmail] = useState(false);
  const [username, setUserName] = useState('Hai Euro');
  const [local, setLocal] = useState('Ha Noi');
  const [email, setEmail] = useState('haieuro@gmail.com');
  const [notice, setNotice] = useState(true);
  const [newsletter, setNewLetter] = useState(false);
  const [budget, setBudget] = useState(50);
  const [moncap, setMonCap] = useState(100);
  const handlerEdit = (value, index) => {
    console.log(value);
    console.log(index);

    if (index === 'a') {
      if (editUserName === false) {
        setEditUserName(true);
      } else {
        setEditUserName(false);
      }
    }
    if (index === 'b') {
      if (editLocal === false) {
        setEditLocal(true);
      } else {
        setEditLocal(false);
      }
    }
    if (index === 'c') {
      if (editEmail === false) {
        setEditEmail(true);
      } else {
        setEditEmail(false);
      }
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.InfoBar}>
        <Text style={styles.title}>Settings</Text>
        <Image style={styles.avata} source={R.image.avata} />
      </View>
      <View style={styles.Content}>
        <View style={{flex: 5, justifyContent: 'space-between'}}>
          <View>
            <Text style={styles.lable}>Username</Text>
            <View style={styles.row}>
              {editUserName === false ? (
                <Text style={styles.value}>{username}</Text>
              ) : (
                <TextInput
                  onChangeText={value => setUserName(value)}
                  value={username}
                  style={{flex: 1, borderBottomWidth: 0.5}}
                />
              )}
              <TouchableOpacity onPress={() => handlerEdit('usename', 'a')}>
                <Text style={styles.edit}>
                  {editUserName === false ? 'Edit' : 'Ok'}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <Text style={styles.lable}>Location</Text>
            <View style={styles.row}>
              {editLocal === false ? (
                <Text style={styles.value}>{local}</Text>
              ) : (
                <TextInput
                  onChangeText={value => setLocal(value)}
                  value={local}
                  style={{flex: 1, borderBottomWidth: 0.5}}
                />
              )}
              <TouchableOpacity onPress={() => handlerEdit('local', 'b')}>
                <Text style={styles.edit}>
                  {editLocal === false ? 'Edit' : 'Ok'}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <Text style={styles.lable}>Email</Text>
            <View style={styles.row}>
              {editEmail === false ? (
                <Text style={styles.value}>{email}</Text>
              ) : (
                <TextInput
                  onChangeText={value => setEmail(value)}
                  value={email}
                  style={{flex: 1, borderBottomWidth: 0.5}}
                />
              )}
              <TouchableOpacity onPress={() => handlerEdit('email', 'c')}>
                <Text style={styles.edit}>
                  {editEmail === false ? 'Edit' : 'Ok'}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.sliders}>
          <View>
            <Text style={styles.lable}>Budget</Text>
            <Slider
              step={10}
              onValueChange={value => setBudget(value)}
              maximumValue={200}
              value={budget}
              trackStyle={{
                height: 7,
                borderRadius: 5,
              }}
              thumbStyle={{
                width: 20,
                height: 20,
                borderRadius: 20,
                borderWidth: 3,
                borderColor: '#FFF',
              }}
              thumbTintColor="#0AC4BA"
              minimumTrackTintColor="#0AC4BA"
              maximumTrackTintColor="#9DA3B4"
              style={{width: '100%'}}
            />
            <Text style={{textAlign: 'right', color: 'gray'}}>${budget}</Text>
          </View>
          <View>
            <Text style={styles.lable}>Monthly Cap</Text>
            <Slider
              step={10}
              onValueChange={value => setMonCap(value)}
              maximumValue={200}
              value={moncap}
              trackStyle={{
                height: 7,
                borderRadius: 5,
              }}
              thumbStyle={{
                width: 20,
                height: 20,
                borderRadius: 20,
                borderWidth: 3,
                borderColor: '#FFF',
              }}
              thumbTouchSize={{width: 30, height: 30}}
              thumbTintColor="#0AC4BA"
              minimumTrackTintColor="#0AC4BA"
              maximumTrackTintColor="#9DA3B4"
              style={{width: '100%'}}
            />
            <Text style={{textAlign: 'right', color: 'gray'}}>${moncap}</Text>
          </View>
        </View>
        <View style={{flex: 4, paddingVertical: 20}}>
          <View style={styles.row}>
            <Text style={styles.lable}>Notifications</Text>
            <Switch
              trackColor={{true: '#0AC4BA', false: 'grey'}}
              value={notice}
              style={{transform: [{scaleX: 0.8}, {scaleY: 0.8}]}}
              onValueChange={() => setNotice(!notice)}
            />
          </View>
          <View style={styles.row}>
            <Text style={styles.lable}>Newsletters</Text>
            <Switch
              trackColor={{true: '#0AC4BA', false: 'grey'}}
              value={newsletter}
              style={{transform: [{scaleX: 0.8}, {scaleY: 0.8}]}}
              onValueChange={() => setNewLetter(!newsletter)}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
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
    paddingTop: 20,
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
  sliders: {
    flex: 4,
    paddingVertical: 20,
    justifyContent: 'space-around',
    borderTopColor: 'gray',
    borderBottomColor: 'gray',
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
  },
  row: {
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  edit: {
    fontSize: 14,
    color: '#20D29B',
  },
  lable: {
    fontSize: 14,
    color: 'gray',
  },
  value: {
    fontSize: 14,
  },
});
export default Setting;
