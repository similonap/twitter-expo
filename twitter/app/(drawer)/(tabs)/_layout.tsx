import { Tabs } from "expo-router";
import { AntDesign } from '@expo/vector-icons'; 


export default function Layout() {
  return (
    <Tabs screenOptions={{
      headerShown: false
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