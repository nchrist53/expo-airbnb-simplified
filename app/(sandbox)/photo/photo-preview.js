import { router, useLocalSearchParams } from "expo-router";
import { Button, Image, Text, View } from "react-native";

export default function PhotoPreview() {
    const { uri } = useLocalSearchParams();

    return (
        console.log(uri),
        <>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ position: 'absolute', top: 10, left: 10 }}>
                    <Button title="Reprendre une photo" onPress={() => router.back()} />
                </View>
                <Text style={{ fontSize: 22 }}>Exo Camera</Text>
            </View>
            <Image 
                source={{ uri }} 
                style={{ flex: 4 }} 
                resizeMode="contain" 
            />
        </>
    );
}