import React, {useState} from 'react'
import { View, Text, TextInput, TouchableOpacity, FlatList, Image } from 'react-native'
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import { AppIcons, AppSearchBarWithAutocomplete, AppText, AppView, } from '../components'
import styles from '../assets/styles'
import { eventsList, PredictionType, mapStylesDark, url } from '../constants/constant';
import { StatusBar } from 'expo-status-bar';
import { useDebounce } from '../Hooks/useDebounce';
import { HttpPost } from '../utility/Http';
import { colors, sizes } from '../constants/them';
import { NavigationProp } from '@react-navigation/native';

interface props{
  navigation: NavigationProp<any>
}

const Maps:React.FC<props> = ({ navigation }) => {

  const [region, setRegion] = useState({ latitude: 37.78825, longitude: -122.4324, latitudeDelta: 0.0922, longitudeDelta: 0.0421,});
  const [mapType, setMapType ] = useState('satellite') // hybrid, satellite, terrain
  const [search, setSearch] = useState({ term: '', fetchPredictions: false })
  const [showPredictions, setShowPredictions] = useState(false)
  const [predictions, setPredictions] = useState<PredictionType[]>([])
  const [state, setState] = useState({
    Events: eventsList,
  })

  const onChangeText = async () => {
    if(search.term.trim() == '') return;
    if(!search.fetchPredictions) return;
    const apiUrl = `${url.GOOGLE_PACES_API_BASE_URL}/autocomplete/json?key=${url.GOOGLE_API_KEY}&input=${search.term}`
    try {
      HttpPost(apiUrl).then((res)=>{
        console.log("apiUrl :", apiUrl);        
        console.log("res :", res);    
        setShowPredictions(true)    
      })
    } catch (error) {
      console.log("error :", error);
    }
  }
  useDebounce(onChangeText, 1000, [search.term]);

  const onPredictionTapped = async (placeId: string, description: string) => {
    const apiUrl = `${GOOGLE_PACES_API_BASE_URL}/details/json?key=${env.GOOGLE_API_KEY}&place_id=${placeId}`
    try {
      HttpPost(apiUrl).then((res)=>{
        console.log("apiUrl onPredictionTapped :", apiUrl);        
        console.log("res onPredictionTapped :", res);
        setShowPredictions(false)
        setSearch({ term: description, fetchPredictions: false })
      })
    } catch (e) {
      console.log(e)
    }
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
      <AppView style={{padding:sizes.base, borderRadius:10,width:330 ,height:120,marginHorizontal:15}}>
        <TouchableOpacity style={{flexDirection:'row'}} onPress={()=>navigation.navigate('EventsDetailes',{events: item})}>
          <Image source={item.EventImage} style={{width:80,height:100, borderRadius:15}} resizeMode="stretch" />
          <View style={{paddingLeft:sizes.base,width:225,}}>
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
    <AppView style={styles.appMapContainer}>
      <StatusBar barStyle="dark-content" />
      <MapView initialRegion={region} onRegionChangeComplete={(region) => setRegion(region)} mapType={mapType} style={styles.map} customMapStyle={mapStylesDark}>
      </MapView>
      <View style={{ position: 'absolute', top: 10, width: '100%', margin:20, flexDirection:'row', marginTop:30, }}>
        <AppSearchBarWithAutocomplete style={styles.searchView} value={search.term} showPredictions={showPredictions} predictions={predictions} onPredictionTapped={onPredictionTapped} onChangeText={(text)=> setSearch({ term: text, fetchPredictions: true})} />
        <TouchableOpacity style={{backgroundColor:colors.textColor, padding:10, borderRadius:13, alignSelf:'center', }}>
          <AppIcons type='MaterialIcons' name='my-location' size={sizes.icon3} color={colors.appBule2} />
        </TouchableOpacity>
      </View>
      <View style={{position:'absolute', bottom:0, width:'100%', height:'25%'}}>
        <FlatList data={state.Events} horizontal showsHorizontalScrollIndicator={false} keyExtractor={(item, index) => `${item.id+index}`} renderItem={({item,index})=> renderEvents(item, index)}/>
      </View>
    </AppView>
  )
}

export default Maps