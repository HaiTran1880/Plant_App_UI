import { BackgroundColor } from 'chalk';
import React, {useRef} from 'react';
import { 
    Text, 
    View,
    StyleSheet,
    Image,
    SafeAreaView,
    StatusBar,
    TouchableOpacity,
    ScrollView,
    useWindowDimensions,
    Animated
 } from 'react-native';
 import R from '../assets';
 import LinearGradient from 'react-native-linear-gradient';
const login=[
    {
        id:'1',
        img:R.image.login1
    },
    {
        id:'2',
        img:R.image.login2
    },
    {
        id:'3',
        img:R.image.login3
    }
]
const RenderDots=({scrollX})=>{
    const{width}=useWindowDimensions();
    return(
        <View style={styles.dots}>
                {login.map((item,index)=>{
                     const inputRange =[(index-1) * width,index * width, (index+1) * width];
                     const dotWidth= scrollX.interpolate({
                         inputRange,
                         outputRange:[5,8,5],
                         extrapolate:'clamp',   
                     })
                     const dotHeight= scrollX.interpolate({
                        inputRange,
                        outputRange:[5,8,5],
                        extrapolate:'clamp',   
                    })
                     const opacity=scrollX.interpolate({
                         inputRange,
                         outputRange:[0.3,1,0.3],
                         extrapolate:'clamp',
                     })
                  return(
                    <Animated.View
                    style={{
                        borderRadius:8,
                        width:dotWidth,
                        height:dotHeight,
                        marginLeft:10,
                        opacity:opacity,
                        backgroundColor:'gray',
                    }}
                    />
                  )
                })}
            </View>
    )
}

const Welcome = ({navigation}) => {
    const scrollX= useRef(new Animated.Value(0)).current;
    return(
        <SafeAreaView style={styles.container}>
            <StatusBar
            barStyle='dark-content'
            />
           <View style={styles.top}>
           <View style={{flexDirection:'row'}}>
            <Text style={styles.title}>Your home.</Text>
            <Text style={styles.title}>   Greener.</Text>
            </View>
            <Text style={styles.decription}>Enjoy the experience.</Text>
           </View>
          <View style={{flex:3}}>
            <ScrollView
            pagingEnabled
            horizontal={true}
            scrollEventThrottle={16}
            showsHorizontalScrollIndicator={false}
            onScroll={Animated.event([{nativeEvent:{contentOffset:{x:scrollX}}}],{useNativeDriver:false})}
            >
               {login.map(item=>{
                   return(
                       <Image
                        style={{width:useWindowDimensions().width, 
                        height:useWindowDimensions().height * 5/10}}
                       resizeMode='cover'
                       source={item.img}/>
                   )
               })}
            </ScrollView>
            <RenderDots scrollX={scrollX}/>
          </View>
           <View style={styles.bottom}>
           <TouchableOpacity onPress={()=>navigation.navigate('Login')}
            style={styles.btnLogin}>
               <LinearGradient 
               style={styles.gradient}
               start={{x: 0.0, y: 0.0}} end={{x: 1.0, y: 1.0}}
               colors={['#0AC4BA','#2BDA8E']}>
               <Text style={{color:'#FFF', fontSize:14}}>Login</Text>
               </LinearGradient>
            </TouchableOpacity>
                <TouchableOpacity onPress={()=>navigation.navigate('Signup')}
                    style={styles.btnSignup}>
                <Text style={{fontSize:14}}>Signup</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.service}>Temrs of service</Text>
            </TouchableOpacity>
           </View>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:"center",
        backgroundColor:'#FFF'
    },
    btnLogin:{
        width:280,
        height:50,
    },
    gradient:{
        flex: 1,
        borderRadius:5,
        justifyContent: 'center',
        alignItems:'center',
    },
    btnSignup:{
        width:280,
        height:50,
        borderRadius:5,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#FFF'
    },
    service:{
        fontSize:12,
        color:'gray'
    },
    title:{
        fontSize:26
    },
    decription:{
        fontSize:18,
        color:'gray'
    },
    dots:{
        flexDirection:'row', 
        justifyContent:'center', 
        alignItems:'center',
        marginBottom:60
    },
    bottom:{
        flex:1.2, 
        alignItems:'center', 
        justifyContent:'space-around',
    
    },
    top:{
        flex:1, 
        alignItems:'center', 
        justifyContent:'center'
    }
});
export default Welcome;
