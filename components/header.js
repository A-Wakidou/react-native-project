import { Image, View, TextInput, TouchableHighlight } from 'react-native';
import { useState, useEffect } from 'react'
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';

const Header = (props) => {

    const [text, setText] = useState('')
    const [canGoBack,setCanGoBack] = useState(false)
    const route = useRoute()
    const navigation = useNavigation()
    useEffect( () => {
        if(route.name == 'Home' ||  route.name == 'Search' || route.name == 'Cart' || route.name == 'Account') {
            setCanGoBack(false)
        }
        else {
            setCanGoBack(true)
        }
    }, [])
    const goTo = (text) => {
        navigation.navigate('SearchScreen', { screen: 'Results', params: { query: text } })
    }
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
            { canGoBack ? (<TouchableHighlight onPress={() => navigation.goBack()}>
                    <Image style={{ width: 24, height: 24 }} source={require('../assets/images/arrow-back-white.png')} />
                </TouchableHighlight>
            ) : null}
            <Image style={{ width: 60, height: 60, marginLeft:15 }} source={require('../assets/images/logo-blue-rounded.png')} />
            <TextInput onSubmitEditing={() => goTo(text)} onChangeText={(value) => setText(value)} style={{ marginLeft: 15, paddingLeft:10, width: '80%', height: 45, color: 'white', fontSize: 16, borderWidth: 1, borderRadius:5, borderColor:'whitesmoke' }} placeholder="Rechercher" placeholderTextColor="white" />
        </View>
    );
};

export default Header;