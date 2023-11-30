import { useContext, useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image,TextInput,Pressable } from 'react-native';
import TweetList from '../../../components/TweetList';
import { DataContext } from '../../../components/DataProvider';

export default function Home() {
  const { loading, loadData, tweets } = useContext(DataContext);
  const [filter, setFilter] = useState<string>("");
  const filteredData = tweets.filter(tweet => tweet.text.toUpperCase().includes(filter.toUpperCase()) || tweet.handle.toUpperCase().includes(filter.toUpperCase()))

  return (
    <View style={styles.container}>
      <View>
       <TextInput
                secureTextEntry={false}
                autoCapitalize="none"
                placeholder="filter"
                keyboardType="default"
                value={filter}
                onChangeText={setFilter}
                style={styles.filter}
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
    backgroundColor: '#f5f5f5', // Light grey background
  }
});