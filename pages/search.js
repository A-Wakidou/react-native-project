import { Text, View, ScrollView, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    cardTtitle: {
        fontFamily: 'Glory, serif',
        fontWeight: 'bold',
        marginBottom: '0.5rem'
    }
})

const Search = () => {
    return (
        <ScrollView
            style={{
                flex: 1,
                margin: 20
            }}>
            <View style={{ flex: 1, flexDirection: 'row' }}>
                <View style={{ flex: 1, marginRight: 10 }}>
                    <Text style={styles.cardTtitle}>Tours Gamer</Text>
                    <Image source={require('../assets/images/exPC.svg')} style={{ width: '100%', backgroundColor: '#2d2d2d', borderRadius: 5, height: 100 }} />
                </View>
                <View style={{ flex: 1, marginRight: 10 }}>
                    <Text style={styles.cardTtitle}>Ecrans</Text>
                    <Image source={require('../assets/images/exRam.svg')} style={{ width: '100%', backgroundColor: '#2d2d2d', borderRadius: 5, height: 100 }} />
                </View>
                <View style={{ flex: 1, }}>
                    <Text style={styles.cardTtitle}>Accessoires</Text>
                    <Image source={require('../assets/images/exRam.svg')} style={{ width: '100%', backgroundColor: '#2d2d2d', borderRadius: 5, height: 100 }} />
                </View>
            </View>
            <View style={{ flex: 1, flexDirection: 'row' }}>
                <View style={{ flex: 1 }}>
                    <Text style={styles.cardTtitle}>Tours Gamer</Text>
                    <Image source={require('../assets/images/exPC.svg')} style={{ width: '100%', backgroundColor: '#2d2d2d', borderRadius: 5, height: 200 }} />
                </View>
                <View style={{ flex: 1, flexDirection: 'column', marginLeft: 10 }}>
                    <View style={{ flex: 1 }}>
                        <Text style={styles.cardTtitle}>Ecrans</Text>
                        <Image source={require('../assets/images/exRam.svg')} style={{ width: '100%', backgroundColor: '#2d2d2d', borderRadius: 5, height: 90 }} />
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={styles.cardTtitle}>Ecrans</Text>
                        <Image source={require('../assets/images/exRam.svg')} style={{ width: '100%', backgroundColor: '#2d2d2d', borderRadius: 5, height: 90 }} />
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};

export default Search;