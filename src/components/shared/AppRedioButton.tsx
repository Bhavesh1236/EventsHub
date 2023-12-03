import React, { useState } from 'react';
import { View, TouchableOpacity, Animated, Easing } from 'react-native';
import styles from '../../assets/styles';
import AppText from './AppText';

const AppRedioButton = () => {
  const [isSelected, setIsSelected] = useState(false);
  const scaleValue = new Animated.Value(isSelected ? 1 : 0.8);

  const handlePress = () => {
    setIsSelected(!isSelected);
    Animated.timing(scaleValue, {
      toValue: isSelected ? 0.8 : 1,
      duration: 200,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start();
  };

  const animatedStyle = {
    transform: [{ scale: scaleValue }],
  };

  return (
    <TouchableOpacity onPress={handlePress} style={{ flexDirection: 'row'}}>
      <Animated.View style={[styles.redio,animatedStyle,]} >
        {isSelected && ( <View style={styles.redioAnimation} /> )}
      </Animated.View>
      <AppText>{isSelected ? 'Selected' : 'Not Selected'}</AppText>
    </TouchableOpacity>
  );
};

export default AppRedioButton;