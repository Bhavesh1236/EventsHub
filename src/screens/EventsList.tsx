import { View, Text, FlatList, TouchableOpacity, Image, } from 'react-native'
import React, { useState } from 'react'
import { AppText, AppView, AppIcons } from '../components'
import AppHeader from '../components/shared/AppHeader'
import { NavigationProp, } from '@react-navigation/native'
import { eventsList } from '../constants/constant';
import { colors, sizes } from '../constants/them'
import styles from '../assets/styles'

interface props{
    navigation: NavigationProp<any>
}
const EventsList:React.FC<props> = ({ navigation }) => {
  const [state, setState] = useState({
    Events: eventsList,
  })

  const lineDevider = () => {
    return <AppView style={{ height:1,marginVertical:sizes.base ,backgroundColor:colors.backgroundColor}} />
  }
  const renderEvents = (item, index) => {
    return(
      <AppView style={{marginVertical: sizes.base, borderRadius:10,marginHorizontal:15}}>
        <TouchableOpacity style={{flexDirection:'row'}} onPress={()=> navigation.navigate('EventsDetailes',{events: item})}>
          <Image source={item.EventImage} style={{width:80,height:100, borderRadius:15}} resizeMode="stretch" />
          <View style={{paddingLeft:sizes.base, flex:1}}>
            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
              <AppText style={{color:colors.appBule}} numberOfLines={1}>{item.date.week},{item.date.month} {item.date.day}.{item.date.startTime}</AppText>
              <TouchableOpacity onPress={()=> setBookmark(item, index)}>
                <AppIcons type='Ionicons' name={item?.isBookmark ? 'bookmark' : 'bookmark-outline'} size={20} color={colors.orange} />
              </TouchableOpacity>
            </View>
            <AppText style={styles.font2} numberOfLines={2}>{item.title}</AppText>
            <AppText style={styles.font3} numberOfLines={1}><AppIcons type='Entypo' name='location-pin' size={18} /> {item.location.address}</AppText>
          </View>
        </TouchableOpacity>
      </AppView>
    )
  }

  return (
    <AppView style={{flex:1}}>
      <AppHeader title='Events' isBack={true} isMore={false} isSearch={true} onPress={()=>navigation.goBack()} onPressSearch={()=>navigation.navigate("EventsSearch")} />
      <FlatList data={state.Events} style={{marginTop:15}} ItemSeparatorComponent={lineDevider} keyExtractor={(item, index) => `${item.id+index}`} renderItem={({item,index})=> renderEvents(item, index)}/>
    </AppView>
  )
}

export default EventsList