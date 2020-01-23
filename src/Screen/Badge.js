import React from 'react';
import { StyleSheet, View, Text, Alert } from 'react-native';
import { Badge, Avatar, withBadge, Icon } from 'react-native-elements';

export default function ElBadge() {
    const BadgedIcon = withBadge(3)(Icon)
    return(
        <View style={style.container}>
            <Text style={style.highlightText}>Normal</Text>
            <Badge
                value={<Text style={style.badgeText}>99+</Text>}
                // value='Hello'
                status="success"
                badgeStyle={style.badgeContainer}
                containerStyle={style.containerStyle}
                textStyle="red"
                onPress= {
                    (value) => {
                        console.log(value);
                        Alert.alert('On Press', 'On press event badge');
                    }
                }
            />

            <Text  style={style.highlightText}>Mini</Text>
            <Badge status="error"></Badge>
            <Badge status="primary"></Badge>
            <Badge status="success"></Badge>
            <Badge status="warning"></Badge>


            <Text  style={style.highlightText}>With Avatar</Text>
            <Avatar
                rounded
                source={{
                    uri: 'https://randomuser.me/api/portraits/men/41.jpg',
                }}
                size="large"
            />
            <Badge
                status="success"
                containerStyle={{ position: 'absolute', bottom: 455, right: "47%" }}
            />

            <Text  style={style.highlightText}>With Icon</Text>
            <BadgedIcon type="ionicon" name="ios-home" left={3} />

            <Text  style={style.highlightText}>Different Size</Text>
            <Badge status="error" badgeStyle={{height: 50,}} width={50}></Badge>
            <Badge status="primary" badgeStyle={{height: 50,}} width={25}></Badge>
            <Badge status="success" badgeStyle={{height: 25,}} width={50}></Badge>
            <Badge status="warning" badgeStyle={{height: 20,}} width={20}></Badge>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        fontSize: 20
    },
    miniContainer: {
        height: 20,
        width: 20
    },
    badgeContainer: {
        padding: 20,
    },
    badgeText: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
        fontStyle: 'italic'
    },
    containerStyle: {
        backgroundColor: '#ededed'
    },
    highlightText: {
        marginTop: 20,
        color: 'gray',
        fontSize: 24,
        fontWeight: 'bold'
    }
})