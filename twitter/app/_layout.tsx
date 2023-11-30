import { Stack } from 'expo-router';
import { createContext, useEffect, useState } from 'react';
import { Profile, Tweet } from '../types';
import Drawer from 'expo-router/drawer';
import DataProvider from '../components/DataProvider';


export default function Layout() {
  return (
    <DataProvider>
      <Stack
        screenOptions={{
          headerTintColor: "white",
          animation: "slide_from_right"
        }}
      >
        <Stack.Screen
          name="(drawer)"
          options={{
            headerShown: false,
            title: 'Home',
          }}
        />
      </Stack>
    </DataProvider>
  );
}