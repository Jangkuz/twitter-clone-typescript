import 'package:flutter/material.dart';
import 'package:twitter_flutter/data/list_tweets.dart';
import 'package:twitter_flutter/widgets/tweet_widget.dart';

class ListPage extends StatelessWidget {
  ListPage({super.key});
  final int numberOfTweet = listOfTweets.length;
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Sample list view'),
      ),
      // body: Column(
      //   children:[
      //     Text('There are $numberOfTweet'),
      //   ],
      // ),
      body: ListView.builder(
        itemCount: listOfTweets.length,
        itemBuilder: (context, index) {
          // return CardExample();
          // return Container();
          return TweetWidget(tweetData: listOfTweets[index]);
        }
      ),

    );
  }
}
