import { SafeAreaView, Text } from "react-native";
import TweetComponent from "@/components/Tweet";
import tweets from "@/assets/data/tweets";
import { useLocalSearchParams } from "expo-router";

export default function TweetDetail() {
  const { id } = useLocalSearchParams();
  console.warn(id);
  const tweet = tweets.find((t) => id === t.id);

  if (!tweet) {
    return <Text>The post {id} does not exit</Text>;
  }
  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <TweetComponent tweet={tweet}></TweetComponent>
        <TweetComponent tweet={tweet}></TweetComponent>
      </SafeAreaView>
    </>
  );
}
