import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eceff1',
        margin: 10,
        borderRadius: 10,
        padding: 10,

    },
    image: {
        height: Dimensions.get('window').height / 4,
        width: '100%',
        borderRadius: 10,
        resizeMode: 'contain',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    innerContainer: {
        padding: 5
    },
    price: {
        fontSize: 16,
        paddingTop: 5,
        color: '#716F81',
        fontWeight: 'bold',
    },
    inStock: {
        color: 'red',
        marginTop: 5,
        textTransform: 'uppercase',
        fontWeight: 'bold',
        fontSize: 17,
    }
})