import {
  Button,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import tweets from "@/assets/data/tweets";
import { useState } from "react";
import { useRouter } from "expo-router";

const currentUser = tweets[2];
export default function () {
  const [text, setText] = useState("");
  const router = useRouter();
  const onCancelPress = () => {
    router.back();
  };
  const onPostPress = () => {
    console.log("Tweeting ", text);
    setText("");
    router.back();
  };
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.headerContainer}>
          <Button title={"Cancel"} color={"red"} onPress={onCancelPress} />
          <Button title={"Post"} onPress={onPostPress} />
        </View>
        <View style={styles.inputContainer}>
          <View style={{ padding: 10 }}>
            <Image
              source={{ uri: currentUser.user.image }}
              style={styles.userImage}
            />
          </View>
          <View style={styles.inputField}>
            <TextInput
              placeholder={"What is happening?"}
              placeholderTextColor={"gray"}
              style={styles.textInput}
              multiline
              numberOfLines={5}
              value={text}
              onChangeText={setText}
            />
          </View>
        </View>
        <View style={styles.footerContainer}>
          <Text>Footer</Text>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 25,
  },
  headerContainer: {
    width: "100%",
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  inputContainer: {
    width: "100%",
    flex: 1,
    flexDirection: "row",
  },
  inputField: {
   flex: 1,
   padding: 5,
  },
  footerContainer: {
    width: "100%",
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
    alignSelf: "flex-start",
  },
  textInput: {
    flex: 1,
    padding: 10,
    textAlignVertical: "top",
  },
});
