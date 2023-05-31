import { Image, View, TextInput } from 'react-native';
import {useState} from 'react'

const Header = ({navigation}) => {

    const [text, setText] = useState('')

    function handleChange(event) {
        setText(event.target.value);
    }

    function submit() {
        navigation.navigate('Results', {query: text})
    }

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
            <TextInput onSubmitEditing={submit} onChange={handleChange} style={{ marginLeft: 10, width: '100%', fontSize: '0.8rem' }} placeholder="Rechercher" />
        </View>
    );
};

export default Header;