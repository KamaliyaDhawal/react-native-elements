import React from 'react';
import { View, StyleSheet, Text, Image, ListItem } from 'react-native';
import { Card, Button, } from 'react-native-elements';

export default function ElCard(){
    return(
        <View style={style.container}>
            <Card
                title={
                    <View>
                      <Text style={{color: 'white', fontSize:24, margin: 20 }}>Card</Text>
                    </View>
                }
                containerStyle={{
                    backgroundColor: "#111",
                    width: '100%',
                }}
                titleStyle={{
                    color: '#fff'
                }}
                image={require('../../assets/images/128.jpg')}
                featuredTitle='Title'
                featuredTitleStyle={{
                    position:'absolute',
                    top: 0,
                    left: 10,
                    fontSize: 40
                }}
                featuredSubtitle='Sub Title'
                dividerStyle={{
                    backgroundColor: 'pink',
                    borderColor: 'red',
                }}
            >
            <Text style={{marginBottom: 10, color:'white'}}>
                The idea with React Native Elements is more about component structure than actual design.
            </Text>
            </Card>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20
    }
})