class Tweet {
  final String id;
  final User user;
  final String createdAt;
  final String content;
  final String? image;
  final int numberOfComments;
  final int numberOfRetweets;
  final int numberOfLikes;

  Tweet({
    required this.id,
    required this.user,
    required this.createdAt,
    required this.content,
    this.image,
    required this.numberOfComments,
    required this.numberOfRetweets,
    required this.numberOfLikes,
  });


}

class User {
  final String id;
  final String username;
  final String name;
  final String image;

  User({
    required this.id,
    required this.username,
    required this.name,
    required this.image,
  });


}
