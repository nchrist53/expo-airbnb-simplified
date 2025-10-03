import { FlatList, Image, StyleSheet, Text, View } from "react-native";

export default function App() {
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
        <View style={styles.container}>
            <Image style={styles.logo} source={require("../assets/images/logo.png")}/>
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
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "top",
        marginTop: 50,
        marginBottom: 50,
        marginLeft: 10,
        marginRight: 10,
    },

    logo: {
        width: 200,
        height: 50,
        marginTop: 20,
        resizeMode: "contain",
        marginBottom: 20,
    },

    logements: {
        width: "100%",        
        logement: {
            borderColor: "#ff8c8f",
            borderWidth: 1,
            borderRadius: 10,
            padding: 10,
            marginTop: 20,
            marginLeft: 10,
            marginRight: 10,
            backgroundColor: "#ffefef",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",

            imageContainer: {
                width: 50,
                marginRight: 10,
                image: {
                    width: 50,
                    height: 50,
                    marginRight: 10,
                    borderRadius: 5,
                },
            },

            title: {
                fontSize: 20,
                fontWeight: "bold",
                marginBottom: 5,
                textAlign: "left",
                color: "#ff5a5f",
            },

            prix: {
                fontSize: 20,
                color: "#ff8c8f",
                textAlign: "left",
            },
        },
    },
});