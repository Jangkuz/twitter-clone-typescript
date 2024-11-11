import { StyleSheet, Image } from 'react-native';
import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import Tweets from '../../assets/data/tweets'; 

const tweetData = Tweets[1];
export default function TabOneScreen() {
  return (
    <View style={styles.container}>
     <Image src={tweetData.user.image} style={styles.userTweetImage}/>
     <Text>{tweetData.content}</Text> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
 userTweetImage:{
  width: 50,
  height: 50,
  borderRadius: 50,
 } 
});
