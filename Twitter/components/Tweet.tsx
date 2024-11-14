import { StyleSheet, Image } from "react-native";
import { View, Text } from "@/components/Themed";
import { Int32 } from "react-native/Libraries/Types/CodegenTypes";
import { TweetType } from "@/type/type";

export type TweetProp = {
  tweet: TweetType;
};
const TweetComponent = ({ tweet}: TweetProp) => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: tweet.user.image }}
        style={styles.userTweetImage}
      />
      {/* <Image source={require('@/assets/images/anime_pfp/anime_pfp_1.jpg')} style={styles.userTweetImage} /> */}
      <View style={styles.mainContainer}>
        <Text style={styles.userTweetName}>{tweet.user.name}</Text>
        <Text>{tweet.content}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "grey",
  },
  mainContainer: {
    marginLeft: 20,
    flex: 1,
  },
  userTweetImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  userTweetName: {
    fontWeight: "bold",
  },
});

export default TweetComponent;
