import { Text, View, ScrollView } from 'react-native';
import Header from '../components/header.js';

const Purchase = ({navigation}) => {
    const goTo = (text) => {
        navigation.navigate('SearchScreen', { screen : 'Results', params: {query: text} })
    }
    return (
        <ScrollView
        style={{
          flex: 1,
        }}>
            <Header goTo={goTo} />
            <Text style={{margin: '1rem', fontSize: '1.2rem', fontWeight:'bold'}}>Informations complémentaires : </Text>
            <Text>Hello Purchase!</Text>
        </ScrollView>
    );
};

export default Purchase;