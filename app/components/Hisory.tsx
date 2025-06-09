import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Hisory = () => {
    return (
        <View className=' mt-8'>
            <View className='flex-row justify-between mx-4'>
                <Text className='text-white font-bold' style={{
                    fontSize:20
                }}>History</Text>
                <Text className='text-white bg-gray-900 px-3 py-1 text-md rounded-full border-2 border-white'>View All</Text>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({})

export default Hisory;
