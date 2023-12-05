import { Tabs } from "expo-router";
import { AntDesign } from '@expo/vector-icons';
import { Drawer } from "expo-router/drawer";
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from "@react-navigation/drawer";
import { Linking } from "react-native";
import { useContext } from "react";
import { DataContext } from "../../components/DataProvider";

function CustomDrawerContent(props : any) {
    const { darkMode } = useContext(DataContext);

    return (
      <DrawerContentScrollView {...props} style={{backgroundColor: darkMode ? "black" : "white"}}>
        <DrawerItemList {...props} />

      </DrawerContentScrollView>
    );
  }

export default function Layout() {
    const { darkMode } = useContext(DataContext);
    
    return (
        <Drawer
            drawerContent={CustomDrawerContent}
            screenOptions={{
                drawerActiveTintColor: darkMode ? "white" : "black",
                drawerInactiveTintColor: darkMode ? "white" : "black",
                headerStyle: {
                    backgroundColor: darkMode ? "black" : "#1D9BF0"
                },
                sceneContainerStyle: {
                    backgroundColor: darkMode ? "black" : "#f5f5f5"
                },
                headerTintColor: "white"
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