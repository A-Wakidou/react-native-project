import { Text, View } from 'react-native';
import Header from '../components/header.js';

const Cart = () => {
    function goTo(text) {
        navigation.navigate('Results', { query: text })
    }
    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
            <Header goTo={goTo} />
            <Text>Hello Cart!</Text>
        </View>
    );
};

export default Cart;