import { Tabs } from "expo-router";
import { AntDesign } from '@expo/vector-icons'; 
import { useContext } from "react";
import { DataContext } from "../../../components/DataProvider";


export default function Layout() {
  const { darkMode } = useContext(DataContext);

  return (
    <Tabs screenOptions={{
      headerShown: false,
      tabBarStyle: {
        backgroundColor: darkMode ? "black" : "white"
      },
      tabBarActiveTintColor: darkMode ? "white" : "#1D9BF0",
      headerStyle: {
        backgroundColor: darkMode ? "black" : "white"
      }
    }}>
      <Tabs.Screen name="index" options={{ 
        title: "Home",  
        tabBarIcon: ({color, size}) => <AntDesign name="twitter" size={size} color={color} />
        }} />
      <Tabs.Screen name="profiles" options={{ 
        title: "Profiles",  
        tabBarIcon: ({color, size}) => <AntDesign name="profile" size={size} color={color} />
        }} />
    </Tabs>
  );
}