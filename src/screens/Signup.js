import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import R from '../assets';
import LinearGradient from 'react-native-linear-gradient';
import PasswordInputText from 'react-native-hide-show-password-input';
const Signup = ({navigation}) => {
  const [password, setPassword] = useState('');
  const securePassword = val => {};
  return (
    <View style={styles.container}>
      <View style={{flex: 2}}>
        <Text style={styles.title}>Sign Up</Text>
      </View>
      <View style={styles.form}>
        <View style={styles.row}>
          <Text style={styles.lableEmail}>Email</Text>
          <TextInput
            style={styles.inputEmail}
            placeholder="Email"
            autoCapitalize={false}
          />
        </View>
        <View style={styles.row}>
          <Text style={styles.lableEmail}>Username</Text>
          <TextInput
            style={styles.inputEmail}
            placeholder="Username"
            autoCapitalize={false}
          />
        </View>
        <View style={styles.row}>
          <Text style={styles.lablePassword}>Password</Text>
          <View style={styles.rowEmail}>
            <TextInput
              style={styles.inputPassword}
              placeholder="Password"
              secureTextEntry={true}
              autoCapitalize={false}
            />
            <View style={styles.rowPassword}>
              <TouchableOpacity style={styles.btnView}>
                <Image
                  resizeMode="contain"
                  style={styles.imgView}
                  source={R.image.icon_view}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.row}>
          <Text style={styles.lablePassword}>Repeat Password</Text>
          <View style={styles.rowEmail}>
            <TextInput
              style={styles.inputPassword}
              placeholder="Repeat Password"
              secureTextEntry={true}
              autoCapitalize={false}
            />
            <View style={styles.rowPassword}>
              <TouchableOpacity style={styles.btnView}>
                <Image
                  resizeMode="contain"
                  style={styles.imgView}
                  source={R.image.icon_view}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('Browse')}
          style={styles.btnLogin}>
          <LinearGradient
            style={styles.gradient}
            start={{x: 0.0, y: 0.0}}
            end={{x: 1.0, y: 1.0}}
            colors={['#0AC4BA', '#2BDA8E']}>
            <Text style={{color: '#FFF', fontSize: 14}}>Sign Up</Text>
          </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Login')}
          style={{marginTop: 30}}>
          <Text style={styles.service}>Back to Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    backgroundColor: '#FFF',
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
  },
  form: {
    flex: 6,
    justifyContent: 'flex-start',
  },
  btnLogin: {
    width: '100%',
    height: 48,
    marginTop: 30,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  service: {
    fontSize: 12,
    color: 'gray',
    alignSelf: 'center',
    textDecorationLine: 'underline',
  },
  gradient: {
    flex: 1,
    width: '100%',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    height: 60,
    marginTop: 10,
    justifyContent: 'space-between',
  },
  inputEmail: {
    borderBottomWidth: 0.5,
    flex: 1,
    width: '100%',
    borderBottomColor: 'gray',
  },
  inputPassword: {
    flex: 9,
    borderBottomWidth: 0.5,
    height: '100%',
    borderBottomColor: 'red',
  },
  lableEmail: {
    color: 'gray',
    fontSize: 14,
  },
  lablePassword: {
    color: 'red',
    fontSize: 14,
  },
  rowEmail: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    flex: 1,
  },
  rowPassword: {
    flex: 1,
    borderBottomWidth: 0.5,
    borderBottomColor: 'red',
  },
  btnView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgView: {
    width: 20,
    height: 15,
  },
});
export default Signup;
