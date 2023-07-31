import { StyleSheet } from "react-native";


const HeaderStyle = StyleSheet.create ({
    carHeader: {
        marginTop: 50,
        marginLeft: 20,
        marginRight: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom:10

    },

    headerTitle: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
        alignItems: "center",
        justifyContent: "center"

    },

    icon: {
        color: "white"

    }
})

export default HeaderStyle;
