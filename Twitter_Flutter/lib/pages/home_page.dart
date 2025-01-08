import 'package:flutter/material.dart';
import 'package:twitter_flutter/pages/list_page.dart';
import 'package:twitter_flutter/widgets/tweet_widget.dart';

class JangkuzHomeStatelessWidget extends StatelessWidget {
  const JangkuzHomeStatelessWidget({super.key});

  @override
  Widget build(BuildContext context) {
    // TODO: implement build
    return MaterialApp(
      title: 'Jangkuz Home Stateless widget',
      theme: ThemeData(),
      home: const JangkuzHomeStatefulWidget(
        title: 'Jangkuz Home Stateful Widget',
      ),
    );
  }
}

class JangkuzHomeStatefulWidget extends StatefulWidget{
  const JangkuzHomeStatefulWidget({super.key, required this.title});

  final String title;

  @override
  State<JangkuzHomeStatefulWidget> createState() => _JangkuzState();
}

class _JangkuzState extends State<JangkuzHomeStatefulWidget> {
  int _someValThatCanBeUpdated = 0;

  void _updateValueBySetStateCauseRebuild(){
    setState((){_someValThatCanBeUpdated ++;})  ;
  }

  @override
  Widget build(BuildContext context){
    return Scaffold(
      appBar: AppBar(
        title: Text('${widget.title}\nApp bar in scaffold'),
      ),
      drawer: Drawer(
        child: ListView(
          children:[
            const DrawerHeader(
              child: Text('State<JangkuzStatefulWidget>'),
            ),
            ListTile(
              title: const Text('ListTitle Item 1'),
              onTap: () {
                Navigator.pop(context);
              },
            ),
            ListTile(
              title: const Text('List page'),
              onTap: () {
                Navigator.pop(context);

                Navigator.push(context, MaterialPageRoute(builder: (context) => ListPage(),));
              },
            ),
            ListTile(
              title: const Text('ListTitle Item 3'),
              onTap: () {},
            ),
            ListTile(
              title: const Text('ListTitle Item 4'),
              onTap: () {},
            ),
          ],
        ),
      ),
      body: Center(
        child: Column(
          children: <Widget>[
            const CardExample(),
            const Text('This body is in scaffold'),
            const Text('This body is empty'),
            Text('$_someValThatCanBeUpdated can be updated'),
          ],
        ),
      ),
    );
  }
}
