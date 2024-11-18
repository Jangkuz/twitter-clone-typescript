import { StyleSheet, Image, FlatList } from "react-native";
import TweetComponent from "@/components/Tweet";
import { View } from "@/components/Themed";
import Tweets from "@/assets/data/tweets";
import { TweetType } from "@/type/type";

const tweetData: TweetType[] = Tweets;
export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={Tweets}
        // data={tweetData}
        renderItem={({ item }) => <TweetComponent tweet={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
});
