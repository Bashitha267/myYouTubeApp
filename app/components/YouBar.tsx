import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
const YouBar = () => {
    const list=[
      {
        name:"Switch Account",
        icon:"cached"
      },
       {
        name:"Google Account",
        icon:"person"
      },
       {
        name:"Turn on Incognito",
        icon:"visibility-off"
      },
       {
        name:"Share Channel",
        icon:"share"
      },
    ]
    return (
        <View className='mt-6'>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false} className='flex-row mx-3'>
                {
                    list.map((item)=>(
                        <View className='flex-row mx-3' key={item.name}>
                            <View className='flex-row items-center px-3 py-1 rounded-xl bg-gray-800' >
                                <MaterialIcons name={item.icon} size={24} color="white"/>
                                <Text className='text-white ml-1'>{item.name}</Text>
                            </View>
                        </View>
                    ))
                }
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({})

export default YouBar;
