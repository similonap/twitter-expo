import React from "react";
import { Drawer } from 'expo-router/drawer';
import DataProvider from "../components/DataProvider";

export default function Layout() {
    return (
        <DataProvider>
            <Drawer screenOptions={{
                headerShown: false
            
            }}>
                <Drawer.Screen name="(stack)" options={{ title: "Home" }} />
                <Drawer.Screen name="settings" options={{ title: "Settings" }} />

            </Drawer>
        </DataProvider>
    );
}