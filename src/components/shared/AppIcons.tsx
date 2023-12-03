import { View, Text } from 'react-native'
import React from 'react'
import { Entypo, Ionicons, AntDesign, EvilIcons, Feather, FontAwesome,Fontisto, Foundation, MaterialCommunityIcons, MaterialIcons, Octicons, SimpleLineIcons, Zocial } from '@expo/vector-icons';

interface props {
    name : string,
    color : string,
    size : number,
    type : "Entypo"| "Ionicons" | "AntDesign"| "EvilIcons"| "Feather"| "FontAwesome"| "Fontisto"| "Foundation"| "MaterialIcons"| "MaterialCommunityIcons" ,
}

const component = { Entypo, Ionicons, AntDesign, EvilIcons, Feather, FontAwesome, Fontisto, Foundation, MaterialCommunityIcons, MaterialIcons, Octicons, SimpleLineIcons, Zocial }

const AppIcons : React.FC<props> = ({ type, name, color, size}) => {
    const IconComponents = component[type];
    return <IconComponents name={name} color={color} size={size} />
}

export default AppIcons