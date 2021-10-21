import React from "react";
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    Button,
    Platform,
    StatusBar,
    Dimensions,
} from "react-native";
import {
    useDimensions,
    useDeviceOrientation,
} from "@react-native-community/hooks";

import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";

import AppText from "./app/components/AppText";

export default function App() {
    return (
        <View style={{
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1
        }}>
            <AppText>I love react native</AppText>
        </View>
    );
}


