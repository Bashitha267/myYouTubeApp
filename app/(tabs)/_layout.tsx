import { FontAwesome, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { Tabs } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
const Layout = () => {
    return (
        <Tabs screenOptions={{
            tabBarActiveTintColor:"white",
            tabBarStyle:{
                backgroundColor:"black",
                 borderTopWidth: 1,    
      elevation: 0,        
      borderColor:"gray"    
            }
        }}>
            <Tabs.Screen name='index' options={{
                headerShown:false,
                tabBarLabel:"Home",
               
                tabBarIcon:({size,color})=>(
                   < FontAwesome name='home' size={size} color={color}/>
                )
            }}></Tabs.Screen>
 <Tabs.Screen name='Shorts' options={{
                headerShown:false,
                 tabBarIcon:({size,color})=>(
                   < MaterialIcons name='play-circle-filled' size={size} color={color}/>
                )
            }}></Tabs.Screen>
             <Tabs.Screen name='Plus' options={{
                headerShown:false,
                tabBarLabel:"",
                 tabBarIcon:({size,color})=>(
                    <View className=" rounded-full items-center justify-center mt-2 " style={{
                        width:36,
                        height:36,
                        backgroundColor:color
                    }}><Text className="text-4xl text-white">
                   +
                        </Text></View>
                )
            }}></Tabs.Screen>
             <Tabs.Screen name='Subs' options={{
                headerShown:false,
                tabBarLabel:"Subscripions",
                 tabBarIcon:({size,color})=>(
                   <Ionicons name="videocam" size={size} color={color}></Ionicons>
                )
            }}></Tabs.Screen>
             <Tabs.Screen name='You' options={{
                headerShown:false,
                
                 tabBarIcon:({size,color})=>(
                   < FontAwesome name='folder' size={size} color={color}/>
                )
            }}></Tabs.Screen> 


        </Tabs>
    );
}

const styles = StyleSheet.create({})

export default Layout;
