import { FlatList, Pressable, View, Image, Text, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { useContext } from "react";
import { Tweet } from "../types";
import { DataContext } from "./DataProvider";

interface TweetListProps {
    loading: boolean;
    loadData: () => void;
    data: Tweet[]
}

export default function TweetList({ loading, loadData, data }: TweetListProps) {
    return (
        <FlatList
            style={{ flex: 1 }}
            onRefresh={() => loadData()}
            ListEmptyComponent={() => <View style={{ flex: 1, minHeight: 100 }}></View>}
            refreshing={loading}
            data={data}
            renderItem={({ item }) => <TweetView tweet={item} />}
            keyExtractor={item => item.id.toString()}
        />
    )
}


const TweetView = ({ tweet }: { tweet: Tweet }) => {
    const { profiles, darkMode } = useContext(DataContext);
    const profileData = profiles.find(p => p.handle === tweet.handle);

    const router = useRouter();
    return (
        <View style={[styles.postContainer,{backgroundColor : darkMode ? "#3b3b3b" : "white", borderColor: darkMode ? "#444" : "#ddd"}]}>
            <Pressable onPress={() => router.push("/" + profileData?.handle)}>
                <View style={{ flexDirection: "row", marginBottom: 10 }}>
                    <Image style={{ marginRight: 10, width: 50, height: 50, borderRadius: 100 }} source={{ uri: profileData?.avatar }} />
                    <View style={{ flexDirection: "column" }}>
                        <Text style={[styles.name, {color: darkMode? "white" : "black"}]}>{profileData?.name}</Text>
                        <Text style={[styles.handle, {color: darkMode? "white" : "black"}]}>@{profileData?.handle}</Text>
                    </View>
                </View>
            </Pressable>
            <Text style={[styles.body, {color: darkMode? "white" : "black"}]}>{tweet.text}</Text>
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