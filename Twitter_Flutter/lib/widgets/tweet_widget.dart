import 'package:flutter/material.dart';
import 'package:twitter_flutter/dataType/tweet_data_type.dart';

class TweetWidget extends StatelessWidget {
  const TweetWidget({super.key, required this.tweetData});
  final Tweet tweetData;

  @override
  Widget build(BuildContext context) {
   return Center(
     child: Card(
       child: Column(
        children: <Widget>[
          ListTile(
           // leading: Icon(tweetData.user.image),
            leading: CircleAvatar(
                backgroundImage: NetworkImage(tweetData.user.image),
            ),
           title: Text('${tweetData.user.username} - 2h'),
            subtitle: Text(tweetData.content),
          ),
          Row(
            children: <Widget>[
              TextButton(
                child: const Text('BUY TICKETS'),
                onPressed: () {/* ... */},
              ),
              const SizedBox(width: 8),
              TextButton(
                child: const Text('LISTEN'),
                onPressed: () {/* ... */},
              ),
              const SizedBox(width: 8),
            ],
          ),
        ],
       ),
     ),
   );
  }
}


class CardExample extends StatelessWidget {
  const CardExample({super.key});

  @override
  Widget build(BuildContext context) {
    return Center(
      child: Card(
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: <Widget>[
            const ListTile(
              leading: Icon(Icons.album),
              title: Text('The Enchanted Nightingale'),
              subtitle: Text('Music by Julie Gable. Lyrics by Sidney Stein.'),
            ),
            Row(
              mainAxisAlignment: MainAxisAlignment.end,
              children: <Widget>[
                TextButton(
                  child: const Text('BUY TICKETS'),
                  onPressed: () {/* ... */},
                ),
                const SizedBox(width: 8),
                TextButton(
                  child: const Text('LISTEN'),
                  onPressed: () {/* ... */},
                ),
                const SizedBox(width: 8),
              ],
            ),
          ],
        ),
      ),
    );
  }
}
