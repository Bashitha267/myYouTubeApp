import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

const ChannelList = () => {
 const lightColors = [
  "#A8DADC", // Light Blue
  "#FFE066", // Soft Yellow
  "#FF6F91", // Soft Pink
  "#FF9F1C", // Warm Orange
  "#8AC6D1", // Pale Cyan
  "#F7B7A3", // Light Coral
  "#C3AED6", // Light Purple
  "#B5EAEA", // Pale Aqua
  "#FFBCBC", // Pastel Red
  "#D0F4DE"  // Light Mint
];

const channels = [
  {
    name: "TechWithTim",
    icon: "https://yt3.googleusercontent.com/ytc/AGIKgqODNnGmQAiRU3JFF4AOl1URfXIKaLTvV2GjDbIX=s88-c-k-c0x00ffffff-no-rj",
    color: lightColors[0],
  },
  {
    name: "MrBeast",
    icon: "https://yt3.googleusercontent.com/ytc/AGIKgqNFqog8Tnd9qM_Uo-l88ZxJGb0EERzsRBW9GXTX=s88-c-k-c0x00ffffff-no-rj",
    color: lightColors[1],
  },
  {
    name: "Marques Brownlee",
    icon: "https://yt3.googleusercontent.com/ytc/AGIKgqMH9ZrcJ_y7kMzU3AO0BB-FIXv3MXYKehCHAjyP=s88-c-k-c0x00ffffff-no-rj",
    color: lightColors[2],
  },
  {
    name: "NikkieTutorials",
    icon: "https://yt3.googleusercontent.com/ytc/AGIKgqNRjDdAlGv5v7EhKKRt5OwUSjl1gCJcsyAoxtDJ=s88-c-k-c0x00ffffff-no-rj",
    color: lightColors[3],
  },
  {
    name: "Code Bullet",
    icon: "https://yt3.googleusercontent.com/ytc/AGIKgqOESIQy9xlQbeYvPYw_lFDaFx6gK1LgMErhdciq=s88-c-k-c0x00ffffff-no-rj",
    color: lightColors[4],
  },
  {
    name: "SmarterEveryDay",
    icon: "https://yt3.googleusercontent.com/ytc/AGIKgqPZlj8zqkx-j39kVxR0CEwNGRJUyNu5NFCMBiYx=s88-c-k-c0x00ffffff-no-rj",
    color: lightColors[5],
  },
  {
    name: "The Coding Train",
    icon: "https://yt3.googleusercontent.com/ytc/AGIKgqOgCF5Rw0nQ9vjtdZBGCaXGiI1ExMmu5pCDM9DY=s88-c-k-c0x00ffffff-no-rj",
    color: lightColors[6],
  },
  {
    name: "Mark Rober",
    icon: "https://yt3.googleusercontent.com/ytc/AGIKgqM8V7e0W-xEvYcFtDpafwprfnakY0qRTGO7YPqI=s88-c-k-c0x00ffffff-no-rj",
    color: lightColors[7],
  },
  {
    name: "Veritasium",
    icon: "https://yt3.googleusercontent.com/ytc/AGIKgqNTSqz9VxW4hWyvUuFcz9Uog4NlHY0_Ua9PRA8G=s88-c-k-c0x00ffffff-no-rj",
    color: lightColors[8],
  },
  {
    name: "Kurzgesagt – In a Nutshell",
    icon: "https://yt3.googleusercontent.com/ytc/AGIKgqNf7Ml2kUpwnxKd1jGv9cNZ02x1OmqLDouA4xfK=s88-c-k-c0x00ffffff-no-rj",
    color: lightColors[9],
  }
];

    return (
        <View className='mt-3'>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
                {channels.map((item)=>(
                    <View className='flex-col mr-6 items-center' key={item.name} >
                        <View className=' flex-row bg-white rounded-full ' style={{
                            width:60,
                            height:60,
                            backgroundColor:item.color
                        }}><Image  source={{uri:`${item.icon}`}} style={{
                            height:100,
                            width:100
                        }}></Image></View>
                        <View className='mt-2 items-center'><Text className='text-white'> {item.name}</Text></View>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({})

export default ChannelList;
