import "package:flutter/cupertino.dart";

class CurrencyConverterCupertinoPage extends StatefulWidget {
  const CurrencyConverterCupertinoPage({super.key});

  @override
  State<CurrencyConverterCupertinoPage> createState() =>
      _CurrencyConverterCupertinoPageState();
}

class _CurrencyConverterCupertinoPageState
    extends State<CurrencyConverterCupertinoPage> {
  double result = 0;
  final TextEditingController textEditingController = TextEditingController();

  void handleOnPressed() => {
        setState(() => result = double.parse(textEditingController.text) * 1500)
      };

  @override
  Widget build(BuildContext context) {
    return CupertinoPageScaffold(
      backgroundColor: CupertinoColors.black,
      navigationBar: const CupertinoNavigationBar(
        backgroundColor: CupertinoColors.activeGreen,
        middle: Text(
          "Currency Converter",
          style: TextStyle(
              color: CupertinoColors.white,
              fontSize: 18,
              fontWeight: FontWeight.bold),
        ),
        trailing: Icon(
          CupertinoIcons.hourglass,
          size: 30,
          color: CupertinoColors.white,
        ),
      ),
      child: Center(
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
              child: CupertinoTextField(
                controller: textEditingController,
                onSubmitted: (value) => {},
                style: const TextStyle(color: Color.fromRGBO(255, 255, 255, 1)),
                decoration: BoxDecoration(
                  border: Border.all(),
                  borderRadius: const BorderRadius.all(Radius.circular(5)),
                  color: CupertinoColors.white,
                ),
                placeholder: "Please enter a value in USD",
                placeholderStyle:
                    const TextStyle(color: CupertinoColors.white, fontSize: 12),
                prefix: const Icon(CupertinoIcons.money_dollar),
                keyboardType:
                    const TextInputType.numberWithOptions(decimal: true),
              ),
            ),
            Padding(
              padding: const EdgeInsets.all(8.0),
              child: CupertinoButton(
                  onPressed: handleOnPressed,
                  color: CupertinoColors.white,
                  child: const Text("Convert")),
            ),
          ],
        ),
      ),
    );
  }
}
