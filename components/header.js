import { Image, View, TextInput } from 'react-native';
import { useState } from 'react'

const Header = (props) => {

    const [text, setText] = useState('')

    function handleChange(event) {
        setText(event.target.value);
    }

    return (
        <View
            style={{
                position: props.mode == 'transparent' ? 'fixed' : 'normal',
                width: '100%',
                zIndex: 2,
                flexDirection: 'row',
                height: 110,
                backgroundColor: props.mode == 'transparent' ? 'transparent' : '#2D2D2D',
                padding: 20,
                alignItems: 'center'
            }}>
            <Image style={{ width: 50, height: 50 }} source={require('../assets/images/logo-blue-rounded.svg')} />
            <TextInput onSubmitEditing={() => props.goTo(text)} onChange={handleChange} style={{ marginLeft: 10, width: '100%', fontSize: '0.8rem' }} placeholder="Rechercher" />
        </View>
    );
};

export default Header;