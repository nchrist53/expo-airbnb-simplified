import { router } from "expo-router";
import { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTaskStore } from "./store/useTaskStore";


export default function Task() {
    const tasks = useTaskStore((state) => state.tasks);
    const addTask = useTaskStore((state) => state.addTask);
    const toggleTask = useTaskStore((state) => state.toggleTask);
    const removeTask = useTaskStore((state) => state.removeTask);
    const removeAllTasks = useTaskStore((state) => state.removeAllTasks);

    const [inputValue, setInputValue] = useState('');

    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
            <View style={{ position: 'absolute', top: 10, left: 10 }}>
                <Button title="Retour au Playground" onPress={() => router.push("/playground")} />
            </View>
            <Text style={{ fontSize: 22, marginBottom: 30 }}>Exo Zustand</Text>
            {tasks.map((task) => (
                <View key={task.id} style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                    <Text style={{ textDecorationLine: task.completed ? 'line-through' : 'none', fontStyle: task.completed ? 'italic' : 'normal', fontWeight: task.completed ? 'normal' : 'bold', marginRight: 10 }}>
                        {task.task}
                    </Text>
                    <Button title={task.completed ? "FINI" : "A FAIRE"} onPress={() => toggleTask(task.id)} color={task.completed ? "#4CAF50" : "#8F8F8F"} />
                    <View style={{ marginLeft: 10 }}>
                        <Button title="SUPPRIMER" onPress={() => removeTask(task.id)} color="#F44336" />
                    </View>
                </View>
            ))}
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20, marginBottom: 20 }}>
                <TextInput 
                    style={{ borderColor: "black", borderWidth: 1, height: 40, flex: 1, marginRight: 10, paddingHorizontal: 8 }}
                    value={inputValue}
                    onChangeText={setInputValue}
                    placeholder="Enter a task..."
                />
                <Button 
                    title="Add Task" 
                    onPress={() => {
                        if (inputValue.trim()) {
                            addTask(inputValue);
                            setInputValue('');
                        }
                    }} 
                />
            </View>
            <Button title="TOUT SUPPRIMER" onPress={() => removeAllTasks()} color="#8d1108" />
        </SafeAreaView>
    );
}