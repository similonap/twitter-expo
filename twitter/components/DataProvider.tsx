import { createContext, useState, useEffect } from "react";
import { Tweet, Profile } from "../types";

export interface DataContext { 
    tweets: Tweet[];
    profiles: Profile[];
    loadData: () => void;
    loading: boolean;
  }
  
  export const DataContext = createContext<DataContext>({tweets: [], profiles: [], loadData: () => {}, loading: false})
  
  export default function({children} : { children: React.ReactNode }) {
    const [tweets, setTweets] = useState<Tweet[]>([]);
    const [profiles, setProfiles] = useState<Profile[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
  
    const loadData = async() => {
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
      <DataContext.Provider value={{profiles, tweets, loading, loadData}}>
        {children}
      </DataContext.Provider>
    )
  }
  