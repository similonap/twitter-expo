import { Stack } from 'expo-router';
import { createContext, useContext, useEffect, useState } from 'react';
import { Profile, Tweet } from '../types';
import Drawer from 'expo-router/drawer';
import DataProvider, { DataContext } from '../components/DataProvider';

function StackLayout() {
  const { darkMode } = useContext(DataContext);

  return (
    <Stack
        screenOptions={{
          contentStyle: {
            backgroundColor: darkMode ? "black" : "#f5f5f5"
          },
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
  )
}

export default function Layout() {

  return (
    <DataProvider>
        <StackLayout/>
    </DataProvider>
  );
}