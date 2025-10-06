import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs
        screenOptions={({ route }) => ({ 
            headerShown: false, 
            tabBarActiveTintColor: '#ff5a5f',
            tabBarInactiveTintColor: '#adadad',
            tabBarStyle: { backgroundColor: '#fff' },
            
        })}
    >
      <Tabs.Screen
        name="(explorer)"
        options={{
          title: 'Accueil',
          tabBarIcon: ({ color, size }) => <Ionicons name="home" color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name="(1profile)"
        options={{
          title: 'Profil',
          tabBarIcon: ({ color, size }) => <Ionicons name="person" color={color} size={size} />,
        }}
      />
    </Tabs>
  );
}