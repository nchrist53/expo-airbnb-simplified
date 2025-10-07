import { router } from "expo-router";
import { createContext, useContext, useState } from "react";
import { Button, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ThemeContext = createContext();

export default function ExoUseContext() {
    const [theme, setTheme] = useState('light');

    function toggleTheme() {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: theme === 'light' ? '#fff' : '#000'  }}>
                <Header />
                <View style={{ padding: 20 }}>
                    <Text style={{ color: theme === 'light' ? '#000' : '#fff' }}>Header - Thème: {theme}</Text>
                </View>
                <Footer />
            </SafeAreaView>
        </ThemeContext.Provider>
    );
}

function Header() {
    const { theme } = useContext(ThemeContext);
    return (
        <>
            <View style={{ position: 'absolute', top: 10, left: 10 }}>
                <Button title="Retour au Playground" onPress={() => router.push("/playground")} />
            </View>
            <Text style={{ fontSize: 22, marginBottom: 30, color: theme === 'light' ? '#000' : '#fff' }}>Exo useContext</Text>
        </>
    );
}

function Footer() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <View style={{ width: 200 }}>
            <Button title="Changer de thème" onPress={toggleTheme} color="#2196F3" />
        </View>
    );
}