import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  Modal,
  SafeAreaView,
} from 'react-native';
import R from '../assets';
import LinearGradient from 'react-native-linear-gradient';
const TemrModal = ({isOpen, onClose}) => {
  return (
    <Modal visible={isOpen} animationType="slide">
      <SafeAreaView style={styles.container}>
        <View style={{flex: 1, justifyContent: 'center'}}>
          <Text style={styles.title}>Tems Sevice</Text>
        </View>
        <View style={styles.form}>
          <Text style={styles.temr}>
            This is temrs sevice about our App ! This is temrs sevice about
            ourApp ! This is temrs sevice about our App ! This is temrs sevice
            about our App ! This is temrs sevice about our App ! This is temrs
            sevice about our App !
          </Text>

          <Text style={styles.temr}>
            This is temrs sevice about our App ! This is temrs sevice about
            ourApp ! This is temrs sevice about our App ! This is temrs sevice
            about our App ! This is temrs sevice about our App ! This is temrs
            sevice about our App !
          </Text>

          <Text style={styles.temr}>
            This is temrs sevice about our App ! This is temrs sevice about
            ourApp ! This is temrs sevice about our App ! This is temrs sevice
            about our App ! This is temrs sevice about our App ! This is temrs
            sevice about our App !
          </Text>
          <TouchableOpacity onPress={onClose} style={styles.btnLogin}>
            <LinearGradient
              style={styles.gradient}
              start={{x: 0.0, y: 0.0}}
              end={{x: 1.0, y: 1.0}}
              colors={['#0AC4BA', '#2BDA8E']}>
              <Text style={{color: '#FFF', fontSize: 14}}>Agree</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </Modal>
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
    paddingLeft: 20,
  },
  form: {
    flex: 9,
    paddingTop: 40,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  btnLogin: {
    height: 48,
    marginVertical: 30,
    borderRadius: 5,
    width: '50%',
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
  temr: {
    marginTop: 20,
    color: 'gray',
  },
});
export default TemrModal;
