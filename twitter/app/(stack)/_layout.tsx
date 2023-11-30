import { Stack } from 'expo-router';
import { createContext, useEffect, useState } from 'react';
import { Profile, Tweet } from '../../types';
import Drawer from 'expo-router/drawer';


export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerTransparent: true,
        headerTintColor: "white",
        animation: "slide_from_right"
      }}
    >
      <Stack.Screen
        name="(tabs)"
        options={{
          headerStyle: {
            backgroundColor: "#1DA1F2"
          },
          title: 'Home',
        }}
      />
    </Stack>
  );
}