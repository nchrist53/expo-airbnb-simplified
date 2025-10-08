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

    messages: {
        flex: 1,
        width: "100%",
        paddingLeft: 20,
        paddingRight: 20,
        conversation: {
            flex: 1,
            width: "100%",
            paddingLeft: 10,
            paddingRight: 10,
            mymessage: {
                width: "75%",
                marginLeft: "25%",
                borderColor: "#ffefef",
                borderWidth: 1,
                borderRadius: 10,
                padding: 10,
                marginBottom: 10,
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: "#ff8c8f",
                content: {
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    flex: 1,
                },
                name: {
                    fontSize: 16,
                    fontWeight: "bold",
                    color: "#ffefef",
                    marginBottom: 5,
                    flex: 1,
                    flexWrap: "wrap",
                },
                body: {
                    fontSize: 12,
                    color: "#ffefef",
                    marginBottom: 5,
                },
            },
            message: {
                width: "75%",
                borderColor: "#ff8a8f",
                borderWidth: 1,
                borderRadius: 10,
                padding: 10,
                marginBottom: 10,
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: "#ffefef",
                content: {
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    flex: 1,
                },
                name: {
                    fontSize: 16,
                    fontWeight: "bold",
                    color: "#ff5a5f",
                    marginBottom: 5,
                    flex: 1,
                    flexWrap: "wrap",
                },
                body: {
                    fontSize: 12,
                    color: "#ff6b6f",
                    marginBottom: 5,
                },
            },
        },

        message: {
            borderColor: "#ff8c8f",
            borderWidth: 1,
            borderRadius: 10,
            padding: 10,
            marginBottom: 10,
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "#ffefef",
            content: {
                justifyContent: "flex-start",
                alignItems: "flex-start",
                flex: 1,
            },
            name: {
                fontSize: 16,
                fontWeight: "bold",
                color: "#ff5a5f",
                marginBottom: 5,
                flex: 1,
                flexWrap: "wrap",
            },
            body: {
                fontSize: 12,
                color: "#ff6b6f",
                marginBottom: 5,
            },
        },
    },
});