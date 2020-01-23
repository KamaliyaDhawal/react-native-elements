import React, { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { ButtonGroup } from 'react-native-elements';

export default function ElButtonGroup() {
    const buttons = ['1', '2', '3', '4'];
    const disableButton = ['4','5','6','7']
    const [selectedIndex, setIndex] = useState(2)
    return(
        <View style={style.container}>
            <ButtonGroup
                onPress={
                    (value) => {
                        setIndex(value);
                        Alert.alert('On Press', `You press button number ${value+1}`);
                    }
                }
                selectedButtonStyle={{
                    backgroundColor: '#333',
                    color: '#fff'
                }}
                selectedIndex={selectedIndex}
                buttons={buttons}
            />
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20
    },
    highlightText: {
        marginTop: 30,
        color: 'gray',
        fontSize: 24,
        fontWeight: 'bold'
    }
})