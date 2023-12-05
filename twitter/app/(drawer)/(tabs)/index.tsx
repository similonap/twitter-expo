import { useContext, useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image,TextInput,Pressable } from 'react-native';
import TweetList from '../../../components/TweetList';
import { DataContext } from '../../../components/DataProvider';

export default function Home() {
  const { loading, loadData, tweets, darkMode } = useContext(DataContext);
  const [filter, setFilter] = useState<string>("");
  const filteredData = tweets.filter(tweet => tweet.text.toUpperCase().includes(filter.toUpperCase()) || tweet.handle.toUpperCase().includes(filter.toUpperCase()))

  return (
    <View style={[styles.container, {backgroundColor : darkMode ? "black" : "#f5f5f5"}]}>
      <View>
       <TextInput
                secureTextEntry={false}
                autoCapitalize="none"
                placeholder="filter"
                keyboardType="default"
                value={filter}
                onChangeText={setFilter}
                placeholderTextColor={darkMode ? "#5A5A5A" : "#DBDBDB"}
                style={[styles.filter, { backgroundColor : darkMode ? "black" : "white", borderColor: darkMode ? "#444" : "white", color: darkMode ? "white" : "black"}]}
            />
            </View>
            
            <TweetList loadData={loadData} loading={loading} data={filteredData}/>
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
  }
});