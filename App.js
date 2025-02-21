// import { StatusBar } from "expo-status-bar";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";

// import screens
import { Home, ItemDetail } from "./screens/";

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        border: "transparent"
    }
};

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer theme={theme}>
            <Stack.Navigator
                screenOprions={{
                    headerShown: false
                }}
                initialRouteName={"Home"}
            >
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="ItemDetail" component={ItemDetail} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
