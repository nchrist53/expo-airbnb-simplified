import { SimpleLineIcons } from "@expo/vector-icons";
import { Stack, useLocalSearchParams } from 'expo-router';
import { Image, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../../../constants/theme.js';

export default function ExplorerDetail() {
  const { id, title, prix, image, description, type, rating, reviews, city } = useLocalSearchParams();

  return (
    <>
      <Stack.Screen 
        options={{
          title: title + " - Détails" || 'Détails du logement',
        }} 
      />
      <SafeAreaView style={[styles.container, styles.containerPadding]} >
        <Image source={{ uri: image }} style={{ width: 300, height: 300, marginBottom: 20 }} />
        <View style={styles.logements.logement.logementInfo}>
            <View style={{ flexDirection: "row", alignItems: "flex-end", marginBottom: 5 }}>
                <SimpleLineIcons name="location-pin" size={14} color="#ff7b7f" /><Text style={styles.logements.logement.logementInfo.city}>{city}</Text>
            </View>
            <Text style={styles.logements.logement.logementInfo.title}>{title}</Text>
            <Text style={styles.logements.logement.logementInfo.prix}>{prix} € - {type}</Text>
            <Text style={styles.logements.logement.logementInfo.rating}>
                {rating}/5 {renderStars(rating)} ({reviews} reviews)
            </Text>
            <Text style={styles.logements.logement.logementInfo.description}>{description}</Text>
        </View>
      </SafeAreaView>
    </>
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