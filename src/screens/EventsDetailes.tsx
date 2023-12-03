import React from 'react'
import { View, Text, ImageBackground, Image, TouchableOpacity } from 'react-native'
import { AppIcons, AppText, AppView } from '../components'
import styles from '../assets/styles'
import { NavigationProp, useRoute } from '@react-navigation/native'
import { colors, sizes, fonts } from '../constants/them'
import AppButtion from '../components/shared/AppButtion'

interface props{
    navigation: NavigationProp<any>
}
const EventsDetailes: React.FC<props> = ({navigation}) => {
    const route = useRoute();
    const events = route.params.events;

    return (
      <AppView style={{flex:1}}>
          <ImageBackground source={events.image} resizeMode='stretch' imageStyle={{ borderBottomLeftRadius: 40, borderBottomRightRadius: 40}} style={{width:'100%', height:250}}>
              <View style={{flexDirection:'row', paddingTop:35,alignContent:'space-between'}}>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                  <TouchableOpacity style={{ padding:10, backgroundColor: '#4548', borderRadius: 15, marginLeft:20,marginRight:10}} onPress={()=> navigation.goBack()}>
                    <AppIcons color={colors.white} size={20} type='Feather' name='arrow-left' />
                  </TouchableOpacity>
                  <AppText style={styles.font1}>Event Details</AppText>
                </View>
                <TouchableOpacity style={{ padding:10, backgroundColor: '#4548',marginLeft:50, borderRadius: 15, }}>
                  <AppIcons type='Ionicons' name={'bookmark'} size={18} color={colors.appBule3} />
                </TouchableOpacity>
              </View>
          </ImageBackground>
          <View style={{margin:20}}>
            {/* display title  */}
            <AppText style={styles.font1}>{events.title}</AppText>
            
            {/* display events address */}
            <View style={styles.txtDate}>
              <View style={styles.txtDateDay}>
                <AppIcons type='Ionicons' name='calendar' size={22} color={colors.appBule2} />
              </View>
              <View style={{ paddingLeft:sizes.padding, paddingBottom:sizes.base}}>
                <AppText style={{ ...fonts.h2 }}>{events.date.day} {events.date.month} {events.date.year}</AppText>
                <AppText  style={{ ...fonts.body3, color: colors.gray }}>{events.date.week} {events.date.startTime}-{events.date.endTime}</AppText>
              </View>
            </View>

            {/* display address */}
            <View style={[styles.txtDate,{paddingTop:10}]}>
              <View style={styles.txtDateDay}>
                <AppIcons type='Ionicons' name='location-sharp' size={23} color={colors.appBule2} />
              </View>
              <View style={{ paddingLeft:sizes.padding, paddingBottom:sizes.base}}>
                <AppText style={{ ...fonts.h2 }}>{events.location.name}</AppText>
                <AppText style={{ ...fonts.body3, color: colors.gray}}>{events.location.address}</AppText>
              </View>
            </View>

            {/* display organizer */}
            <View style={{flexDirection:'row', paddingLeft:sizes.base,paddingTop:15, paddingBottom: sizes.padding, alignItems:'center'}}>
              <Image source={events.organizer.image} resizeMode='stretch' style={{width:50,height:50,borderRadius: 10}} />
              <View style={{paddingLeft:sizes.padding,paddingBottom:5, width: '60%'}}>
                <AppText style={{...fonts.h2}}>{events.organizer.name}</AppText>
                <AppText style={{...fonts.body3, color: colors.gray}}>Organizer</AppText>
              </View>
              <TouchableOpacity style={{backgroundColor:'#4542',padding:sizes.base,borderRadius:sizes.base,alignItems:'center'}}>
                <AppText style={{...fonts.body2, color: colors.appBule}}>Follow</AppText>
              </TouchableOpacity>
            </View>
            
            {/* display description */}
            <View>
              <AppText style={{...fonts.body1}}>About Event</AppText>
              <AppText style={{...fonts.body3}}>{events.description}</AppText>
            </View>
            <View style={{justifyContent:'center',alignItems:'center'}}>
              <AppButtion contenerStyle={{paddingTop:10}} title="Buy Ticket" onPress={()=> console.log("test log:->120 ")} />
            </View>


          </View>
      </AppView>
    )
}

export default EventsDetailes