import { useContext } from "react";
import { View, Text } from "react-native";
import { Switch } from "react-native-gesture-handler";
import DataProvider, { DataContext } from "../../components/DataProvider";

export default function Settings() {
    const {darkMode, setDarkMode} = useContext(DataContext)


    return (
        <View style={{flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
            <Text style={{fontWeight: "bold", color: darkMode ? "white" : "black"}}>Light/Dark</Text>
            <Switch value={darkMode} onValueChange={(v) => setDarkMode(!darkMode)}/>
        </View>
    )
}