import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const YouTopBar = () => {
    return (
        <View className=' flex-row justify-end mr-2'>
           <View className='mx-2'> 
        <MaterialIcons name='cast' color="white" size={24}/>
           </View>
             <View className='mx-2 ' style={{
                width:36
             }}> 
        <Text><FontAwesome name='bell-o'  color="white" size={24}/></Text>
         <View className='bg-red-600 rounded-xl px-2 absolute top-0  right-0' style={{
                                width:31,
                               
                            }}><Text className='text-white ' style={{
                                fontSize:13
                            }}>9+</Text></View>
           </View>
             <View className='mx-2'> 
        <MaterialIcons name='search' color="white" size={24}/>
           </View>
             <View className='mx-2'> 
        <MaterialIcons name='settings' color="white" size={24}/>
           </View>
        </View>
    );
}

const styles = StyleSheet.create({})

export default YouTopBar;
