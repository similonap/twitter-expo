import { useContext } from "react";
import { View, Text,FlatList,StyleSheet } from "react-native";
import { DataContext } from "../../../components/DataProvider";
import ProfileList from "../../../components/ProfileList";

export default function Profiles() {
    const { loading, loadData, profiles } = useContext(DataContext);

    return (
        <View style={styles.container}>
            <ProfileList/>
        </View>
    )
}

const styles = StyleSheet.create({
    filter: {
      backgroundColor: '#fff', // White background for posts
      borderRadius: 8,
      padding: 15,
      marginVertical: 8,
      marginHorizontal: 16,
      elevation: 3, // Adds a subtle shadow
      borderColor: '#ddd', // Light border color
      borderWidth: 1,
    },
    container: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'stretch',
      paddingTop: 40, 
      justifyContent: 'flex-start',
      backgroundColor: '#f5f5f5', // Light grey background
    }
  });