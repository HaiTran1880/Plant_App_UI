import React, { useState } from 'react';
import { 
    Text, 
    View,
    StyleSheet,
    Image,
    SafeAreaView,
    FlatList,
    TouchableOpacity,
 } from 'react-native';
import { set } from 'react-native-reanimated';
 import R from '../assets';
import { Categories } from '../constants';
const Item=(props)=>{
    const { name, img, count } = props.item;
    const { navigation } = props;
    return(
        <TouchableOpacity onPress={()=>navigation.navigate('Explore')}
        style={styles.Item}>
            <Image source={img}/>
            <Text style={styles.nameItem}>{name}</Text>
            <Text style={styles.countItem}>{count} products</Text>
        </TouchableOpacity>
    )
}
const Browse = ({navigation}) => {
    const[tabSelected, setTabSelected]=useState(0)
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.InfoBar}>
                <Text style={styles.title}>Browse</Text>
                <TouchableOpacity onPress={()=> navigation.navigate('Setting')}>
                <Image style={styles.avata}
                source={R.image.avata}/>
                </TouchableOpacity>
            </View>
            <View style={styles.TabBar}>
                <View style={styles.containTabBar}>
                    <TouchableOpacity onPress={()=>setTabSelected(0)}
                        style={tabSelected == 0 ? styles.tabActived : styles.tab}>
                    <Text style={tabSelected==0? styles.textActived: styles.textInActived}>Products</Text>
                </TouchableOpacity>
                    <TouchableOpacity onPress={()=>setTabSelected(1)}
                        style={tabSelected == 1 ? styles.tabActived : styles.tab}>
                        <Text style={tabSelected==1? styles.textActived: styles.textInActived}>Inspirations</Text>
                </TouchableOpacity>
                    <TouchableOpacity onPress={()=>setTabSelected(2)}
                        style={tabSelected == 2 ? styles.tabActived : styles.tab}>
                    <Text  style={tabSelected==2? styles.textActived: styles.textInActived}>Shop</Text>
                </TouchableOpacity>
                </View>
               <View style={{width:'100%', height:1,opacity:0.4, backgroundColor:'gray'}}></View>
            </View>
            <View style={styles.Content}>
                <FlatList
                numColumns={2}
                data={Categories}
                keyExtractor={(item)=>item.id}
                renderItem={({item})=><Item item={item} navigation={navigation}/>}
                columnWrapperStyle={styles.row}
                />
            </View>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#FFF'
    },
    InfoBar:{
        flex:1,
        paddingHorizontal:30,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    TabBar:{
        flex: 0.8,
        paddingHorizontal: 30,
    },
    containTabBar: {
        flex:1,
        flexDirection: 'row',
    },
    Content:{
        flex:8,
        paddingTop:40,
        paddingHorizontal:30,
        
    },
    avata:{
        width:40,
        height:40,
        borderRadius:40
    },
    title:{
       fontSize:26 
    },
    Item:{
        flex:1,
        width:150,
        height:150,
        margin: 10,
        borderRadius:5,
        backgroundColor:'#FFF',
        justifyContent:'center',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 5,
            height: 5,
        },
shadowOpacity: 0.3,
shadowRadius: 8,

    },
    row:{
        flex:1,
        justifyContent:'space-around',
        alignItems:'center'
    },
    nameItem:{
        fontSize:14
    },
    countItem:{
        fontSize:12,
        color:'gray'
    },
    tab: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    tabActived: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
        borderBottomWidth: 1,
        borderBottomColor:'#0AC4BA'
    },
    textActived: {
        fontSize: 16,
        color:'#0AC4BA'
    },
    textInActived: {
        fontSize: 16,
        color:'gray'
    }
});
export default Browse;
