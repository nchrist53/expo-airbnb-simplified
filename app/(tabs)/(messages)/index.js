import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useCallback, useEffect, useState } from "react";
import { FlatList, Image, Pressable, RefreshControl, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../../../constants/theme.js";
import { useMessagesStore } from "./store/useMessagesStore.js";


export default function MessagesScreen() {
    const router = useRouter();
    const messages = useMessagesStore((state) => state.messages);
    const fetchMessages = useMessagesStore((state) => state.fetchMessages);
    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = useCallback(async () => {
        setRefreshing(true);
        await fetchMessages;
        setRefreshing(false);
    }, []);

    useEffect(() => {
        try {
            fetchMessages;
        } catch (error) {
            console.error(error);
        }
    }, []);

    // Filtrer les messages pour n'afficher qu'un seul message (le dernier) par postId
    const filteredMessages = Object.values(
        messages.reduce((acc, message) => {
            acc[message.postId] = message;
            return acc;
        }, {})
    );

    return (
        <SafeAreaView style={styles.container}>
            <Image style={styles.logo} source={require("../../../assets/images/logo.png")} />
            <FlatList
                style={styles.messages}
                data={filteredMessages}
                keyExtractor={(item) => item.id}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                }
                renderItem={({ item }) => (
                    <View>
                        <Pressable
                            onPress={() => {
                                router.push({
                                    pathname: `(tabs)/(messages)/message`,
                                    params: { postId: item.postId },
                                });
                            }}
                        >
                            <View style={styles.messages.message}>
                                <MaterialIcons name="message" color="#ff5a5f" size={30} style={{ marginRight: 15 }} />
                                <View style={styles.messages.message.content}>
                                    <Text style={styles.messages.message.name} 
                                        numberOfLines={1}
                                        ellipsizeMode="tail">
                                        {item.name.split(" ")[0]} ({item.email})
                                    </Text>
                                    <Text
                                        style={styles.messages.message.body}
                                        numberOfLines={2}
                                        ellipsizeMode="tail"
                                    >
                                        {item.body}
                                    </Text>
                                </View>
                            </View>
                        </Pressable>
                    </View>
                )}
            />
        </SafeAreaView>
    );
}