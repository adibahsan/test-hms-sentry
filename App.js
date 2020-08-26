import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Sentry from "sentry-expo";
import * as Integrations from "@sentry/integrations";

Sentry.init({
  dsn:
    "https://5d2317e876dd4528bc58f35af4c9e7b3@o423433.ingest.sentry.io/5405608",
  integrations: [
    new Integrations.CaptureConsole({
      levels: ["error"],
    }),
  ],
  enableInExpoDevelopment: true,
  debug: true,
});

export default function App() {
  const log1 = "Logger Level => Log";
  const log2 = "Logger Level => Info";
  const log3 = "Logger Level => Error";

  console.log(log1);
  console.info(log2);
  // console.error(log3)
  return (
    <View style={styles.container}>
      <Text>{log1}</Text>
      <Text>{log2}</Text>
      {/*<Text>{log3}</Text>*/}

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
