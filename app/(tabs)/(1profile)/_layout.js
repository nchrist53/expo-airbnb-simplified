import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { Drawer } from "expo-router/drawer";

export default function DrawerLayout() {
  return (
    <Drawer
        screenOptions={{
            headerShown: true,
            drawerActiveTintColor: '#ff5a5f',
            drawerInactiveTintColor: '#777777',
            drawerStyle: { width: 250 }
        }}
    >
      <Drawer.Screen 
        name="index" 
        options={{ 
          title: 'Mon Profil',
          drawerIcon: ({ color, size }) => <Ionicons name="person" color={color} size={size} />
        }} />
      <Drawer.Screen 
        name="settings" 
        options={{
          title: 'Paramètres',
          drawerIcon: ({ color, size }) => <Ionicons name="settings" color={color} size={size} />
        }} />
      <Drawer.Screen 
        name="viewFavorites" 
        options={{
          title: 'Favoris (W.I.P.)',
          drawerIcon: ({ color, size }) => <FontAwesome name="heart" color={color} size={size} />
        }} />
    </Drawer>
  );
}

