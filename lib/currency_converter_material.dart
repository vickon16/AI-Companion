import 'package:flutter/material.dart';

class CurrencyConverterMaterialPage extends StatefulWidget {
  const CurrencyConverterMaterialPage({super.key});

  @override
  State<CurrencyConverterMaterialPage> createState() =>
      _CurrencyConverterMaterialPageState();
}

class _CurrencyConverterMaterialPageState
    extends State<CurrencyConverterMaterialPage> {
  double result = 0;
  final TextEditingController textEditingController = TextEditingController();

  void handleOnPressed() => {
        setState(() => result = double.parse(textEditingController.text) * 1500)
      };

  @override
  void initState() {
    // anything here would be called before building the app
    super.initState();
  }

  @override
  void dispose() {
    // anything here would be called after the app is built
    textEditingController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.black38,
      appBar: AppBar(
        backgroundColor: Colors.green,
        elevation: 0,
        title: const Text(
          "Currency Converter",
          style: TextStyle(
              color: Colors.white, fontSize: 18, fontWeight: FontWeight.bold),
        ),
        actions: const [
          Icon(
            Icons.hourglass_empty,
            size: 30,
            color: Colors.white,
          ),
        ],
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text(
              "NGN ${result != 0 ? result.toStringAsFixed(2) : result.toStringAsFixed(0)}",
              style: const TextStyle(
                  color: Color.fromRGBO(114, 219, 44, 1), fontSize: 40),
            ),
            Container(
              padding: const EdgeInsets.all(8.0),
              child: TextField(
                controller: textEditingController,
                onSubmitted: (value) => {},
                style: const TextStyle(color: Color.fromRGBO(255, 255, 255, 1)),
                decoration: const InputDecoration(
                    labelText: "Please enter a value in USD",
                    hintText: "Value like 200...",
                    hintStyle: TextStyle(color: Colors.white54, fontSize: 12),

                    // errorText: "New Error",
                    helperText: "A Helper text",
                    helperStyle: TextStyle(color: Colors.white70),
                    labelStyle: TextStyle(color: Colors.white),
                    prefixIcon: Icon(Icons.monetization_on_rounded),
                    prefixIconColor: Colors.greenAccent,
                    filled: true,
                    fillColor: Colors.white10,
                    focusedBorder: OutlineInputBorder(
                      borderSide: BorderSide(color: Colors.green),
                      borderRadius: BorderRadius.all(Radius.circular(5)),
                    ),
                    enabledBorder: OutlineInputBorder(
                      borderSide: BorderSide(color: Colors.green),
                      borderRadius: BorderRadius.all(Radius.circular(5)),
                    )),
                keyboardType:
                    const TextInputType.numberWithOptions(decimal: true),
              ),
            ),
            Padding(
              padding: const EdgeInsets.all(8.0),
              child: TextButton(
                  onPressed: handleOnPressed,
                  style: TextButton.styleFrom(
                      shape: RoundedRectangleBorder(
                        borderRadius: BorderRadius.circular(10),
                      ),
                      minimumSize: const Size(double.infinity, 50),
                      backgroundColor: Colors.green,
                      foregroundColor: Colors.white),
                  child: const Text("Convert")),
            ),
          ],
        ),
      ),
    );
  }
}
