import React from "react";
import Constants from "expo-constants";
import { Platform, SafeAreaView, StyleSheet, View } from "react-native";

function Screen({ children, style }) {
    return (
        <SafeAreaView style={[styles.screen, style]}>
            <View style={Platform.OS === 'android' ? null : style}>
            {children}
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    screen: {
        paddingTop: Constants.statusBarHeight,
        flex: 1
    },
});

export default Screen;
