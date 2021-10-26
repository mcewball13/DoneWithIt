import React from "react";
import { FlatList, SafeAreaView, StyleSheet} from "react-native";
import Constants  from "expo-constants";

import ListItem from "../components/ListItem";
import Screen from "../components/Screen";

const messages = [
    {
        id: 1,
        title: "T1",
        description: "Description",
        image: require("../assets/mosh.jpg"),
    },
    {
        id: 2,
        title: "T2",
        description: "Description 2",
        image: require("../assets/mosh.jpg"),
    },
];

function MessagesScreen(props) {
    return (
        <Screen>
            <FlatList
                data={messages}
                keyExtractor={(message) => message.id.toString()}
                renderItem={({ item }) => (
                    <ListItem
                        title={item.title}
                        subTitle={item.description}
                        image={item.image}
                    />
                )}
            />
        </Screen>
    );
}

const styles = StyleSheet.create({
    screen: {
        paddingTop: Constants.statusBarHeight
    }
})

export default MessagesScreen;
