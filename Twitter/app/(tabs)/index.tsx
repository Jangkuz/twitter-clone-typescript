import { StyleSheet, Image } from "react-native";
import Tweet from "@/components/Tweet";
import { View } from "@/components/Themed";
export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Tweet />
      <Tweet />
      <Tweet />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
    flex: 1,
  },
});
