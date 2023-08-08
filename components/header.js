import { Image, View, TextInput } from 'react-native';
import { useState } from 'react'

const Header = (props) => {

    const [text, setText] = useState('')

    return (
        <View
            style={{
                position: props.mode == 'transparent' ? 'absolute' : 'normal',
                width: '100%',
                zIndex: 2,
                flexDirection: 'row',
                height: 110,
                backgroundColor: props.mode == 'transparent' ? 'transparent' : '#2D2D2D',
                padding: 20,
                alignItems: 'center',
            }}>
            <Image style={{ width: 60, height: 60 }} source={require('../assets/images/logo-blue-rounded.png')} />
            <TextInput onSubmitEditing={() => props.goTo(text)} onChangeText={(value) => setText(value)} style={{ marginLeft: 15, paddingLeft:10, width: '80%', height: 45, color: 'white', fontSize: 16, borderWidth: 1, borderRadius:5, borderColor:'whitesmoke' }} placeholder="Rechercher" placeholderTextColor="white" />
        </View>
    );
};

export default Header;