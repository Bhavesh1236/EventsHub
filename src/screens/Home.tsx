import { View, Text, TouchableOpacity, ImageBackground, Image } from 'react-native'
import React, {useState} from 'react'
import styles from '../assets/styles'
import { AppIcons, AppText, AppView } from '../components'
import { colors, fonts, sizes } from '../constants/them'
import AppSearch from '../components/shared/AppSearch'
import { eventsList, filter } from '../constants/constant'
import { FlatList, ScrollView } from 'react-native-gesture-handler'
import { NavigationProp } from '@react-navigation/native'
import images from '../constants/images'

interface Props{
  navigation: NavigationProp<any>
}
const Home: React.FC<Props> = ({ navigation }) => {
  const [state, setState] = useState({
    Events: eventsList,
  })

  const filterItem = (item, index) => {
    // console.log("item :-> ",item.id);
    return(
      <TouchableOpacity key={index} style={{flexDirection:'row',padding:10, borderRadius:20, margin:sizes.base, justifyContent:'center',alignItems:'center',marginRight: (index+1) == filter.length ? 50 : 15, backgroundColor:item.color,}}>
        <AppIcons type={item.icon['type']} name={item.icon['name']} color={colors.backgroundColor} size={20}/>
        <AppText style={{fontSize:18,paddingLeft:8}}>{item.title}</AppText>
      </TouchableOpacity>
    )
  }

  const renderHeader = () => {
    return(
      <View style={styles.appHeader}>
        <View style={{flexDirection:'row',marginTop:50,marginBottom: 30,justifyContent: 'space-between', marginHorizontal:20,alignItems:'center'}}>
          <TouchableOpacity onPress={()=> navigation.openDrawer()}>
            <AppIcons type='AntDesign' name='menu-fold' color={colors.backgroundColor} size={20}/>
          </TouchableOpacity>
          <View style={{alignItems:'center', }}>
            <TouchableOpacity style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
              <AppText>Current Location</AppText>
              <AppIcons type='AntDesign' name='caretdown' color={colors.backgroundColor} size={15} />
            </TouchableOpacity>
            <AppText>Rajkot, Guajrat</AppText>
          </View>
          <TouchableOpacity style={{padding:5,backgroundColor:colors.appBule4,borderRadius:50}}>
            <AppIcons type='Ionicons' name='notifications-outline' color={colors.backgroundColor} size={20}/>
            {/* <AppIcons type='MaterialIcons' name='notifications-on' color={colors.backgroundColor} size={20}/> active */}
          </TouchableOpacity>
        </View>
        <AppSearch />
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{position:'absolute',top:170,left:10,}}>
          {filter.map((item,index)=> filterItem(item,index))}
        </ScrollView>
      </View>
    )
  }

  function setBookmark(item, index) {
    let eventsList = state.Events;
    if(item?.isBookmark === true){
      eventsList[index] = {...item,isBookmark: false};
    } else {
      eventsList[index] = {...item,isBookmark: true};
    }
    setState(state => ({Events: eventsList}))
  }

  const renderEvents = (item, index) => {
    return(
      <AppView style={{paddingRight:30}}>
        <TouchableOpacity onPress={()=> navigation.navigate('EventsDetailes',{events: item})}>
          <ImageBackground source={item.EventImage} style={styles.imgEvent} imageStyle={{ borderRadius: 15,}} resizeMode="stretch" >
            <View style={{alignItems:'center',backgroundColor:colors.white2,width:50, height:50, borderRadius: 10, paddingVertical:5}}>
              <AppText>{item.date.day}</AppText>
              <AppText>{item.date.month}</AppText>
            </View>
            <TouchableOpacity style={{alignItems:'center',backgroundColor:colors.white2,width:33, height:33, borderRadius: 10, paddingVertical:5}} onPress={()=> setBookmark(item, index)}>
              <AppIcons type='Ionicons' name={item?.isBookmark ? 'bookmark' : 'bookmark-outline'} size={20} color={item?.isBookmark ? colors.appBule3 : colors.red } />
            </TouchableOpacity>
          </ImageBackground>
        </TouchableOpacity>
        <View style={styles.eventView}>
          <AppText style={styles.font2} numberOfLines={1}>{item.title}</AppText>
          <AppText style={styles.font3} numberOfLines={1}><AppIcons type='Entypo' name='location-pin' size={18} /> {item.location.address}</AppText>
        </View>
      </AppView>
    )
  }

  return (
    <AppView style={{flex:1}}>
      {/* display header  */}
      {renderHeader()}

      {/* Upcoming Events */}
      <AppView style={styles.event}>
        <View style={styles.eventHeader}>
          <AppText style={styles.txtEvent}>Upcoming Events</AppText>
          <TouchableOpacity style={{flexDirection:'row', alignItems:'center'}}>
            <AppText style={{color:colors.gray}}>See All </AppText>
            <AppIcons type='AntDesign' name='caretright' color={colors.gray} size={12} />
          </TouchableOpacity>
        </View>

        {/* Display Events List */}
        <FlatList data={state.Events} style={{marginTop: sizes.padding, maxHeight:280,}} horizontal showsHorizontalScrollIndicator={false} keyExtractor={(item, index) => `${item.id+index}`} renderItem={({item,index})=> renderEvents(item, index)}/>
        
        {/* Invite your friends */}
        <View style={{backgroundColor:'#0ae3ef3b', width: '100%', height:135, padding:20, borderRadius: 15, justifyContent:'space-between'}}>
          <AppText style={{fontSize:18, fontFamily:'Roboto-Bold'}}>Invite your friends</AppText>
          <AppText style={{fontSize:14, fontFamily:'Roboto-Regular'}}>Get $20 for ticket</AppText>
          <TouchableOpacity style={{backgroundColor:'#00F8FF', padding:8, marginTop:10, borderRadius: 8, alignItems:'center', justifyContent:'center', width:90}}>
            <AppText>Invite</AppText>
          </TouchableOpacity>
          <Image source={images.invite} resizeMode='stretch' style={{position:'absolute', right:0,height:133,width:170,}} />
        </View>
      </AppView>
    </AppView>
  )
}

export default Home