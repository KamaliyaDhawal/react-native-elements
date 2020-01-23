import React from 'react';
import { Avatar } from 'react-native-elements';
import { StyleSheet, Alert, Text, View } from 'react-native';

export default function ElAvtar(){
    return (
        <View style={style.container}>
            <Text style={style.highlightText}>Image As Avatar</Text>
            <Avatar
                rounded={true} // Boolean
                source={
                    {
                        uri:
                        'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                    }
                }
                containerStyle={style.imageContainer}
                size={150}
                onPress={
                    (value) => {
                        Alert.alert('On Press', 'On press press event avatar');
                    }
                }
                onLongPress={
                    (value) => {
                        Alert.alert('On Long Press', 'On long press event avatar');
                    }
                }
                showEditButton
                onEditPress={
                    (value) => {
                        Alert.alert('On Edit Press', 'On edit press event avatar');
                    }
                }
            />


            <Text style={style.highlightText}>Title As Avatar</Text>
            <Avatar
                rounded={true} // Boolean
                title = "MD"
                containerStyle={style.imageContainer}
                size={150}
                onPress={
                    (value) => {
                        Alert.alert('On Press', 'On press press event avatar');
                    }
                }
                onLongPress={
                    (value) => {
                        Alert.alert('On Long Press', 'On long press event avatar');
                    }
                }
                showEditButton
                onEditPress={
                    (value) => {
                        Alert.alert('On Edit Press', 'On edit press event avatar');
                    }
                }
            />

            <Text style={style.highlightText}>Icon As Avatar</Text>
            <Avatar
                rounded={true} // Boolean
                icon = {{
                    name: 'home',
                    color: '#333',
                    size: 80
                }
                }
                containerStyle={style.imageContainer}
                size={150}
                onPress={
                    (value) => {
                        Alert.alert('On Press', 'On press press event avatar');
                    }
                }
                onLongPress={
                    (value) => {
                        Alert.alert('On Long Press', 'On long press event avatar');
                    }
                }
                showEditButton
                onEditPress={
                    (value) => {
                        Alert.alert('On Edit Press', 'On edit press event avatar');
                    }
                }
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
    imageContainer: {
        marginTop: 8,
    },
    highlightText: {
        marginTop: 40,
        color: 'gray',
        fontSize: 24,
        fontWeight: 'bold'
    }
})