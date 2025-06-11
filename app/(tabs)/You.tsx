import React from 'react';
import { Platform, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import Hisory from '../components/Hisory';
import PlayList from '../components/PlayList';
import YouBar from '../components/YouBar';
import YouTopBar from '../components/YouTopBar';

const You = () => {
    return (
        <SafeAreaView className='bg-black flex-1 '>
            <YouTopBar/>
            <View className='flex-row mr-6 items-center mt-5 mx-2'>
              <View className='rounded-full mt-4 mr-3' style={{
                backgroundColor:"#8AC6D1",
               width:100,
               height:100
              }}></View>  
              <View className='flex-col ml-3'>
                <View className='mt-4'><Text className='text-white font-bold ' style={{
                    fontSize:35
                }}>Channel Name</Text></View>
                <View className='ml-1 flex-row mt-1'>
                <View className='mr-4'><Text className='text-white'>@UserName</Text></View>
                <View><Text className='text-white'>View Channel</Text></View>
                </View>
                </View>  

            </View>
            <YouBar/>
            <Hisory/>
            <PlayList/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
    paddingTop:Platform.OS==="android" ? StatusBar.currentHeight :0    
    }
})

export default You;
