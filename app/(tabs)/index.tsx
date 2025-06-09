import { Platform, SafeAreaView, StatusBar, StyleSheet } from "react-native";
import CategoryBar from "../components/CategoryBar";
import TopBar from "../components/TopBar";

export default function Page() {
 
  return (
   <SafeAreaView style={styles.safeArea} className="bg-black">
    <TopBar/>
    <CategoryBar/>
   </SafeAreaView>
  );
}

const styles = StyleSheet.create({
   safeArea: {
    flex: 1,
    paddingTop: Platform.OS==="android" ? StatusBar.currentHeight :0
  },
  
});
