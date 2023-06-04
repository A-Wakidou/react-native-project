import { Text, View, Image, ImageBackground, StyleSheet, FlatList, ScrollView } from 'react-native';
import ProductCard from '../components/productCard';
import Header from '../components/header.js';

const styles = StyleSheet.create({
    cardContainer: {
        height: 125,
        flexDirection: 'row',
        position: 'absolute',
        top: 300,
        left: 0,
        right: 0,
        marginLeft: 'auto',
        marginRight: 'auto',
        width: 302
    },
    card: {
        flex: 1,
        width: 100,
        backgroundColor: '#2D2D2D',
        textAlign: 'center',
        shadowColor: '#2D2D2D',
        marginRight: 1,
        borderRadius: 5,
        padding: 6,
        alignItems: 'center'
    },
    cardText: {
        color: 'white',
        marginBottom: 10,
        fontSize: '0.7rem',
        fontWeight: 'bold'
    },
    section: {
        flex: 1,
    },
    productsSection: {
        flex: 1,
        marginTop: 40,
        marginLeft: 20,
    },
    productsSectionTitle: {
        fontSize: '1.5rem',
        fontWeight: 'bold',
        marginBottom: 10
    },
    brandSection: {
        padding: 20
    }
})

const response = [
    {
        path: require('../assets/images/exTvMonitor.svg'),
        title: 'Samsung Crystal UHD',
        price: '699.99'
    },
    {
        path: require('../assets/images/exProcessor.svg'),
        title: 'Intel i7 10400 8x4.4Ghz',
        price: '199.99'
    },
    {
        path: require('../assets/images/exRam.svg'),
        title: 'Hyper X SDRAM - 16g',
        price: '59.99'
    },
    {
        path: require('../assets/images/exRam.svg'),
        title: 'Hyper XX SDRAM - 16g',
        price: '59.99'
    }
]

const response2 = [
    {
        path: require('../assets/images/exPC.svg'),
        title: 'Samsung Crystal UHD',
        price: '699.99'
    },
    {
        path: require('../assets/images/exMouse.svg'),
        title: 'Intel i7 10400 8x4.4Ghz',
        price: '199.99'
    },
    {
        path: require('../assets/images/exTvMonitor.svg'),
        title: 'Hyper X SDRAM - 16g',
        price: '59.99'
    },
    {
        path: require('../assets/images/logo-blue-rounded.svg'),
        title: 'Hyper XX SDRAM - 16g',
        price: '59.99'
    }
]

const Home = ({ navigation }) => {
    function goTo(text) {
        navigation.navigate('Results', { query: text })
    }
    return (
        <ScrollView
            style={{
                flex: 1
            }}>
            <Header mode='transparent' goTo={goTo} />
            <ImageBackground source={require('../assets/images/home-header.svg')} resizeMode="cover" style={{ width: '100%', height: 400 }}>
                <View style={styles.cardContainer}>
                    <View style={styles.card}>
                        <Text style={styles.cardText}>Reprendre vos achats</Text>
                        <Image style={{ width: 50, height: 60 }} source={require('../assets/images/exMonitor.svg')} />
                    </View>
                    <View style={styles.card}>
                        <Text style={styles.cardText}>Sélectionnés pour vous</Text>
                        <Image style={{ width: 50, height: 60 }} source={require('../assets/images/exEquipment.svg')} />
                    </View>
                    <View style={styles.card}>
                        <Text style={styles.cardText}>Acheter à nouveau</Text>
                        <Image style={{ width: 50, height: 60 }} source={require('../assets/images/exMouse.svg')} />
                    </View>
                </View>
            </ImageBackground>
            <View style={styles.productsSection}>
                <Text style={styles.productsSectionTitle}>Top produits</Text>
                <FlatList horizontal={true} style={{ width: '100%' }} data={response} keyExtractor={response => response.title} renderItem={ProductCard} />
            </View>
            <View style={styles.productsSection}>
                <Text style={styles.productsSectionTitle}>Tendance</Text>
                <FlatList horizontal={true} style={{ width: '100%' }} data={response2} keyExtractor={response => response.title} renderItem={ProductCard} />
            </View>
            <View style={styles.brandSection}>
                <Text style={styles.productsSectionTitle}>Razer</Text>
                <View style={{ backgroundColor: '#2d2d2d', borderRadius: 5, marginBottom: '1rem' }}>
                    <Image source={require('../assets/images/exEquipment.svg')} resizeMode='contain' style={{ width: '100%', height: 200 }} />
                </View>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <View style={{ flex: 1, backgroundColor: '#2d2d2d', borderRadius: 5, marginRight: 1, padding: 10, alignItems: 'center' }}>
                        <Image source={require('../assets/images/exPC.svg')} resizeMode='contain' style={{ width: '60%', height: 150 }} />
                    </View>
                    <View style={{ flex: 1, backgroundColor: '#2d2d2d', borderRadius: 5, padding: 10, alignItems: 'center' }}>
                        <Image source={require('../assets/images/exRam.svg')} resizeMode='contain' style={{ width: '70%', height: 150 }} />
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};

export default Home;