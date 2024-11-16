import { StyleSheet, Image } from "react-native";
import { View, Text } from "@/components/Themed";
import { TweetType } from "@/type/type";
import Entypo from "@expo/vector-icons/Entypo";
import IconButton from "./IconButton";

export type TweetProp = {
  tweet: TweetType;
};
const timeSinceTweeted: string = "2h";
const TweetComponent = ({ tweet }: TweetProp) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: tweet.user.image }} style={styles.userTweetImage} />
      <View style={styles.mainContainer}>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.userTweetName}>{tweet.user.name}</Text>
          <Text style={styles.userTweetUsername}>
            @{tweet.user.username} - {timeSinceTweeted}
          </Text>
          <Entypo
            name="dots-three-horizontal"
            size={16}
            color="gray"
            style={{ marginLeft: "auto" }}
          />
        </View>

        <Text>{tweet.content}</Text>

        {tweet.image && (
          <Image source={{ uri: tweet.image }} style={styles.tweetImage} />
        )}

        <View style={styles.footer}>
          <IconButton
            iconName="comment"
            numberOfInteraction={tweet.numberOfComments || 0}
          />
          <IconButton
            iconName="retweet"
            numberOfInteraction={tweet.numberOfRetweets || 0}
          />
          <IconButton
            iconName="heart"
            numberOfInteraction={tweet.numberOfLikes || 0}
          />
          <IconButton
            iconName="share-apple"
            numberOfInteraction={tweet.impressions || 0}
          />
        </View>
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
    padding: 10,
  },
  mainContainer: {
    marginLeft: 20,
    flex: 1,
  },
  userTweetImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
    alignSelf: "flex-start",
  },
  userTweetName: {
    fontWeight: "bold",
  },
  userTweetUsername: {
    fontWeight: "100",
    color: "grey",
    paddingLeft: 5,
  },
  tweetImage: {
    width: "100%",
    aspectRatio: 16 / 9,
  },
  footer: {
    padding: 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default TweetComponent;
