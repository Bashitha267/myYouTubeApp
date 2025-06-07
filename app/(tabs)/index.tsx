import { Platform, SafeAreaView, StatusBar, StyleSheet } from "react-native";
import TopBar from "../components/TopBar";

export default function Page() {
 
  return (
   <SafeAreaView style={styles.safeArea} className="bg-black">
    <TopBar/>
   </SafeAreaView>
  );
}

const styles = StyleSheet.create({
   safeArea: {
    flex: 1,
    paddingTop: Platform.OS==="android" ? StatusBar.currentHeight :0
  },
  container: {
    flex: 1,
    padding: 16,
  },
});
