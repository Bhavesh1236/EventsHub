import { View, Text, Image } from 'react-native'
import React from 'react'
import { AppText, AppView } from '../components'
import styles from '../assets/styles'
import AppHeader from '../components/shared/AppHeader'
import AppButtion from '../components/shared/AppButtion'
import { NavigationProp } from '@react-navigation/native'
import PagerView from 'react-native-pager-view';
import Animated, { useHandler, useEvent } from 'react-native-reanimated';
import images from '../constants/images'
import { sizes } from '../constants/them'

const AnimatedPager = Animated.createAnimatedComponent(PagerView);

interface props{
  navigation: NavigationProp<any>
}

export function usePagerScrollHandler(handlers: any, dependencies?: any) {
  const { context, doDependenciesDiffer } = useHandler(handlers, dependencies);
  const subscribeForEvents = ['onPageScroll'];

  return useEvent<any>(
    (event) => {
      'worklet';
      const { onPageScroll } = handlers;
      if (onPageScroll && event.eventName.endsWith('onPageScroll')) {
        onPageScroll(event, context);
      }
    },
    subscribeForEvents,
    doDependenciesDiffer
  );
}

const Events:React.FC<props> = ({navigation}) => {

  const handler = usePagerScrollHandler({
    onPageScroll: (e: any) => {
      'worklet';
      console.log(e.offset, e.position);
    },
  });
  return (
    <AppView style={{flex:1}}>
      <AppHeader title='Events' />
      <AnimatedPager
        testID={'pager-view'}
        style={styles.pagerView}
        initialPage={0}
        onPageScroll={handler}
      >
        <View testID={'1'} style={{justifyContent:'center', alignItems:'center'}} key="1">
          <View style={{backgroundColor:'#EBF5FC',borderRadius:159, paddingTop:60, paddingHorizontal:30, overflow:'hidden', marginBottom:30}}>
            <Image source={images.clander} resizeMode='contain' style={{height: 200, width:200,}} />
          </View>
          <AppText style={styles.font1}>No Upcoming Event</AppText>
          <AppText style={styles.font3}>Lorem ipsum dolor sit amet, consectetur </AppText>
        </View>
        <View testID={'2'} key="2">
          <AppText>Second page</AppText>
        </View>
      </AnimatedPager>
      <View style={{ alignItems:'center', flex:0.30}}>
        <AppButtion title="Explore Events" onPress={()=> navigation.navigate('EventsList')} />
      </View>
    </AppView>
  )
}

export default Events