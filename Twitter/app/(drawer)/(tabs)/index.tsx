import {
  StyleSheet,
  Image,
  FlatList,
  Pressable,
  Text,
  SafeAreaView,
} from "react-native";
import TweetComponent from "@/components/Tweet";
import { View } from "@/components/Themed";
import Tweets from "@/assets/data/tweets";
import { TweetType } from "@/type/type";
import NewTweetButton from "@/components/NewTweetButton";

const tweetData: TweetType[] = Tweets;
export default function TabOneScreen() {
  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flexDirection: "row", flex: 1 }}>
          {/*<View style={{maxWidth: "25%", flex: 1}}>*/}
          {/*<Text style={{marginLeft: "auto"}}>Nav</Text>*/}
          {/*</View>*/}
          <View style={styles.homeFeedContainer}>
            <FlatList
              data={Tweets}
              // data={tweetData}
              renderItem={({ item }) => <TweetComponent tweet={item} />}
              keyExtractor={(item) => item.id}
            />
            <NewTweetButton />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  homeFeedContainer: {
    backgroundColor: "red",
    flex: 1,
    maxWidth: 600,
    position: "relative",
  },
});
