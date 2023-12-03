import React ,{ useEffect }from 'react';
import { View, Text, Image, ActivityIndicator, Platform } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import styles from '../assets/styles';
import images from '../constants/images';
import { colors } from '../constants/them';
import { AppView } from '../components';

interface Props {
  navigation: NavigationProp<any>
}

const LanuchScreen:React.FC<Props> = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.reset({routes: [{ name: 'Onboarding' }],})
    }, 5000);
  }, []);

  return (
    <AppView style={[styles.appContainer]}>
        <Image source={images.lunchIcon} style={styles.imgSet}/>
        <View style={styles.bottamLoader}>
          <ActivityIndicator size={'large'} color="blue" />
        </View>
    </AppView>
  )
}


export default LanuchScreen;