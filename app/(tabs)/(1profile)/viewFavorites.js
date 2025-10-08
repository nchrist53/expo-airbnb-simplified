import { FontAwesome, SimpleLineIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { FlatList, Image, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFavoritesStore } from "../(explorer)/store/useFavoritesStore.js";
import { styles } from "../../../constants/theme.js";


export default function FavoritesScreen() {
    const router = useRouter();
    const favorites = useFavoritesStore((state) => state.favorites);
    const removeFavorites = useFavoritesStore((state) => state.removeFavorites);

    const handleFavorite = (id) => {
        removeFavorites(id);
    };

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                style={styles.logements}
                data={favorites}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View>
                        <Pressable
                            style={{ position: "absolute", zIndex: 1, right: 20, top: 25 }}
                            onPress={() => {
                                handleFavorite(item.id);
                            }}
                        >
                            <FontAwesome name="heart" size={24} color="#ff5a5f" />
                        </Pressable>
                        <Pressable
                            onPress={() => {
                                router.push({
                                    pathname: '../(explorer)/details',
                                    params: { id: item.id, title: item.title, prix: item.price, image: item.image, description: item.description, type: item.type, rating: item.rating, reviews: item.reviews, city: item.city },
                                });
                            }}
                        >
                            <View style={styles.logements.logement}>
                                <View style={styles.logements.logement.imageContainer}>
                                    <Image style={styles.logements.logement.imageContainer.image} source={{ uri: item.image }} />
                                </View>
                                <View style={styles.logements.logement.logementInfo}>
                                    <View style={{ flexDirection: "row", alignItems: "flex-end", marginBottom: 5 }}>
                                        <SimpleLineIcons name="location-pin" size={14} color="#ff7b7f" />
                                        <Text style={styles.logements.logement.logementInfo.city}>{item.city}</Text>
                                    </View>
                                    <Text style={styles.logements.logement.logementInfo.title}>{item.title}</Text>
                                    <Text style={styles.logements.logement.logementInfo.prix}>
                                        {item.price} € - {item.type}
                                    </Text>
                                    <Text style={styles.logements.logement.logementInfo.rating}>
                                        {item.rating}/5 {renderStars(item.rating)} ({item.reviews} avis)
                                    </Text>
                                    <Text style={styles.logements.logement.logementInfo.description}>{item.description}</Text>
                                </View>
                            </View>
                        </Pressable>
                    </View>
                )}
            />
        </SafeAreaView>
    );

    function renderStars(rating) {
        const fullStar = "★";
        const halfStar = "⯪";
        const emptyStar = "☆";
        const stars = [];

        for (let i = 1; i <= 5; i++) {
            if (i <= Math.floor(rating)) {
                stars.push(fullStar);
            } else if (i === Math.ceil(rating) && rating % 1 !== 0) {
                stars.push(halfStar);
            } else {
                stars.push(emptyStar);
            }
        }

        return stars.join("");
    }
}
