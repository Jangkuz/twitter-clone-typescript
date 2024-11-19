import { Pressable, StyleSheet, View } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Link } from "expo-router";

function ToNewTweetScreen() {
  console.log("new tweet");
}

const NewTweetButton = () => {
  return (
    <Link href={{ pathname: "/newTweet" }} asChild>
      <Pressable style={styles.button} onPress={ToNewTweetScreen}>
        <AntDesign name="plus" size={30} color="black" />
      </Pressable>
    </Link>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#ADD8E6",
    width: 50,
    height: 50,
    borderRadius: 50,
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    right: 15,
    bottom: 15,
  },
});
export default NewTweetButton;
