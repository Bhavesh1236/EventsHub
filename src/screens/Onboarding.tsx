import React, { useEffect, useRef, useState } from 'react';
import { View, FlatList, Dimensions, TouchableOpacity, Image } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';

import styles from '../assets/styles'
import { Onboardings } from '../constants/constant'
import { colors } from '../constants/them';
import { StackNavigationProp } from '@react-navigation/stack';
import { AppText, AppView } from '../components';

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
      if(currentIndex < Onboardings.length && currentIndex >= 0 && newIndex >= 0 && newIndex < Onboardings.length ){
        setCurrentIndex(newIndex);
      }else if(currentIndex >= 0 && newIndex < Onboardings.length){
        setCurrentIndex(0);
      } else {
        setCurrentIndex(Onboardings.length - 1)
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
      <AppView style={{ width: SCREEN_WIDTH }}>
        <Image source={item.image} style={styles.imgTop}/>
        <View style={styles.imgModal}>
          <AppText style={styles.txtTitle}>{item.title}</AppText>
          <AppText style={styles.txtDis}>{item.disscription}</AppText>
        </View>
        <View style={styles.btnView}>
          <TouchableOpacity activeOpacity={0.9} onPress={()=>navigation.reset({index: 0,routes: [{ name: 'Login' }],})}><AppText style={styles.txtBtn}>Skip</AppText></TouchableOpacity>
          <View style={styles.btnOval}>{Onboardings.map((data)=> <View key={data.id } style={data.id == item.id ? styles.directional1 : styles.directional2} />)}</View>
          <TouchableOpacity activeOpacity={0.9} disabled={item.id == Onboardings.length?true:false} onPress={()=>setCurrentIndex(currentIndex + 1)}><AppText style={[styles.txtBtn,{color:item.id == Onboardings.length? colors.darkgray : colors.white}]}>Next</AppText></TouchableOpacity>
        </View>
      </AppView>
    );
  };

  return (
    <AppView style={styles.appContainer}>
      <PanGestureHandler onHandlerStateChange={handleGestureEvent}>
        <FlatList ref={scrollRef} data={Onboardings} renderItem={renderItem} horizontal pagingEnabled={true} showsHorizontalScrollIndicator={false} scrollEnabled={false} keyExtractor={(_, index) => index.toString()} initialScrollIndex={currentIndex} />
      </PanGestureHandler>
    </AppView>
  )
}

export default Onboarding