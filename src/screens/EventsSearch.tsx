import React, {useState} from 'react'
import { Text, View, FlatList, TouchableOpacity, Image } from 'react-native'
import { AppText, AppView, AppIcons } from '../components'
import styles from '../assets/styles'
import AppHeader from '../components/shared/AppHeader'
import { useNavigation } from '@react-navigation/native'
import AppSearch from '../components/shared/AppSearch'
import { sizes,colors } from '../constants/them'
import { eventsList } from '../constants/constant'

const EventsSearch = () => {
    const navigation = useNavigation();
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
                <AppText style={[styles.font2,{color:colors.appBule,}]} numberOfLines={1}>{item.date.week},{item.date.month} {item.date.day}.{item.date.startTime}</AppText>
                <AppText style={styles.font1} numberOfLines={2}>{item.title}</AppText>
              </View>
            </TouchableOpacity>
          </AppView>
        )
      }
    return (
        <AppView style={{flex:1}}>
            <AppHeader title='Search' isMore={false} isBack={true} onPress={()=>navigation.goBack()} />
            <View style={{marginTop:15}}>
                <AppSearch />
            </View>
            <View>
                <FlatList data={state.Events} style={{marginTop:15}} ItemSeparatorComponent={lineDevider} keyExtractor={(item, index) => `${item.id+index}`} renderItem={({item,index})=> renderEvents(item, index)}/>
            </View>
        </AppView>
    )
}

export default EventsSearch