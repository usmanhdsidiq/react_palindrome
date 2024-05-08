/*
Project Name: Palindrome Checker
Framework: React
Language: TypeScript
Author: @usmanhdsidiq
*/

import React from "react";
import { StyleSheet, View } from "react-native";
import PalindromeChecker from "./PalindromeChecker";
import Toast from "react-native-root-toast";

const App = () => {
  return (
    <View style={styles.container}>
      <PalindromeChecker />
      {/* <Toast ref={(ref) => Toast.setRef(ref)} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})

export default App;