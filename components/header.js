import { Image, View, TextInput } from 'react-native';

const Header = () => {
    return (
        <View
            style={{
                flexDirection: 'row',
                height: 110,
                backgroundColor: '#2D2D2D',
                padding: 20,
                alignItems: 'center'
            }}>
            <Image style={{ width: 50, height: 50 }} source={require('../assets/images/logo-blue-rounded.svg')}/>
            <TextInput style={{ marginLeft: 10, width: '100%', fontSize: '0.8rem' }} placeholder="Rechercher" />
        </View>
    );
};

export default Header;