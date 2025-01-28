import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

import Routes from "./src/routes/Routes";

function App(): JSX.Element {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Routes />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

export default App;
