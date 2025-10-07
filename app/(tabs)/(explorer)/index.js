import { SimpleLineIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { FlatList, Image, Pressable, RefreshControl, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../../../constants/theme.js";

import { useCallback, useEffect, useState } from "react";

export default function HomeScreen() {
    const router = useRouter();
    const [logements, setLogements] = useState([]);
    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = useCallback(async () => {
        setRefreshing(true);
        await fetchData();
        setRefreshing(false);
    }, []);

    const fetchData = async () => {
        const res = await fetch(
            "https://gist.githubusercontent.com/Fabsforce/a76097aa83d4f5d1b3c5c9868e2d51d3/raw/25d6501b6a6969268b47b489b32629f2d0eb223d/logements.json"
        );
        const data = await res.json();
        setLogements(data);
    };

    useEffect(() => {
        try {
            fetchData();
        } catch (error) {
            console.error(error);
        }
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <Image style={styles.logo} source={require("../../../assets/images/logo.png")}/>
            <FlatList style={styles.logements} 
                      data={logements} 
                      keyExtractor={(item) => item.id} 
                      refreshControl={
                        <RefreshControl
                            refreshing={refreshing}
                            onRefresh={onRefresh}
                        />
                      }
                      renderItem={({item}) => (
                <Pressable onPress={() => {
                        router.push({
                            pathname: `(tabs)/(explorer)/details`,
                            params: { id: item.id, title: item.title, prix: item.price, image: item.image, description: item.description, type: item.type, rating: item.rating, reviews: item.reviews, city: item.city },
                        });
                      }}>
                    <View style={styles.logements.logement}>
                        <View style={styles.logements.logement.imageContainer}>
                            <Image style={styles.logements.logement.imageContainer.image} source={{uri: item.image }}/>
                        </View>
                        <View style={styles.logements.logement.logementInfo}>
                            <View style={{ flexDirection: "row", alignItems: "flex-end", marginBottom: 5 }}>
                                <SimpleLineIcons name="location-pin" size={14} color="#ff7b7f" /><Text style={styles.logements.logement.logementInfo.city}>{item.city}</Text>
                            </View>
                            <Text style={styles.logements.logement.logementInfo.title}>{item.title}</Text>
                            <Text style={styles.logements.logement.logementInfo.prix}>
                                {item.price} € - {item.type}
                            </Text>
                            <Text style={styles.logements.logement.logementInfo.rating}>
                                {item.rating}/5 {renderStars(item.rating)} ({item.reviews} reviews)
                            </Text>
                            <Text style={styles.logements.logement.logementInfo.description}>{item.description}</Text>
                        </View>
                    </View>
                </Pressable>
            )} />
        </SafeAreaView>
    );

    function renderStars(rating) {
        const fullStar = "★";
        const halfStar = "★";
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