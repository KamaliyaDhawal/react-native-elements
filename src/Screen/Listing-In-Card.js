import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Card, Image } from 'react-native-elements';

export default function ListingInCard() {
    const users = [
        {
           name: 'Dhaval',
           avatar: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png'
        },
        {
            name: 'Dhaval',
            avatar: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png'
         },
         {
            name: 'Dhaval',
            avatar: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png'
         },
         {
            name: 'Dhaval',
            avatar: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png'
         },
         {
            name: 'Dhaval',
            avatar: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png'
         },
         {
            name: 'Dhaval',
            avatar: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png'
         },
         {
            name: 'Dhaval',
            avatar: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png'
         },
         {
            name: 'Dhaval',
            avatar: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png'
         },
         {
            name: 'Dhaval',
            avatar: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png'
         },
         {
            name: 'Dhaval',
            avatar: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png'
         },
    ]
    return(
    <View style={style.container}>
        <Card 
            title="Listing With Card"
            containerStyle= {{
                width: '100%',
            }}
        >
             {
                users.map((u, i) => {
                return (
                     <View key={i} style={style.user}>
                     <Image
                           source={{ uri: u.avatar }}
                           style={{ width: 25, height: 25, radius: '50%' }}
                           resizeMode="cover"
                     />
                     <Text style={style.name}>{u.name}</Text>
                     </View>
                );
                })
            }
        </Card>
    </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    user: {
        flexDirection: 'row',
        alignItems: 'center',
      //   marginTop: 15,
        padding: 15,
        borderBottomColor: 'gray',
        borderBottomWidth: 1
    },
    name: {
        marginLeft: 20,
        color: 'gray',
        fontSize: 18,

    }
})