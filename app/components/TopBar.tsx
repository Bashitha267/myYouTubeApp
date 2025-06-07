import { Anton_400Regular, useFonts } from '@expo-google-fonts/anton';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import youtubeLogo from '../../assets/ytfinal.png';
const screenWidth = Dimensions.get('window').width;
const TopBar = () => {
    const logoWidth = screenWidth * 0.33;
const logoHeight = logoWidth / 4;
  const [fontsLoaded] = useFonts({ Anton_400Regular });
  
  if (!fontsLoaded) {
    return null;
  }
    return (
        <View className='flex-row justify-between pl-2'>
            {/* logo */}
            <View className='flex-row items-center '>
        <Image source={youtubeLogo} style={{
            width:30,
            height:30
        }} ></Image>
        <Text style={{ fontFamily: 'Anton_400Regular', fontSize: 20, color: 'white' }}>YouTube</Text>
            </View>
            {/* notification /icons */}
            <View className='flex-row pr-2'>
                <View className='px-3'><MaterialIcons name='cast' size={28} color="white"></MaterialIcons></View>
                <View className='px-3'>
                    <FontAwesome name="bell-o" color="white" size={28} ></FontAwesome>
                    <View className='bg-red-600 rounded-xl px-2 absolute top-0 right-0 ' style={{
                        width:32
                    }}><Text className='text-white text-sm'>9+</Text></View>
                    
                    
                    </View>
                <View className='px-3 '><MaterialIcons name='search' color="white" size={28}></MaterialIcons></View>
            </View>
         
        </View>
    );
}

const styles = StyleSheet.create({})

export default TopBar;
