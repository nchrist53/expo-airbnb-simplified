import { Image, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../../../constants/theme.js";

export default function Profile() {
    return (
        <SafeAreaView style={[styles.container, styles.containerTop, styles.containerPadding]}>
            <Image source={{ uri: "https://picsum.photos/300/300?random=99999" }} style={[{ width: 300, height: 300, marginBottom: 20 }, styles.profile.profileImage]} />
            <Text>John Doe</Text>
        </SafeAreaView>
    );
}