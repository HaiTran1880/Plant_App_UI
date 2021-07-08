import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Image,
  Alert,
  TouchableOpacity,
  Modal,
} from 'react-native';
import R from '../assets';
import LinearGradient from 'react-native-linear-gradient';

const Forgotpassword = ({navigation}) => {
  const [openModal, setOpenModal] = useState(true);
  const [password, setPassword] = useState('');

  const showAlert = () => {
    Alert.alert(
      'New Password was sent',
      'Please check your email',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      {cancelable: false},
    );
  };
  return (
    <View style={styles.container}>
      <View style={{flex: 1, justifyContent: 'center'}}>
        <Text style={styles.title}>Forgot Password</Text>
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
        <TouchableOpacity onPress={showAlert} style={styles.btnLogin}>
          <LinearGradient
            style={styles.gradient}
            start={{x: 0.0, y: 0.0}}
            end={{x: 1.0, y: 1.0}}
            colors={['#0AC4BA', '#2BDA8E']}>
            <Text style={{color: '#FFF', fontSize: 14}}>Forgot</Text>
          </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
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
  },
  form: {
    flex: 9,
    paddingTop: 50,
    justifyContent: 'flex-start',
  },
  btnLogin: {
    marginVertical: 20,
    height: 48,
    borderRadius: 5,
    width: '100%',
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
    borderRadius: 5,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    height: 60,
    justifyContent: 'space-between',
  },
  inputEmail: {
    borderWidth: 0.5,
    flex: 1,
    borderRadius: 5,
    paddingHorizontal: 5,
    width: '100%',
    borderColor: 'gray',
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
});
export default Forgotpassword;
