import React, { useEffect, useRef, useState } from 'react';
import { View, FlatList, Dimensions, TouchableOpacity,Text, Image } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';

import styles from '../assets/styles'
import { Onboardings } from '../constants/constant'
import { colors } from '../constants/them';
import { StackNavigationProp } from '@react-navigation/stack';

const SCREEN_WIDTH = Dimensions.get('window').width;
interface props {
  navigation: StackNavigationProp<any>
}
const Onboarding:React.FC<props> = ({navigation}) => {
  const scrollRef = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const handleGestureEvent = event => {
    if (event.nativeEvent.state === State.END && currentIndex >= 0 && currentIndex < Onboardings.length) {
      const offsetX = event.nativeEvent.translationX;      
      const newIndex =  offsetX > 0 ? currentIndex - 1 : currentIndex + 1;     
      if(currentIndex < Onboardings.length && currentIndex >= 0 ){
        setCurrentIndex(newIndex);
      }else if(currentIndex >= 0){
        setCurrentIndex(0);
      } else if(currentIndex < Onboardings.length){
        setCurrentIndex(currentIndex)
      }
    }
  };

  useEffect(() => {  
    if (scrollRef.current !== null && currentIndex >= 0 && currentIndex <= Onboardings.length) {  
      scrollRef.current.scrollToIndex({ index: currentIndex, animated: true });
    }
  }, [currentIndex]);

  const renderItem = ({ item,index }) => {
    return (
      <TouchableOpacity
        style={{ width: SCREEN_WIDTH, alignItems: 'center', justifyContent: 'center',}}
        activeOpacity={0.9}
      >
        <Image source={item.image} style={styles.imgTop}/>
        <View style={styles.imgModal}>
          <Text style={styles.txtTitle}>{item.title}</Text>
          <Text style={styles.txtDis}>{item.disscription}</Text>
        </View>
        <View style={styles.btnView}>
          <TouchableOpacity activeOpacity={0.9} onPress={()=>navigation.reset({index: 0,routes: [{ name: 'Home' }],})}><Text style={styles.txtBtn}>Skip</Text></TouchableOpacity>
          <View style={styles.btnOval}>{Onboardings.map((data)=> <View style={data.id == item.id ? styles.directional1 : styles.directional2} />)}</View>
          <TouchableOpacity activeOpacity={0.9} disabled={item.id == Onboardings.length?true:false} onPress={()=>setCurrentIndex(currentIndex + 1)}><Text style={[styles.txtBtn,{color:item.id == Onboardings.length? colors.darkgray : colors.white}]}>Next</Text></TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.appContainer}>
      <PanGestureHandler onHandlerStateChange={handleGestureEvent}>
        <FlatList
          ref={scrollRef}
          data={Onboardings}
          renderItem={renderItem}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          scrollEnabled={false}
          keyExtractor={(_, index) => index.toString()}
          initialScrollIndex={currentIndex}
        />
      </PanGestureHandler>
    </View>
  )
}

export default Onboarding