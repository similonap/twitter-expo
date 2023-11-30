import { Tabs } from "expo-router";
import { AntDesign } from '@expo/vector-icons';
import { Drawer } from "expo-router/drawer";


export default function Layout() {
    return (
        <Drawer
            screenOptions={{
                headerStyle: {
                    backgroundColor: "#1DA1F2"
                },
                headerTintColor: "white",
            }}
        >
            <Drawer.Screen name="(tabs)" options={{
                title: "Home",

            }} />
            <Drawer.Screen name="settings" options={{
                title: "Settings",

            }} />


        </Drawer>
    );
}