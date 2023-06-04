import React ,{ useEffect }from 'react';
import { View, Text, Image, ActivityIndicator } from 'react-native';
import { NavigationProp } from '@react-navigation/native';

import styles from '../assets/styles';
import images from '../constants/images';
import { colors } from '../constants/them';

interface Props {
  navigation: NavigationProp<any>
}

const LanuchScreen:React.FC<Props> = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Onboarding');
    }, 500);
  }, []);

  return (
    <View style={[styles.appContainer,{backgroundColor:colors.lightBlue}]}>
        <Image source={images.lunchIcon} style={styles.imgSet}/>
        <View style={styles.bottamLoader}>
          <ActivityIndicator size={'large'} color="blue" />
        </View>
    </View>
  )
}


export default LanuchScreen;