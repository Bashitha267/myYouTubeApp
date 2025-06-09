import { Ionicons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";

const CategoryBar = () => {
  const [activeCate, setActiveCate] = useState("Gaming");
  const [data, setData] = useState([]);
  const [id, setId] = useState("20");
  const [loading, setLoading] = useState(false);

  const categories = [
    
    { id: "20", name: "Gaming" },
    { id: "10", name: "Music" },
    { id: "1", name: "Film & Animation" },
    { id: "17", name: "Sports" },
    { id: "22", name: "People & Blogs" },
    { id: "23", name: "Comedy" },
    { id: "24", name: "Entertainment" },
    { id: "25", name: "News & Politics" },
    { id: "26", name: "Howto & Style" },
    { id: "27", name: "Education" },
    { id: "28", name: "Science & Technology" },
    { id: "Live", name: "Live" },
  ];

  const apiKey = "AIzaSyAMTi8j6aQVt2Eoaegdys4HGQCC4i46e1c"; // ⚠️ Replace with your own key when pushing to production

  useEffect(() => {
    const getYtData = async () => {
      setLoading(true);
      try {
        // 1. Get video IDs
        const searchRes = await fetch(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&videoCategoryId=${id}&maxResults=10&key=${apiKey}`
        );
        const searchData = await searchRes.json();
        const videos = searchData.items || [];

        const videoIds = videos
          .map((v) => (typeof v.id === "object" ? v.id.videoId : v.id))
          .filter(Boolean);

        // 2. Get stats for video IDs
        const statsRes = await fetch(
          `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${videoIds.join(
            ","
          )}&key=${apiKey}`
        );
        const statsData = await statsRes.json();
        setData(statsData.items || []);
      } catch (err) {
        console.log("Error fetching data:", err);
      } finally {
        setLoading(false);
      }
    };

    getYtData();
  }, [id]);

  return (
    <View className="mt-4">
      {/* Categories */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="flex flex-row"
      >
        <View className="bg-gray-700 px-3 py-1 mx-3 items-center justify-center rounded-xl mr-4 ml-2">
          <Ionicons name="compass-outline" color="white" size={28} />
        </View>
        <View className="flex flex-row">
          {categories.map((item) => (
            <TouchableOpacity
              key={item.id}
              onPress={() => {
                setActiveCate(item.name);
                setId(item.id);
              }}
              className={`${
                activeCate === item.name ? "bg-white" : "bg-gray-700"
              } px-3 py-2 mx-3 items-center justify-center rounded-xl`}
            >
              <Text
                className={`${
                  activeCate === item.name ? "text-black" : "text-white"
                }`}
              >
                {item.name}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      {/* Videos */}
      {loading ? (
        <ActivityIndicator size="large" color="red" className="my-4" />
      ) : (
        <ScrollView className="mt-4 px-2">
          {data.map((item) => {
            const videoId =
              typeof item.id === "object" ? item.id.videoId : item.id;

            return (
              <View key={videoId} className="mb-6 flex flex-col">
                <YoutubePlayer height={230} play={false} videoId={videoId} />
                <View className="flex-row mt-2 gap-3 items-start">
                  {/* Placeholder for Channel Logo */}
                  <View className="w-10 h-10 rounded-full bg-gray-600" />

                  <View className="flex-1">
                    <Text className="text-white text-base font-semibold">
                      {item.snippet.title}
                    </Text>
                    <Text className="text-gray-300 text-sm mt-1">
                      {item.snippet.channelTitle} ·{" "}
                      {Number(item.statistics?.viewCount || 0).toLocaleString()}{" "}
                      views · {formatTimeSince(item.snippet.publishedAt)}
                    </Text>
                  </View>
                </View>
              </View>
            );
          })}
        </ScrollView>
      )}
    </View>
  );
};

const formatTimeSince = (dateStr) => {
  const seconds = Math.floor((new Date() - new Date(dateStr)) / 1000);
  const intervals = [
    { label: "year", sec: 31536000 },
    { label: "month", sec: 2592000 },
    { label: "day", sec: 86400 },
    { label: "hour", sec: 3600 },
    { label: "minute", sec: 60 },
    { label: "second", sec: 1 },
  ];
  for (const i of intervals) {
    const count = Math.floor(seconds / i.sec);
    if (count >= 1) return `${count} ${i.label}${count > 1 ? "s" : ""} ago`;
  }
  return "Just now";
};

const styles = StyleSheet.create({});

export default CategoryBar;
