import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter_app1/currency_converter_cupertino.dart';
import 'package:flutter_app1/currency_converter_material.dart';

void main() {
  runApp(const MyMaterialApp());
}

class MyMaterialApp extends StatelessWidget {
  const MyMaterialApp({super.key});

// This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    // material app is the main app playground
    return const MaterialApp(
      title: 'Flutter Demo',
      // theme: ThemeData(
      //   colorScheme: ColorScheme.fromSeed(seedColor: Colors.deepPurple),
      //   useMaterial3: true,
      // ),

      // this is local to each material app, to render ui Headers, body etc,
      home: CurrencyConverterMaterialPage(),
    );
  }
}

// stl for stateless, stlf for stateful

class MyCupertinoApp extends StatelessWidget {
  const MyCupertinoApp({super.key});

  @override
  Widget build(BuildContext context) {
     return const CupertinoApp(
      title: 'Flutter Demo',

      // this is local to each material app, to render ui Headers, body etc,
      home: CurrencyConverterCupertinoPage(),
    );
  }
}
