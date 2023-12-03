import React, { FunctionComponent, useState } from 'react'
import { View, TextInput, ViewStyle, FlatList, TouchableOpacity, Text } from 'react-native'
import styles from '../../assets/styles'
import { PredictionType } from '../../constants/constant'
import AppIcons from './AppIcons'
import { colors, sizes } from '../../constants/them'
import AppView from './AppView'


type SearchBarProps = {
    value: string,
    style ?: ViewStyle | ViewStyle[],
    onChangeText: (text: string) => void,
    predictions: PredictionType[],
    showPredictions: boolean,
    onPredictionTapped: (placeId: string, description: string) => void
}

const AppSearchBarWithAutocomplete: FunctionComponent<SearchBarProps> = ({ value, style, onChangeText, onPredictionTapped, predictions, showPredictions }) => {
    const [inputSize, setInputSize] = useState({ width: 0, height: 0 });
    const passedStyles = Array.isArray(style) ? Object.assign({}, ...style) : style;
    const inputBottomRadius = showPredictions ? {borderBottomLeftRadius: 0, borderBottomRightRadius: 0} : {borderBottomLeftRadius: 20, borderBottomRightRadius: 20}
    const _renderPredictions = (predictions: PredictionType[]) => {
        const { predictionsContainer, predictionRow } = styles;
        const calculatedStyle = { width: inputSize.width };
        return (
            <FlatList
                data={predictions}
                renderItem={({ item, index }) => {
                    return (
                    <TouchableOpacity
                        style={predictionRow}
                        onPress={() => onPredictionTapped(item.place_id, item.description)}
                    >
                        <Text
                        numberOfLines={1}
                        >
                        {item.description}
                        </Text>
                    </TouchableOpacity>
                    )
                }}
                keyExtractor={(item) => item.place_id}
                keyboardShouldPersistTaps='handled'
                style={[predictionsContainer, calculatedStyle]}
            />
        );
    }
    return (
        <AppView style={[styles.containerCenter,{ ...passedStyles }]}>
            <AppIcons type='AntDesign' name='left' color={colors.appBule2} size={sizes.icon} />
            <TextInput
                style={[styles.inputStyle ,inputBottomRadius]}
                placeholder='Find for food or restaurant...'
                placeholderTextColor='gray'
                value={value}
                onChangeText={onChangeText}
                returnKeyType='search'
                onLayout={(event) => {
                    const { height, width } = event.nativeEvent.layout
                    setInputSize({ height, width })
                }}
            />
            {/* {showPredictions && _renderPredictions(predictions)} */}
        </AppView>
    )
}

export default AppSearchBarWithAutocomplete