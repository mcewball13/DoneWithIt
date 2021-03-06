import React, { useEffect, useState } from "react";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";

import Screen from "./app/components/Screen";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import { Button, Image } from "react-native";
import ImageInput from "./app/components/ImageInput";
import ImageInputList from "./app/components/ImageInputList";

export default function App() {
    const [imageUris, setImageUris] = useState([]);

    const handleAdd = (uri) => {
        setImageUris([...imageUris, uri]);
    };

    const handleRemove = (uri) => {
        setImageUris(imageUris.filter((imageUri) => imageUri !== uri));
    };

    return (
        <ListingEditScreen />
    );
}
