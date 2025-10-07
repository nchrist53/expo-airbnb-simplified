import { router } from "expo-router";
import { useEffect, useState } from "react";
import { Button, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ExoUseEffect() {
    const [count, setCount] = useState(0);
    function handleRandom() {
        const random = Math.floor(Math.random() * 11) - 5; // Génère un nombre entre -5 et +5
        if (random === 0) {
            handleRandom(); // Relance si le résultat est 0
        }
        _setCount(random);
    }

    function _setCount(value) {
        console.log("Valeur précédente:", count);
        setCount((count) => count + value);
    }

    useEffect(() => {
        if (count === 0) {
            console.log("Le compteur est à zéro.");
        } else if (count < 0) {
            console.log("Le compteur est négatif:", count);
        } else {
            console.log("Le compteur est positif:", count);
        }
    }, [count]);

    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ position: 'absolute', top: 10, left: 10 }}>
                <Button title="Retour au Playground" onPress={() => router.push("/playground")} />
            </View>
            <Text style={{ fontSize: 22, marginBottom: 30 }}>Exo useEffect</Text>
            <Text style={{ fontSize: 18, marginBottom: 20 }}>Compteur: {count}</Text>
            <View style={{ flexDirection: "row", gap: 10 }}>
                <View style={{ width: 45 }}>
                    <Button title="+1" onPress={() => _setCount(1)} color="#4CAF50" />
                </View>
                <View style={{ width: 45 }}>
                    <Button title="-1" onPress={() => _setCount(-1)} color="#F44336" />
                </View>
            </View>
            <View style={{ width: 100, marginTop: 10 }}>
                <Button title="GAMBLING" onPress={handleRandom} color="#9C27B0" />
            </View>
            <View style={{ width: 100, marginTop: 10 }}>
                <Button title="Reset" onPress={() => setCount(0)} color="#FFC107" />
            </View>
        </SafeAreaView>
    );
}