import { StyleSheet, Image, FlatList, Pressable } from "react-native";
import TweetComponent from "@/components/Tweet";
import { View } from "@/components/Themed";
import Tweets from "@/assets/data/tweets";
import { TweetType } from "@/type/type";
import NewTweetButton from "@/components/NewTweetButton";

const tweetData: TweetType[] = Tweets;
export default function TabOneScreen() {
  return (
    <>
        <View style={styles.homeFeedContainer}>
          <FlatList
            data={Tweets}
            // data={tweetData}
            renderItem={({ item }) => <TweetComponent tweet={item} />}
            keyExtractor={(item) => item.id}
          />
          <NewTweetButton />
        </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  homeFeedContainer: {
    backgroundColor: "red",
    flex: 1,
    maxWidth: 600,
    position: "relative",
  },
});
