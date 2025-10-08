import { Stack, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Button, Platform, ScrollView, Text, TextInput, View } from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../../../constants/theme.js";
import { useMessagesStore } from "./store/useMessagesStore.js";

export default function MessageDetail() {
    const { postId } = useLocalSearchParams();
    const getMessagesByPostId = useMessagesStore((state) => state.getMessagesByPostId);
    const messages = getMessagesByPostId(postId);
    const addMessage = useMessagesStore((state) => state.addMessage);
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        if (!messages || messages.length === 0) {
            console.warn("No messages found...");
        }
    }, [messages]);

    if (!messages || messages.length === 0) {
        return (
            <SafeAreaView style={[styles.container, styles.containerPadding]}>
                <Text>Aucun messages...</Text>
            </SafeAreaView>
        );
    }

    return (
        <>
            <Stack.Screen 
                options={{
                title: "Conversation n°" + postId || 'Conversation',
                }} 
            />
            <KeyboardAwareScrollView
                style={{ flex: 1 }}
                enableOnAndroid={true}
                extraScrollHeight={140}>

                <SafeAreaView style={[styles.container]}>
                    <ScrollView style={[styles.messages.conversation, { marginBottom: Platform.OS === 'web' ? 40 : 0 }]}>
                        {messages.map((message) => {
                            const isMyMessage = message.email === "moi@moi.fr";
                            return (
                                <View 
                                    key={message.id} 
                                    style={isMyMessage ? styles.messages.conversation.mymessage : styles.messages.conversation.message}
                                >
                                    <View style={isMyMessage ? styles.messages.conversation.mymessage.content : styles.messages.conversation.message.content}>
                                        <Text 
                                            style={isMyMessage ? styles.messages.conversation.mymessage.name : styles.messages.conversation.message.name} 
                                            numberOfLines={1}
                                            ellipsizeMode="tail"
                                        >
                                            {message.name.split(" ")[0]} ({message.email})
                                        </Text>
                                        <Text 
                                            style={isMyMessage ? styles.messages.conversation.mymessage.body : styles.messages.conversation.message.body}
                                        >
                                            {message.body}
                                        </Text>
                                    </View>
                                </View>
                            );
                        })}
                    </ScrollView>
                    <View style={{ flexDirection: 'row', alignItems: 'center', position: 'absolute', bottom: 0, left: 0, right: 0 }}>
                        <TextInput 
                            style={{ borderColor: "#ff5a5f", backgroundColor: "#fff", borderWidth: 1, height: 40, flex: 1, marginRight: 10, paddingHorizontal: 8 }}
                            value={inputValue}
                            onChangeText={setInputValue}
                            placeholder={`Votre message dans la discussion n°${postId}...`}
                        />
                        <Button 
                            title="Envoyer" 
                            color="#ff5a5f"
                            onPress={() => {
                                if (inputValue.trim()) {
                                    const newMessage = {
                                        id: Date.now(),
                                        postId: parseInt(postId),
                                        name: "Moi",
                                        email: "moi@moi.fr",
                                        body: inputValue.trim()
                                    };
                                    addMessage(newMessage);
                                    setInputValue('');
                                }
                            }} 
                        />
                    </View>
                </SafeAreaView>
            </KeyboardAwareScrollView>
        </>
    );
}