import { FlatList, Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../../constants/theme.js";

export default function HomeScreen() {
    let logements = [];

    logements.push({
        id: 1,
        title: "Appartement cosy",
        prix: 120,
        image: "https://picsum.photos/200/200?random=1",
    });
    logements.push({
        id: 2,
        title: "Studio moderne",
        prix: 90,
        image: "https://picsum.photos/200/200?random=2",
    });
    logements.push({
        id: 3,
        title: "Loft lumineux",
        prix: 150,
        image: "https://picsum.photos/200/200?random=3",
    });
    logements.push({
        id: 4,
        title: "Chambre avec vue",
        prix: 110,
        image: "https://picsum.photos/200/200?random=4",
    });

    return (
        <SafeAreaView style={styles.container}>
            <Image style={styles.logo} source={require("../../assets/images/logo.png")}/>
            <FlatList style={styles.logements} 
                      data={logements} 
                      keyExtractor={(item) => item.id} 
                      renderItem={({item}) => (
                <View style={styles.logements.logement}>
                    <View style={styles.logements.logement.imageContainer}>
                        <Image style={styles.logements.logement.imageContainer.image} source={{uri: item.image }}/>
                    </View>
                    <View style={styles.logements.logement.logementInfo}>
                        <Text style={styles.logements.logement.title}>{item.title}</Text>
                        <Text style={styles.logements.logement.prix}>{item.prix} €</Text>
                    </View>
                </View>
            )} />
        </SafeAreaView>
    );
}