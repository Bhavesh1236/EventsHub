import { Text, View, Alert,Platform, ToastAndroid } from 'react-native'
import React, { Component } from 'react'

export default class AppAlert{
    static show(messageType:string,message:string){
        if(Platform.OS === 'android')
            ToastAndroid(messageType,message);
        else
            Alert(messageType,message);
    }
}