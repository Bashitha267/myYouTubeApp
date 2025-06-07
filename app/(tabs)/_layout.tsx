import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { Tabs } from 'expo-router';
import React from 'react';
import { StyleSheet } from 'react-native';
const Layout = () => {
    return (
        <Tabs>
            <Tabs.Screen name='index' options={{
                headerShown:false,
               
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
                headerTitle:"add",
                 tabBarIcon:({size,color})=>(
                   < FontAwesome name='plus-circle' size={size} color={color}/>
                )
            }}></Tabs.Screen>
             <Tabs.Screen name='Subs' options={{
                headerShown:false,
                 tabBarIcon:({size,color})=>(
                   < FontAwesome name='bell' size={size} color={color}/>
                )
            }}></Tabs.Screen>
             <Tabs.Screen name='Library' options={{
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
