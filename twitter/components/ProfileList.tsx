import { FlatList, Pressable, View, Image, Text, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { useContext } from "react";
import { Profile, Tweet } from "../types";
import { DataContext } from "./DataProvider";

export default function ProfileList() {
    const { profiles, loadData, loading, darkMode } = useContext(DataContext);

    return (
        <FlatList
            style={{ flex: 1 }}
            onRefresh={() => loadData()}
            ListEmptyComponent={() => <View style={{ flex: 1, minHeight: 100 }}></View>}
            refreshing={loading}
            data={profiles}
            renderItem={({ item }) => <ProfileView profile={item} />}
            keyExtractor={item => item.id.toString()}
        />
    )
}


const ProfileView = ({ profile }: { profile: Profile }) => {
    const { darkMode } = useContext(DataContext);

    const router = useRouter();
    return (
        <View style={[styles.postContainer, {backgroundColor : darkMode ? "#3b3b3b" : "white", borderColor: darkMode ? "#444" : "#ddd"}]}>
            <Pressable onPress={() => router.push("/" + profile.handle)}>
                <View style={{ flexDirection: "row", marginBottom: 10 }}>
                    <Image style={{ marginRight: 10, width: 50, height: 50, borderRadius: 100 }} source={{ uri: profile.avatar }} />
                    <View style={{ flexDirection: "column" }}>
                        <Text style={[styles.name, {color: darkMode? "white" : "black"}]}>{profile?.name}</Text>
                        <Text style={[styles.handle, {color: darkMode? "white" : "black"}]}>@{profile?.handle}</Text>
                    </View>
                </View>
            </Pressable>
        </View>
    );
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
        justifyContent: 'flex-start',
        backgroundColor: '#f5f5f5', // Light grey background
    },
    postContainer: {
        backgroundColor: '#fff', // White background for posts
        borderRadius: 8,
        padding: 15,
        marginVertical: 8,
        marginHorizontal: 16,
        elevation: 3, // Adds a subtle shadow
        borderColor: '#ddd', // Light border color
        borderWidth: 1,
    },
    name: {
        fontSize: 16,
        fontWeight: "bold"
    },
    handle: {
        fontSize: 14,
        fontWeight: "100"
    },
    body: {
        fontSize: 16,
        color: '#666', // Slightly lighter color for the body
        lineHeight: 24, // Improve readability of body text
    },
});