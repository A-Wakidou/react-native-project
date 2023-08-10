import { Text, View, ScrollView, TouchableHighlight, Image, StyleSheet } from 'react-native';
import Header from '../components/header.js';

const styles = StyleSheet.create({
    cardTtitle: {
        fontWeight: 'bold',
        marginBottom: 5
    }
})

const Search = ({navigation}) => {
    return (
        <ScrollView
            style={{
                flex: 1,
            }}>
            <Header />
            <View style={{ flex: 1, margin: 20 }}>
                <View style={{ flexDirection: 'row', alignItems: 'start' }}>
                    <TouchableHighlight onPress={() => navigation.navigate('SearchScreen', {screen: 'Results', params: {category: 1} } )} style={{ flex: 1, marginRight: 10 }}>
                        <>
                            <Text style={styles.cardTtitle}>PC Gaming</Text>
                            <View style={{ backgroundColor: '#2d2d2d', borderRadius: 5, padding: 10, alignItems: 'center' }}>
                                <Image source={require('../assets/images/exPC.png')} resizeMode="contain" style={{ width: '100%', height: 100 }} />
                            </View>
                        </>
                    </TouchableHighlight>
                    <TouchableHighlight style={{ flex: 1, marginRight: 10 }} onPress={() => navigation.navigate('SearchScreen', {screen: 'Results', params: {category: 2} } )}>
                        <>
                            <Text style={styles.cardTtitle}>Ecrans</Text>
                            <View style={{ backgroundColor: '#2d2d2d', borderRadius: 5, padding: 10, alignItems: 'center' }}>
                                <Image source={require('../assets/images/exMonitor.png')} resizeMode="contain" style={{ width: '100%', height: 100 }} />
                            </View>
                        </>
                    </TouchableHighlight>
                    <TouchableHighlight style={{ flex: 1, }} onPress={() => navigation.navigate('SearchScreen', {screen: 'Results', params: {category: 3} } )}>                    
                        <>
                            <Text style={styles.cardTtitle}>Accessoires</Text>
                            <View style={{ backgroundColor: '#2d2d2d', borderRadius: 5, padding: 10, alignItems: 'center' }}>
                                <Image source={require('../assets/images/exEquipment.png')} resizeMode="contain" style={{ width: '100%', height: 100 }} />
                            </View>
                        </>
                    </TouchableHighlight>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 20 }}>
                    <TouchableHighlight style={{ flex: 2 }} onPress={() => navigation.navigate('SearchScreen', {screen: 'Results', params: {category: 4} } )}>
                        <>
                            <Text style={styles.cardTtitle}>Télévisions</Text>
                            <View style={{ backgroundColor: '#2d2d2d', borderRadius: 5, padding: 10, alignItems: 'center' }}>
                                <Image source={require('../assets/images/exTvMonitor2.png')} resizeMode="contain" style={{ width: '100%', height: 300 }} />
                            </View>
                        </>
                    </TouchableHighlight>
                    <View style={{ flex: 1, flexDirection: 'column', marginLeft: 10 }}>
                        <TouchableHighlight  style={{ flex: 1 }} onPress={() => navigation.navigate('SearchScreen', {screen: 'Results', params: {category: 5} } )}>
                            <>
                                <Text style={styles.cardTtitle}>Processeurs</Text>
                                <View style={{ backgroundColor: '#2d2d2d', borderRadius: 5, padding: 10, alignItems: 'center' }}>
                                    <Image source={require('../assets/images/exProcessor2.png')} resizeMode="contain" style={{ width: '100%', height: 125 }} />
                                </View>
                            </>
                        </TouchableHighlight>
                        <TouchableHighlight style={{ flex: 1 }} onPress={() => navigation.navigate('SearchScreen', {screen: 'Results', params: {category: 6} } )}>
                            <>
                                <Text style={styles.cardTtitle}>Alimentations</Text>
                                <View style={{ backgroundColor: '#2d2d2d', borderRadius: 5, padding: 10, alignItems: 'center' }}>
                                    <Image source={require('../assets/images/exAlim.png')} resizeMode="contain" style={{ width: '100%', height: 125 }} />
                                </View>
                            </>
                        </TouchableHighlight>
                    </View>
                </View>
                <View style={{ flex: 1, flexDirection: 'row', marginTop: 20 }}>
                    <View style={{ flex: 1 }}>
                        <Text style={styles.cardTtitle}>Notre Selection</Text>
                        <View style={{ backgroundColor: '#2d2d2d', borderRadius: 5, padding: 10, alignItems: 'center' }}>
                            <Image source={require('../assets/images/exSelection.png')} resizeMode="contain" style={{ width: '90%', height: 150 }} />
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};

export default Search;