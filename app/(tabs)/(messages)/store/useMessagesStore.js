import { create } from "zustand";

export const useMessagesStore = create((set, get) => {
    const fetchMessages = async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/comments?_limit=30");
        const data = await response.json();
        set({ messages: data });
    };

    // Fetch messages immediately when the store is created
    fetchMessages();

    return {
        messages: [],
        fetchMessages,
        addMessage: (message) => set((state) => ({
            messages: [...state.messages, message]
        })),
        removeMessage: (id) => set((state) => ({
            messages: state.messages.filter(message => message.id !== id),
        })),
        getMessagesByPostId: (postId) => {
            const messages = get().messages || [];
            return messages.filter(message => Number(message.postId) === Number(postId));
        },
    };
});