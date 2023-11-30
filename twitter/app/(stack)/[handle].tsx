import { Stack, useLocalSearchParams } from "expo-router";
import { useContext } from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import TweetList from "../../components/TweetList";
import { DataContext } from "../../components/DataProvider";

export default function PostDetail() {
  const { loading, loadData, tweets, profiles } = useContext(DataContext);
  const { handle } = useLocalSearchParams<{ handle: string }>();

  const profileData = profiles.find(p => p.handle === handle);

  const tweetsByUser = tweets.filter(t => t.handle === handle);

  return (
    <View style={{ flexDirection: "column", flex: 1 }}>
      <Stack.Screen
        options={{
          title: profileData?.name,
        }}
      />
      <View>
        <Image source={{ uri: profileData?.banner }} style={{ height: 300 }} />
      </View>

      <View style={{ marginTop: 0, marginLeft: 130, margin: 10 }}>
        <Text style={{ fontSize: 24, fontWeight: "900" }}>{profileData?.name}</Text>
        <Text style={{ fontSize: 16, fontWeight: "200" }}>@{profileData?.handle}</Text>
      </View>
      <Text style={{fontSize: 16, marginTop: 10, marginBottom: 5, marginHorizontal: 17}}>{profileData?.bio}</Text>
      <Image source={{ uri: profileData?.avatar }} style={{ height: 100, width: 100, position: "absolute", top: 270, left: 10, borderRadius: 100, borderWidth: 1, borderColor: "black" }} />


      <TweetList loadData={loadData} loading={loading} data={tweetsByUser}/>
    </View>
  )
}


const styles = StyleSheet.create({
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
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
    color: '#333', // Darker color for the title
  },
  body: {
    fontSize: 16,
    color: '#666', // Slightly lighter color for the body
    lineHeight: 24, // Improve readability of body text
  },
});
