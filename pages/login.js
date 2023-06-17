import { Text, View, TextInput, Button, Modal, StyleSheet } from 'react-native';
import Header from '../components/header.js';
import { useState } from 'react';
import { AuthApi } from '../client/api.ts';
import { Configuration } from '../client/configuration.ts';
import { logIn } from '../features/userSlice.js';
import { useDispatch } from 'react-redux'

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

const Login = ({navigation}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [modalMessage, setModalMessage] = useState(false)
    const dispatch = useDispatch()

    const goTo = (text) => {
        navigation.navigate('SearchScreen', { screen : 'Results', params: {query: text} })
    }
    const loginRequest = () => {
        console.log('a')
        new AuthApi(Configuration, 'http://localhost:3000').authControllerLogin({email: email,password: password})
            .then( (res) => {
                if(res.data) dispatch(logIn({token:res.data.access_token, user:res.data.user}))
                navigation.navigate('Account')
            })
            .catch( (err) => {
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
            <View style={{height:600, margin: 10, marginTop:20, backgroundColor:'#2D2D2D', borderRadius:5}}>
                <Text style={{textAlign:'center', fontWeight:'bold', fontSize:'1.2rem', marginTop: 30, color:'white'}}>Connexion</Text>
                <View style={{margin:20, padding: 10, paddingTop: 30, paddingBottom: 30, backgroundColor:'white', borderRadius:5 }}>
                    <Text style={{textAlign:'center', fontWeight: 'bold', marginBottom:10}}>Email</Text>
                    <TextInput onChangeText={(value) => setEmail(value)} style={{border:'1px solid black',color:'black', marginBottom:15, height: 30}} />
                    <Text style={{textAlign:'center', fontWeight: 'bold', marginBottom:10}}>Mot de passe</Text>
                    <TextInput onChangeText={(value) => setPassword(value)} secureTextEntry style={{border:'1px solid black',color:'black', height: 30, borderRadius:5, marginBottom: 20}} />
                    <Button title='Se connecter' onPress={loginRequest} />
                    <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center', marginTop: 10, marginBottom: 10}}>
                        <View style={{width:50, height:1, backgroundColor:'#2D2D2D', marginRight:'1rem'}} />
                        <Text style={{fontWeight:'bold'}}>Ou</Text>
                        <View style={{width:50, height:1, backgroundColor:'#2D2D2D', marginLeft:'1rem'}} />
                    </View>
                    <Button title="S'inscrire" />
                    <Text style={{fontWeight:'bold', textAlign:'center', marginTop: 10, marginBottom:10}}>Mot de passe oublié ?</Text>
                </View>
            </View>
        </View>
    );
};

export default Login;