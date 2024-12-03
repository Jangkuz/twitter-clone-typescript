import { StyleSheet, Image, Pressable } from "react-native";
import { View, Text } from "@/components/Themed";
import { TweetType } from "@/type/type";
import Entypo from "@expo/vector-icons/Entypo";
import IconButton from "./IconButton";
import { Link } from "expo-router";
import { navigate } from "expo-router/build/global-state/routing";

export type TweetProp = {
  tweet: TweetType;
};
const timeSinceTweeted: string = "2h";
const TweetComponent = ({ tweet }: TweetProp) => {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        <Link
          href={{ pathname: "/status/[id]", params: { id: `${tweet.id}` } }}
          asChild
        >
          <Pressable>
            <Image
              source={{ uri: tweet.user.image }}
              style={styles.userTweetImage}
            />
          </Pressable>
        </Link>

        <View style={styles.tweetContentContainer}>
          <View
            style={{
              flexDirection: "row",
              flex: 1,
            }}
          >
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

          <Link
            href={{ pathname: "/status/[id]", params: { id: `${tweet.id}` } }}
            asChild
          >
            <Pressable>
              <View>
                <Text>{tweet.content}</Text>
              </View>
            </Pressable>
          </Link>

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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    flexDirection: "row",
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "grey",
    padding: 10,
    minWidth: "100%",
    // width: "100%",
  },
  tweetContentContainer: {
    marginLeft: 20,
    flex: 1,
    maxWidth: "100%",
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
    flex: 1,
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
