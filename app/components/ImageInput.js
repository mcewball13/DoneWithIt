import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

const ImageInput = ({ imageUri }) => {
    return (
        <View style={styles.container}>
            {!imageUri && (
                <MaterialCommunityIcons
                    name="camera"
                    size={40}
                    color={colors.medium}
                />
            )}
            {imageUri && (<Image source={{uri: imageUri}} style={styles.image} />)}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        backgroundColor: colors.light,
        borderRadius: 15,
        justifyContent: "center",
        height: 100,
        width: 100,
    },
    image: {
        width: "100%",
        height: "100%"
    }
});

export default ImageInput;
