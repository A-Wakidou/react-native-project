import { Text, View } from 'react-native';
import Header from '../components/header.js';

const Account = ({navigation}) => {
    const goTo = (text) => {
        navigation.navigate('SearchScreen', { screen : 'Results', params: {query: text} })
    }
    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
            <Header goTo={goTo} />
            <Text>Hello account!</Text>
        </View>
    );
};

export default Account;