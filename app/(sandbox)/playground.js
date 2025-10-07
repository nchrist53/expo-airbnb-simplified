import { router } from 'expo-router';
import { Button, Text, View } from 'react-native';

export default function Playground() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
        <Text style={{ fontSize: 22, marginBottom: 30 }}>Sandbox</Text>

        <Button title="Exo 1 - useState" onPress={() => router.push('/(sandbox)/exo-useState')} />
        <Button title="Exo 2 - useEffect" onPress={() => router.push('/(sandbox)/exo-useEffect')} />
        <Button title="Exo 3 - useContext" onPress={() => router.push('/(sandbox)/exo-useContext')} />
        <Button title="Exo 4 - Zustand" onPress={() => router.push('/(sandbox)/exo-zustand')} />
        <Button title="Exo 5 - Formulaire" onPress={() => router.push('/(sandbox)/exo-formulaire')} />
    </View>
  )
}