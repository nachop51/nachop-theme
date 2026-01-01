import "package:flutter/material.dart";

void main() => runApp(const MyApp());

class MyApp extends StatelessWidget {
  final int version;
  const MyApp({super.key, required this.version});

  @override
  Widget build(BuildContext context) => MaterialApp(
    debugShowCheckedModeBanner: false,
    theme: ThemeData(useMaterial3: true, colorSchemeSeed: Colors.indigo),
    home: const DemoPage(title: "Dart/Flutter mini demo"),
  );
}

mixin Logger {
  void log(String msg) => debugPrint("[LOG] $msg");
}

extension PrettyInt on int {
  String get pretty => "$this (${isEven ? "even" : "odd"})";
}

sealed class FetchState<T> {
  const FetchState();
}

class Loading<T> extends FetchState<T> {
  const Loading();
}

class Data<T> extends FetchState<T> {
  final T value;
  const Data(this.value);
}

class ErrorState<T> extends FetchState<T> {
  final Object error;
  const ErrorState(this.error);
}

final a = 12;

class DemoPage extends StatefulWidget {
  final String title;
  const DemoPage({super.key, required this.title});

  @override
  State<DemoPage> createState() => _DemoPageState();
}

class _DemoPageState extends State<DemoPage> with Logger {
  FetchState<List<String>> state = const Loading();
  int taps = 0;

  @override
  void initState() {
    super.initState();
    _load();
  }

  Future<void> _load() async {
    try {
      await Future<void>.delayed(const Duration(milliseconds: 400));
      final base = ["Dart", "Flutter", "async", "patterns"];
      final list = base
          .map((s) => s.toUpperCase())
          .where((s) => s.length > 4)
          .toList(growable: false);
      setState(() => state = Data(list));
    } catch (e) {
      setState(() => state = ErrorState(e));
    }
  }

  @override
  Widget build(BuildContext context) => Scaffold(
    appBar: AppBar(title: Text(widget.title)),
    body: Center(
      child: switch (state) {
        Loading() => const CircularProgressIndicator(),
        Data(value: final items) => Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            Text("taps: ${taps.pretty}", style: const TextStyle(fontSize: 18)),
            const SizedBox(height: 12),
            for (final (i, s) in items.indexed)
              Text(
                "${i + 1}. $s",
                style: Theme.of(context).textTheme.titleMedium,
              ),
            const SizedBox(height: 12),
            FilledButton(
              onPressed: () => setState(() {
                taps++;
                log("Tapped: $taps");
              }),
              child: const Text("Tap me"),
            ),
          ],
        ),
        ErrorState(error: final e) => Text("Oops: $e"),
      },
    ),
    floatingActionButton: FloatingActionButton(
      onPressed: _load,
      child: const Icon(Icons.refresh),
    ),
  );
}

// Dart/Flutter
