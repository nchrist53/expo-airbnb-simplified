import { Stack } from "expo-router";

export default function MessagesRouter() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  ); 
}