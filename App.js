import React, { useEffect, useState } from "react";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";

import Screen from "./app/components/Screen";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import { Button, Image } from "react-native";
import ImageInput from "./app/components/ImageInput";

export default function App() {
const [imageUri, setImageUri] = useState()

    const requestPermission = async () => {
        const result = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (!result.granted)
            alert("You need to enable permission to access the library");
    };

    useEffect(() => {
        requestPermission();
    }, []);

    const selectImage = async () => {
        try {
            const result = await ImagePicker.launchImageLibraryAsync();
          if (!result.cancelled) {
            setImageUri(result.uri)
          }
        } catch (error) {
            console.log("Error reading an image");
        }
    };

    return (
        <Screen>
            <ImageInput imageUri={imageUri} onChangeImage={(uri )=> setImageUri(uri)} />
        </Screen>
    );
}
