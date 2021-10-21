import React from "react";
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    Button,
    Platform,
    StatusBar,
    Dimensions
} from "react-native";
import {useDimensions, useDeviceOrientation} from "@react-native-community/hooks";

export default function App() {
    

    return (
      <View style={{
          backgroundColor: "#fff",
          flex: 1,
      }}>
          <View style={{
              
          }}/>
          
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
});
