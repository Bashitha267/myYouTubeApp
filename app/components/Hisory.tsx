import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

const Hisory = () => {
    const videos = [
  {
    title: "Learn React in 15 Minutes",
    channel: "CodeWithSam",
    color: "#61dafb" // React blue
  },
  {
    title: "10-Minute Morning Yoga Routine",
    channel: "YogaWithLuna",
    color: "#f5a623" // Calm orange
  },
  {
    title: "AI Takes Over Chess | Stockfish vs LLM",
    channel: "NeuralPlay",
    color: "#4b0082" // Deep purple
  },
  {
    title: "Street Food Tour in Bangkok 🇹🇭",
    channel: "GlobalGrub",
    color: "#ff6347" // Tomato red
  },
  {
    title: "Build a Portfolio Website with HTML, CSS, JS",
    channel: "DevSimplified",
    color: "#20b2aa" // Teal
  },
  {
    title: "How to Ace Your Next Interview",
    channel: "CareerCraft",
    color: "#ffcc00" // Bright yellow
  },
  {
    title: "Top 10 Anime Fights of All Time",
    channel: "OtakuPower",
    color: "#e91e63" // Pink
  },
  {
    title: "Solo Piano for Deep Focus",
    channel: "Calm Keys",
    color: "#87ceeb" // Soft sky blue
  }
];

    return (
        <View className=' mt-8'>
            <View className='flex-row justify-between mx-4'>
                <Text className='text-white font-bold' style={{
                    fontSize:20
                }}>History</Text>
                <Text className='text-white bg-gray-900 px-3 py-1 text-md rounded-full border-2 border-white'>View All</Text>

            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false} className='flex '>
                {
                    videos.map((item)=>(
                        <View className='mt-2' key={item.title}>
                            <View className='mx-3 mt-2 flex-col rounded-2xl' style={{
                            height:120,
                            width:170,
                            backgroundColor:item.color
                        }}
                        >
                           
                        </View>
                         <Text className='text-white mt-3 mx-3' style={{
                            width:100
                         }}>{item.title.length>21 ? item.title.slice(0,21)+"..." : item.title}</Text>
                         <Text className='text-gray-400 mx-3 mt-1 '>{item.channel}</Text>
                        </View>
                        
                    ))
                }
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({})

export default Hisory;
