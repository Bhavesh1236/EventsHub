import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from '../assets/styles'
import { AppIcons, AppText, AppView } from '../components'
import { colors, sizes } from '../constants/them'
import AppSearch from '../components/shared/AppSearch'
import { filter } from '../constants/constant'
import { ScrollView } from 'react-native-gesture-handler'
import { NavigationProp } from '@react-navigation/native'

interface Props{
  navigation: NavigationProp<any>
}
const Home: React.FC<Props> = ({ navigation }) => {

  const filterItem = (item, index) => {
    // console.log("item :-> ",item.id);
    return(
      <TouchableOpacity key={index} style={{flexDirection:'row', backgroundColor:item.color,padding:5, borderRadius:20, margin:sizes.base, justifyContent:'center',alignItems:'center',height:40,marginRight: (index+1) == filter.length ? 50 : 15}}>
        <AppIcons type={item.icon['type']} name={item.icon['name']} color={colors.backgroundColor} size={20}/>
        <AppText style={{fontSize:18}}>{item.title}</AppText>
      </TouchableOpacity>
    )
  }

  const renderHeader = () => {
    return(
      <View style={styles.appHeader}>
        <View style={{flexDirection:'row',marginVertical:30,justifyContent: 'space-between', marginHorizontal:20,alignItems:'center'}}>
          <TouchableOpacity onPress={()=> navigation.openDrawer()}>
            <AppIcons type='AntDesign' name='menu-fold' color={colors.backgroundColor} size={20}/>
          </TouchableOpacity>
          <View style={{alignItems:'center'}}>
            <TouchableOpacity style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
              <AppText>Current Location</AppText>
              <AppIcons type='AntDesign' name='caretdown' color={colors.backgroundColor} size={15} />
            </TouchableOpacity>
            <AppText>Rajkot, Guajrat</AppText>
          </View>
          <TouchableOpacity style={{padding:5,backgroundColor:colors.darkgray2,borderRadius:50}}>
            <AppIcons type='Ionicons' name='notifications-outline' color={colors.backgroundColor} size={20}/>
            {/* <AppIcons type='MaterialIcons' name='notifications-on' color={colors.backgroundColor} size={20}/> active */}
          </TouchableOpacity>
        </View>
        <AppSearch />
        <ScrollView horizontal style={{position:'absolute',top:170,left:10,}}>
          {filter.map((item,index)=> filterItem(item,index))}
        </ScrollView>
      </View>
    )
  }

  return (
    <AppView style={styles.container}>
      {/* display header  */}
      {renderHeader()}

    </AppView>
  )
}

export default Home