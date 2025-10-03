import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "top",
    },

    logo: {
        width: 200,
        height: 50,
        marginTop: 20,
        resizeMode: "contain",
        marginBottom: 20,
    },

    logements: {
        marginBottom: 50,
        marginLeft: 10,
        marginRight: 10,
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