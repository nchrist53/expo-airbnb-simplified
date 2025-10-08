import { CameraView, useCameraPermissions } from "expo-camera";
import { router } from "expo-router";
import { Button, Text, View } from "react-native";

export default function ExoCamera() {
    const [permission, requestPermission] = useCameraPermissions();

    if (!permission) return <View />;
    if (!permission.granted) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ position: 'absolute', top: 10, left: 10 }}>
                    <Button title="Retour au Playground" onPress={() => router.push("/playground")} />
                </View>
                <Text style={{ fontSize: 22, marginBottom: 30 }}>Exo Camera</Text>
                <View>
                    <Text>We need your permission to show the camera</Text>
                    <Button onPress={requestPermission} title="Autoriser" />
                </View>
            </View>
        );
    }

    const takePhoto = async () => {
        if (cameraRef) {
            const photo = await cameraRef.takePictureAsync();
            router.push({
                pathname: "/photo/photo-preview/",
                params: { uri: photo.uri }
            });
        }
    };

    let cameraRef;

    return ( 
        <>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ position: 'absolute', top: 10, left: 10 }}>
                    <Button title="Retour au Playground" onPress={() => router.push("/playground")} />
                </View>
                <Text style={{ fontSize: 22 }}>Exo Camera</Text>
            </View>
            <CameraView 
                style={{ flex: 4 }} 
                ref={(ref) => { cameraRef = ref; }}
            />
            <View style={{ position: 'absolute', bottom: 50, alignSelf: 'center' }}>
                <Button 
                    title="Prendre une photo" 
                    onPress={takePhoto} 
                />
            </View>
        </>
    );
}