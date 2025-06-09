import React from 'react';
import { Platform, SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import CategoryBar from '../components/CategoryBar';
import ChannelList from '../components/ChannelList';
import TopBar from '../components/TopBar';

const Subs = () => {
    return (
        <SafeAreaView style={styles.container} className='bg-black flex-1'>
         <TopBar/>   
         <ChannelList/>
         <CategoryBar/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
        paddingTop:Platform.OS==='android'? StatusBar.currentHeight:0
    }
})

export default Subs;
