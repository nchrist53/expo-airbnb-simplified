import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../../constants/theme.js";

export default function ProfileApp() {
    return (
        <SafeAreaView style={styles.container}>
            <Text>Profile Screen</Text>
        </SafeAreaView>
    );
}

