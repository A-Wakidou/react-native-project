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
                margin: 20,
            }}>
            <View style={{ flexDirection: 'row', alignItems:'start' }}>
                <View style={{ flex: 1, marginRight: 10 }}>
                    <Text style={styles.cardTtitle}>Tours Gamer</Text>
                    <View style={{backgroundColor: '#2d2d2d', borderRadius: 5, padding: 10, alignItems: 'center'}}>
                        <Image source={require('../assets/images/exPC.svg')} resizeMode="contain" style={{ width: '100%', height:100 }} />
                    </View>
                </View>
                <View style={{ flex: 1, marginRight: 10 }}>
                    <Text style={styles.cardTtitle}>Ecrans</Text>
                    <View style={{backgroundColor: '#2d2d2d', borderRadius: 5, padding: 10, alignItems: 'center'}}>
                        <Image source={require('../assets/images/exMonitor.svg')} resizeMode="contain" style={{ width: '100%', height: 100 }} />
                    </View>
                </View>
                <View style={{ flex: 1, }}>
                    <Text style={styles.cardTtitle}>Accessoires</Text>
                    <View style={{backgroundColor: '#2d2d2d', borderRadius: 5, padding: 10, alignItems: 'center'}}>
                        <Image source={require('../assets/images/exEquipment.svg')} resizeMode="contain" style={{ width: '100%', height: 100 }} />
                    </View>
                </View>
            </View>
            <View style={{ flexDirection: 'row', marginTop:20 }}>
                <View style={{ flex: 2 }}>
                    <Text style={styles.cardTtitle}>Tours Gamer</Text>
                    <View style={{backgroundColor: '#2d2d2d', borderRadius: 5, padding: 10, alignItems: 'center'}}>
                        <Image source={require('../assets/images/exPC.svg')} resizeMode="contain" style={{ width: '100%', height:300 }} />
                    </View>
                </View>
                <View style={{ flex: 1, flexDirection: 'column', marginLeft: 10 }}>
                    <View style={{ flex: 1 }}>
                        <Text style={styles.cardTtitle}>Processeurs</Text>
                        <View style={{backgroundColor: '#2d2d2d', borderRadius: 5, padding: 10, alignItems: 'center'}}>
                            <Image source={require('../assets/images/exProcessor2.svg')} resizeMode="contain" style={{ width: '100%', height: 125 }} />
                        </View>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={styles.cardTtitle}>Alimentations</Text>
                        <View style={{backgroundColor: '#2d2d2d', borderRadius: 5, padding: 10, alignItems: 'center'}}>
                            <Image source={require('../assets/images/exAlim.svg')} resizeMode="contain" style={{ width: '100%', height: 125 }} />
                        </View>
                    </View>
                </View>
            </View>
            <View style={{ flex: 1, flexDirection: 'row', marginTop:20 }}>
                <View style={{ flex: 1 }}>
                    <Text style={styles.cardTtitle}>Notre Selection</Text>
                    <View style={{backgroundColor: '#2d2d2d', borderRadius: 5, padding: 10, alignItems: 'center'}}>
                        <Image source={require('../assets/images/exSelection.svg')} resizeMode="contain" style={{ width: '100%', height:150 }} />
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};

export default Search;