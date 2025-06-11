import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import {
    Platform,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import Hisory from "../components/Hisory";
import PlayList from "../components/PlayList";
import YouBar from "../components/YouBar";
import YouTopBar from "../components/YouTopBar";
const You = () => {
  const router = useRouter();
  return (
    <SafeAreaView className="bg-black  ">
      <ScrollView>
        <YouTopBar />
        <View className="flex-row mr-6 items-center mt-5 mx-2">
          <View
            className="rounded-full mt-4 mr-3"
            style={{
              backgroundColor: "#8AC6D1",
              width: 100,
              height: 100,
            }}
          ></View>
          <View className="flex-col ml-3">
            <View className="mt-4">
              <Text
                className="text-white font-bold "
                style={{
                  fontSize: 35,
                }}
              >
                Channel Name
              </Text>
            </View>
            <View className="ml-1 flex-row mt-1">
              <View className="mr-4">
                <Text className="text-white">@UserName</Text>
              </View>
              <View>
                <Text className="text-white">View Channel</Text>
              </View>
            </View>
          </View>
        </View>
        <YouBar />
        <Hisory />
        <PlayList />
        <View className="flex flex-col mt-12">
          <TouchableOpacity
            className="flex flex-row "
            onPress={() => router.push("components/YourVideos")}
          >
            <MaterialIcons
              name="video-library"
              size={24}
              color="white"
              className="ml-4"
            ></MaterialIcons>
            <Text className="text-white text-2xl ml-5 mb-4">Your Videos</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="flex flex-row "
            onPress={() => router.push("components/Downloads")}
          >
            <MaterialIcons
              name="download"
              size={24}
              color="white"
              className="ml-4"
            ></MaterialIcons>
            <Text className="text-white text-2xl ml-5 mb-4">Downloads</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="flex flex-row "
            onPress={() => router.push("components/Badges")}
          >
            <MaterialIcons
              name="stars"
              size={24}
              color="white"
              className="ml-4"
            ></MaterialIcons>
            <Text className="text-white text-2xl ml-5  mb-4">Badges</Text>
          </TouchableOpacity>
          <View className="border-b-2 border-gray-700  "></View>
          <TouchableOpacity
            className="flex flex-row mt-4"
            onPress={() => router.push("components/YourMoivies")}
          >
            <MaterialIcons
              name="videocam"
              size={24}
              color="white"
              className="ml-4"
            ></MaterialIcons>
            <Text className="text-white text-2xl ml-5 mb-4">Your Movies</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="flex flex-row "
            onPress={() => router.push("components/GetYTPremium")}
          >
            <MaterialIcons
              name="video-library"
              size={24}
              color="white"
              className="ml-4"
            ></MaterialIcons>
            <Text className="text-white text-2xl ml-5 mb-4">Get Youtube Premium</Text>
          </TouchableOpacity>
          <View className="border-b-2 border-gray-700"></View>
          <TouchableOpacity
            className="flex flex-row mt-4"
            onPress={() => router.push("components/TimeWatched")}
          >
            <MaterialIcons
              name="bar-chart"
              size={24}
              color="white"
              className="ml-4"
            ></MaterialIcons>
            <Text className="text-white text-2xl ml-5 mb-4">Time Watched</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="flex flex-row "
            onPress={() => router.push("components/HelpAndFeedback")}
          >
            <MaterialIcons
              name="question-mark"
              size={24}
              color="white"
              className="ml-4"
            ></MaterialIcons>
            <Text className="text-white text-2xl ml-5 mb-4">Help And FeedBack</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

export default You;
