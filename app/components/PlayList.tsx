import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

const PlayList = () => {
  const videos = [
    {
      title: "Liked Videos",
      channel: "Private",
      color: "#4b0082", // React blue
    },
    {
      title: "Watch Later",
      channel: "Private",
      color: "#ff6347", // Calm orange
    },
  ];

  return (
    <View className=" mt-8">
      <View className="flex-row justify-between mx-4">
        <Text
          className="text-white font-bold"
          style={{
            fontSize: 20,
          }}
        >
          PlayLists
        </Text>
        <View className="flex-row items-center justify-center">
          <Text className="text-white  text-3xl mr-10">+</Text>

          <Text className="text-white bg-gray-900 px-3 py-1 text-md rounded-full border-2 border-white">
            View All
          </Text>
        </View>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        className="flex "
      >
        {videos.map((item) => (
          <View className="mt-2 " key={item.title}>
            <View
              className="mx-3 mt-2 flex-col rounded-2xl"
              style={{
                height: 120,
                width: 170,

                backgroundColor: item.color,
              }}
            ></View>
            {item.title==="Liked Videos" ?(
                <View
              className="absolute  "
              style={{
                top: "50%",
                left: "50%",
                transform: [{ translateX: -25 }, { translateY: -30 }],
              }}
            >
              <Ionicons name="thumbs-up" size={25} color="white"></Ionicons>
            </View>
            ): <View></View>}
             {item.title==="Watch Later" ?(
                <View
              className="absolute  "
              style={{
                top: "50%",
                left: "50%",
                transform: [{ translateX: -25 }, { translateY: -30 }],
              }}
            >
              <Ionicons name="time" size={25} color="white"></Ionicons>
            </View>
            ): <View></View>}
            <Text
              className="text-white mt-3 mx-3"
              style={{
                width: 100,
              }}
            >
              {item.title.length > 21
                ? item.title.slice(0, 21) + "..."
                : item.title}
            </Text>
            <Text className="text-gray-400 mx-3 mt-1 ">{item.channel}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({});

export default PlayList;
