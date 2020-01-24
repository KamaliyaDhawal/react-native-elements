import React, { useState } from 'react';
import { View, StyleSheet, Text, ScrollView, Alert } from 'react-native';
import { CheckBox } from 'react-native-elements';

export default function ElCheckBox(){
    const [checked, setChecked] = useState(false);
    return(
        <View style={style.container}>
            <ScrollView>
            <Text style={style.highlightText}>CheckBox With Direction</Text>
            <CheckBox
                title="Left"
                left={true} //default
                checked={checked}
                onPress={(value)=> {setChecked(!checked)}}
                containerStyle={{
                    width: '100%',
                }}
            />
            <CheckBox
                title="Center"
                center={true}
                checked={checked}
                onPress={(value)=> {setChecked(!checked)}}
                containerStyle={{
                    width: '100%',
                }}
            />
            <CheckBox
                title="Right"
                right={true}
                checked={checked}
                onPress={(value)=> {setChecked(!checked)}}
                containerStyle={{
                    width: '100%',
                }}
            />

            <Text style={style.highlightText}>CheckBox With Icon Direction</Text>
            <CheckBox
                title="Right"
                left={true} //default
                checked={checked}
                onPress={(value)=> {setChecked(!checked)}}
                containerStyle={{
                    width: '100%',
                }}
                iconRight={true}
            />

            <Text style={style.highlightText}>CheckBox With Different Icon</Text>
            <CheckBox
                title="Icon"
                checked={checked}
                onPress={(value)=> {setChecked(!checked)}}
                containerStyle={{
                    width: '100%',
                }}
                checkedIcon='dot-circle-o'
                uncheckedIcon='circle-o'
            />

            <CheckBox
                center
                title='Click Here to Remove This Item'
                iconRight
                iconType='material'
                checkedIcon='clear'
                uncheckedIcon='close'
                checkedColor='red'
                checked={checked}
                containerStyle={{
                    width: '100%',
                }}
                textStyle={{
                    color: 'red'
                }}
                onIconPress={() => {
                    Alert.alert('On Icon Press', 'On icon press event')
                }}
            />
            </ScrollView>
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 24
    },
    highlightText: {
        marginTop: 40,
        color: 'gray',
        fontSize: 24,
        fontWeight: 'bold'
    },
    checkBoxGroup: {
        flexDirection: 'row'
    }
})