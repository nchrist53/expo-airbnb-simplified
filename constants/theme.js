import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "top",
    },

    containerPadding: {
        paddingLeft: 20,
        paddingRight: 20,
    },

    containerTop: {
        paddingTop: 20,
    },

    logo: {
        width: 200,
        height: 50,
        marginTop: 20,
        resizeMode: "contain",
        marginBottom: 20,
    },

    profile: {
        profileImage: {
            borderRadius: 99999999,
            borderWidth: 3,
            borderColor: "#ff5a5f",
        },
    },

    logements: {
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
                width: "45%",
                marginRight: 10,
                image: {
                    width: "100%",
                    height: 200,
                    marginRight: 10,
                    borderRadius: 5,
                },
            },

            logementInfo: {
                height: 200,
                justifyContent: "flex-start",
                alignItems: "flex-start",
                flex: 1,
                flexWrap: "wrap",
                title: {
                    fontSize: 20,
                    fontWeight: "bold",
                    marginBottom: 5,
                    textAlign: "left",
                    color: "#ff5a5f",
                },

                prix: {
                    fontSize: 18,
                    color: "#ff9c9f",
                    textAlign: "left",
                },

                city: {
                    fontSize: 14,
                    color: "#ff7b7f",
                    textAlign: "left",
                    marginLeft: 3,
                },

                rating: {
                    fontSize: 14,
                    color: "#ff7b7f",
                    textAlign: "left",
                    marginTop: 5,
                },

                description: {
                    fontSize: 14,
                    color: "#ff6b6f",
                    textAlign: "left",
                    marginTop: 10,
                },
            },
        },
    },
});