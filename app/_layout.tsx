import { Stack } from 'expo-router';
import React from 'react';
import { StyleSheet } from 'react-native';
import "../global.css";
const RootLayout = () => {
    return (
        <Stack>
            <Stack.Screen name='(tabs)' options={{
                headerShown:false
            }}></Stack.Screen>
        </Stack>
    );
}

const styles = StyleSheet.create({})

export default RootLayout;
