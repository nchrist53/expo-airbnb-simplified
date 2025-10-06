import { useRouter } from "expo-router";
import { FlatList, Image, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../../../constants/theme.js";

export default function HomeScreen() {
    const router = useRouter();
    let logements = [];

    logements.push({
        id: 1,
        title: "Appartement cosy",
        prix: 120,
        image: "https://picsum.photos/300/300?random=1",
        description: "Un appartement chaleureux et confortable, idéal pour un séjour en ville."
    });
    logements.push({
        id: 2,
        title: "Studio moderne",
        prix: 90,
        image: "https://picsum.photos/300/300?random=2",
        description: "Studio moderne avec équipements récents, parfait pour les voyageurs solo."
    });
    logements.push({
        id: 3,
        title: "Loft lumineux",
        prix: 150,
        image: "https://picsum.photos/300/300?random=3",
        description: "Loft spacieux et lumineux avec de grandes fenêtres."
    });
    logements.push({
        id: 4,
        title: "Chambre avec vue",
        prix: 110,
        image: "https://picsum.photos/300/300?random=4",
        description: "Chambre confortable offrant une vue imprenable sur la ville."
    });
    logements.push({
        id: 5,
        title: "Maison familiale",
        prix: 200,
        image: "https://picsum.photos/300/300?random=5",
        description: "Grande maison idéale pour les familles, avec jardin privatif."
    });
    logements.push({
        id: 6,
        title: "Appartement en centre-ville",
        prix: 130,
        image: "https://picsum.photos/300/300?random=6",
        description: "Appartement situé en plein centre, proche de toutes commodités."
    });
    logements.push({
        id: 7,
        title: "Studio calme",
        prix: 85,
        image: "https://picsum.photos/300/300?random=7",
        description: "Studio paisible dans un quartier résidentiel."
    });
    logements.push({
        id: 8,
        title: "Villa avec piscine",
        prix: 300,
        image: "https://picsum.photos/300/300?random=8",
        description: "Superbe villa avec piscine privée et terrasse ensoleillée."
    });
    logements.push({
        id: 9,
        title: "Appartement design",
        prix: 160,
        image: "https://picsum.photos/300/300?random=9",
        description: "Appartement au design contemporain, très bien équipé."
    });
    logements.push({
        id: 10,
        title: "Chambre économique",
        prix: 60,
        image: "https://picsum.photos/300/300?random=10",
        description: "Chambre simple et économique, idéale pour les petits budgets."
    });

    return (
        <SafeAreaView style={styles.container}>
            <Image style={styles.logo} source={require("../../../assets/images/logo.png")}/>
            <FlatList style={styles.logements} 
                      data={logements} 
                      keyExtractor={(item) => item.id} 
                      renderItem={({item}) => (
                <Pressable onPress={() => {
                        router.push({
                            pathname: `(tabs)/(explorer)/details`,
                            params: { id: item.id, title: item.title, prix: item.prix, image: item.image, description: item.description}
                        });
                      }}>
                    <View style={styles.logements.logement}>
                        <View style={styles.logements.logement.imageContainer}>
                            <Image style={styles.logements.logement.imageContainer.image} source={{uri: item.image }}/>
                        </View>
                        <View style={styles.logements.logement.logementInfo}>
                            <Text style={styles.logements.logement.logementInfo.title}>{item.title}</Text>
                            <Text style={styles.logements.logement.logementInfo.prix}>{item.prix} €</Text>
                            <Text style={styles.logements.logement.logementInfo.description}>{item.description}</Text>
                        </View>
                    </View>
                </Pressable>
            )} />
        </SafeAreaView>
    );
}