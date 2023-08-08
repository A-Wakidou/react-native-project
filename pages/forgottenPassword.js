import { Text, View, TextInput, Button, Modal, StyleSheet } from 'react-native';
import Header from '../components/header.js';
import { useState } from 'react';
import { AuthApi } from '../client/api.ts';
import { Configuration } from '../client/configuration.ts';

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: '1rem'
    }
})

const ForgottenPassword = ({ navigation }) => {
    const [email, setEmail] = useState('')
    const [modalMessage, setModalMessage] = useState(false)
    const goTo = (text) => {
        navigation.navigate('SearchScreen', { screen: 'Results', params: { query: text } })
    }
    const forgottenPasswordRequest = () => {
        new AuthApi(Configuration, 'http://localhost:3000').authControllerGetAccessToken({ email: email, password: password })
            .then((res) => {
                if (res.data) {
                    dispatch(logIn({ token: res.data.access_token, user: res.data.user }))
                    navigation.navigate('Account')
                }
            })
            .catch((err) => {
                console.log(err);
                setModalMessage(err.response.data.message)
            })
    }
    return (
        <View
            style={{
                flex: 1,
            }}>
            <Header goTo={goTo} />
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalMessage}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>{modalMessage}</Text>
                        <Button title='Fermer' onPress={() => setModalMessage(false)} />
                    </View>
                </View>
            </Modal>
            <View style={{ height: 600, margin: 10, marginTop: 20, backgroundColor: '#2D2D2D', borderRadius: 5 }}>
                <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '1.2rem', marginTop: 30, color: 'white' }}>Mot de passe oublié</Text>
                <View style={{ margin: 20, padding: 10, paddingTop: 30, paddingBottom: 30, backgroundColor: 'white', borderRadius: 5 }}>
                    <Text style={{ textAlign: 'center', fontWeight: 'bold', marginBottom: 10 }}>Email</Text>
                    <TextInput onChangeText={(value) => setEmail(value)} style={{ border: '1px solid black', color: 'black', marginBottom: 15, height: 30 }} />
                    <Button title='Se connecter' onPress={forgottenPasswordRequest} />
                </View>
            </View>
        </View>
    );
};

export default ForgottenPassword;