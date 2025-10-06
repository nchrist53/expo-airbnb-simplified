import { Stack } from "expo-router";

export default function ExplorerRouter() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  ); 
}