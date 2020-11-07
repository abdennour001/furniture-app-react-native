// import { StatusBar } from "expo-status-bar";
import React from "react";
import {
    StyleSheet,
    Text,
    View,
    Platform,
    SafeAreaView,
    StatusBar,
    TextInput
} from "react-native";

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <Text>Hello world!</Text>
            <TextInput
                style={{
                    height: 30,
                    backgroundColor: "lightgrey"
                }}
                value="useless"
            ></TextInput>
            <StatusBar style="auto" />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    }
});
