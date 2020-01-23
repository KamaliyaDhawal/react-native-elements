import React from 'react';
import { Button } from 'react-native-elements';
import { StyleSheet, Alert, Text, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function ElButton(){
    return (
        <View style={style.container}>
            <Text style={style.highlightText}>Icons</Text>
            <Button
                title="Icon Right"
                buttonStyle={{
                    backgroundColor: '#333'
                }}
                icon={
                    <MaterialIcons
                        name="menu"
                        size={25}
                        color="white"
                    />
                }
                iconRight
                onPress={
                    (value) => {
                        Alert.alert('On Press', 'Button on press event')
                    }
                }
                onPressOut={
                    (value) => {
                        Alert.alert('On Press Out', 'Button on press out event')
                    }
                }
            />
            <Button
                title="Icon Left"
                buttonStyle={{
                    backgroundColor: '#333',
                    marginTop: 10
                }}
                icon={
                    <MaterialIcons
                        name="menu"
                        size={25}
                        color="white"
                    />
                }
                onPress={
                    (value) => {
                        Alert.alert('On Press', 'Button on press event')
                    }
                }
                onPressOut={
                    (value) => {
                        Alert.alert('On Press Out', 'Button on press out event')
                    }
                }
            />

            <Text style={style.highlightText}>Clear Button</Text>
            <Button
                title="Clear Button"
                buttonStyle={{
                    width: '100%',
                    padding: 12,
                    borderColor: '#333'
                }}
                titleStyle={{
                    width: '100%',
                    color: '#333'
                }}
                onPress={
                    (value) => {
                        Alert.alert('On Press', 'Button on press event')
                    }
                }
                onPressOut={
                    (value) => {
                        Alert.alert('On Press Out', 'Button on press out event')
                    }
                }
                type="clear"
            />

            <Text style={style.highlightText}>Normal</Text>
            <Button
                title="Solid Button"
                buttonStyle={{
                    backgroundColor: '#111',
                    width: '100%',
                    padding: 12,
                }}
                titleStyle={{
                    width: '100%'
                }}
                onPress={
                    (value) => {
                        Alert.alert('On Press', 'Button on press event')
                    }
                }
                onPressOut={
                    (value) => {
                        Alert.alert('On Press Out', 'Button on press out event')
                    }
                }
            />

            <Text style={style.highlightText}>Outline Button</Text>
            <Button
                title="Outline Button"
                buttonStyle={{
                    width: '100%',
                    padding: 12,
                    borderColor: '#333',
                    marginBottom: 30
                }}
                titleStyle={{
                    width: '100%',
                    color: '#333'
                }}
                onPress={
                    (value) => {
                        Alert.alert('On Press', 'Button on press event')
                    }
                }
                onPressOut={
                    (value) => {
                        Alert.alert('On Press Out', 'Button on press out event')
                    }
                }
                type="outline"
            />

            <Text style={style.highlightText}>Loading</Text>
            <Button
                buttonStyle= {{
                    backgroundColor: '#333',
                }}
                loadingStyle={{
                    width: '100%',
                    color: '#333',
                    padding: 0
                }}
                loading
            />

            <Text style={style.highlightText}>Disable</Text>
            <Button
                title="Disabled"
                disabledStyle={{
                    width: '100%',
                    backgroundColor: '#333',
                }}
                disabledTitleStyle={{
                    width: '100%',
                    color: 'white'
                }}
                onPress={
                    (value) => {
                        Alert.alert('On Press', 'Button on press event')
                    }
                }
                onPressOut={
                    (value) => {
                        Alert.alert('On Press Out', 'Button on press out event')
                    }
                }
                disabled
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