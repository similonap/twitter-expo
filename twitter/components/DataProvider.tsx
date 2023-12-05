import { createContext, useState, useEffect } from "react";
import { Tweet, Profile } from "../types";
import AsyncStorage from "@react-native-async-storage/async-storage";

export interface DataContext { 
    tweets: Tweet[];
    profiles: Profile[];
    loadData: () => void;
    loading: boolean;
    darkMode: boolean;
    setDarkMode: (darkMode: boolean) => void
  }
  
  export const DataContext = createContext<DataContext>({darkMode: false, setDarkMode: () => {}, tweets: [], profiles: [], loadData: () => {}, loading: false})
  
  export default function({children} : { children: React.ReactNode }) {
    const [tweets, setTweets] = useState<Tweet[]>([]);
    const [profiles, setProfiles] = useState<Profile[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [darkMode, setDarkMode] = useState<boolean | undefined>(undefined);

    async function getDarkModeFromStorage() {
      const darkMode = (await AsyncStorage.getItem("darkMode")) === "true";
      setDarkMode(darkMode);
    }

    async function saveDarkModeToStorage(darkMode: boolean) {
      await AsyncStorage.setItem("darkMode", darkMode.toString());
    }
    

    useEffect(() => {
      if (darkMode !== undefined) { 
        saveDarkModeToStorage(darkMode);
      }
    }, [darkMode])
  
    const loadData = async() => {
      await getDarkModeFromStorage();
      setLoading(true);
      setTweets([]);
      const response = await fetch("https://my-json-server.typicode.com/similonap/twitter-json-server/tweets");
      const data : Tweet[] = await response.json();
  
      const profileResponse = await fetch("https://my-json-server.typicode.com/similonap/twitter-json-server/profiles");
      const profileData : Profile[] = await profileResponse.json();
  
      setTweets(data);
      setProfiles(profileData)
      setLoading(false); 
    }
  
    useEffect(() => {
      loadData();
    }, []);
  
    return (
      <DataContext.Provider value={{darkMode, setDarkMode, profiles, tweets, loading, loadData}}>
        {children}
      </DataContext.Provider>
    )
  }
  