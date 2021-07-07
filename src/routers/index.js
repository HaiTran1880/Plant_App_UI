
import * as React from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Browse from '../screens/Browse';
import Explore from '../screens/Explore';
import Login from '../screens/Login';
import Product from '../screens/Product';
import Welcome from '../screens/Welcome';
import Setting from '../screens/Setting';
import Signup from '../screens/Signup';
import Forgotpassword from '../screens/Forgotpassword';
import { Image, TouchableOpacity } from 'react-native';
import R from '../assets';

const Stack = createStackNavigator();

function StackNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Welcome' screenOptions={{}}>
        <Stack.Screen name="Welcome" component={Welcome} options={{headerShown:false}}/>
        <Stack.Screen name="Login" component={Login} options  options={({ navigation, route }) => ({
         title: '',
         headerStyle: {
           borderBottomColor:'transparent',
           backgroundColor: '#FFF',
           shadowOffset: { height: 0, width: 0 }
         },
         headerLeft:()=>{
           return(
             <TouchableOpacity onPress={()=>navigation.goBack()}
             style={{marginLeft:20}}>
               <Image style={{width:25, height:15}}
               resizeMode='contain'
               source={R.image.icon_back}/>
             </TouchableOpacity>
           )
         }
        })} />
          <Stack.Screen name="Forgotpassword" component={Forgotpassword} options  options={({ navigation, route }) => ({
         title: '',
         headerStyle: {
           borderBottomColor:'transparent',
           backgroundColor: '#FFF',
           shadowOffset: { height: 0, width: 0 }
         },
         headerLeft:()=>{
           return(
             <TouchableOpacity onPress={()=>navigation.goBack()}
             style={{marginLeft:20}}>
               <Image style={{width:25, height:15}}
               resizeMode='contain'
               source={R.image.icon_back}/>
             </TouchableOpacity>
           )
         }
        })}/>
          <Stack.Screen name="Signup" component={Signup} options  options={({ navigation, route }) => ({
         title: '',
         headerStyle: {
           borderBottomColor:'transparent',
           backgroundColor: '#FFF',
           shadowOffset: { height: 0, width: 0 }
         },
         headerLeft:()=>{
           return(
             <TouchableOpacity onPress={()=>navigation.goBack()}
             style={{marginLeft:20}}>
               <Image style={{width:25, height:15}}
               resizeMode='contain'
               source={R.image.icon_back}/>
             </TouchableOpacity>
           )
         }
        })}/>
        <Stack.Screen name="Browse" component={Browse} options={({ navigation, route }) => ({
         title: '',
         headerStyle: {
           borderBottomColor:'transparent',
           backgroundColor: '#FFF',
           shadowOffset: { height: 0, width: 0 }
         },
         headerLeft:()=>{
           return(
             <TouchableOpacity onPress={()=>navigation.goBack()}
             style={{marginLeft:20}}>
               <Image style={{width:25, height:15}}
               resizeMode='contain'
               source={R.image.icon_back}/>
             </TouchableOpacity>
           )
         }
        })}/>
        <Stack.Screen name="Explore" component={Explore} options={({ navigation, route }) => ({
         title: '',
         headerStyle: {
           backgroundColor: '#FFF',
           borderBottomColor: 'transparent',
           shadowOffset: { height: 0, width: 0 }
         },
         headerLeft:()=>{
           return(
             <TouchableOpacity onPress={()=>navigation.goBack()}
             style={{marginLeft:20}}>
               <Image style={{width:25, height:15}}
               resizeMode='contain'
               source={R.image.icon_back}/>
             </TouchableOpacity>
           )
         }
        })}/>
        <Stack.Screen name="Product" component={Product} options={({ navigation, route }) => ({
         title: '',
         headerStyle: {
           backgroundColor: '#FFF',
           shadowOffset: { height: 0, width: 0 }
         },
         headerLeft:()=>{
           return(
             <TouchableOpacity onPress={()=>navigation.goBack()}
             style={{marginLeft:20}}>
               <Image style={{width:25, height:15}}
               resizeMode='contain'
               source={R.image.icon_back}/>
             </TouchableOpacity>
           )
         },
          headerRight:()=>{
           return(
             <TouchableOpacity onPress={()=>{}}
             style={{marginRight:20}}>
               <Image style={{width:25, height:15}}
               resizeMode='contain'
               source={R.image.icon_more}/>
             </TouchableOpacity>
           )
         }
        })} />
         <Stack.Screen name="Setting" component={Setting} options={({ navigation, route }) => ({
         title: '',
         headerStyle: {
           backgroundColor: '#FFF',
           shadowOffset: { height: 0, width: 0 }
         },
         headerLeft:()=>{
           return(
             <TouchableOpacity onPress={()=>navigation.goBack()}
             style={{marginLeft:20}}>
               <Image style={{width:25, height:15}}
               resizeMode='contain'
               source={R.image.icon_back}/>
             </TouchableOpacity>
           )
         }
        })}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default StackNavigation;