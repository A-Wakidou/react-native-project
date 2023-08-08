import { Text, View, TextInput, Button, Modal, StyleSheet, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Header from '../components/header.js';
import { useState } from 'react';
import { AuthApi } from '../client/api.ts';
import { Configuration } from '../client/configuration.ts';
import { logIn } from '../features/userSlice.js';
import { useDispatch } from 'react-redux'
import { TouchableOpacity } from 'react-native-web';

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
        fontSize: 15
    }
})

const SignUp = ({navigation}) => {
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    
    const [form, setForm] = useState({
        name:'',
        firstname:'',
        password: '',
        passwordConfirmation:'',
        birthdate:'',
        phoneNumber:0
    })
    const [modalMessage, setModalMessage] = useState(false)
    const dispatch = useDispatch()

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        setShow(false);
        setDate(currentDate);
      };
    
      const showMode = (currentMode) => {
        if (Platform.OS === 'android') {
          setShow(false);
          // for iOS, add a button that closes the picker
        }
        setMode(currentMode);
      };
    
      const showDatepicker = () => {
        showMode('date');
      };
    
      const showTimepicker = () => {
        showMode('time');
      };

    const goTo = (text) => {
        navigation.navigate('SearchScreen', { screen : 'Results', params: {query: text} })
    }
    const signUpRequest = () => {
        new AuthApi(Configuration, 'http://localhost:3000').authControllerGetAccessToken({email: email,password: password})
            .then( (res) => {
                if(res.data) {
                    // dispatch(signUp({token:res.data.access_token, user:res.data.user}))
                    navigation.navigate('Account')
                } 
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
                <Text style={{textAlign:'center', fontWeight:'bold', fontSize:18, marginTop: 30, color:'white'}}>Inscription</Text>
                <View style={{margin:20, padding: 10, paddingTop: 30, paddingBottom: 30, backgroundColor:'white', borderRadius:5 }}>
                    <View style={{flexDirection:'row', gap: 5}}>
                        <View style={{flex:1}}>
                            <Text style={{fontWeight: 'bold', marginBottom:10}}>Nom</Text>
                            <TextInput onChangeText={(value) => setForm(prev => ({...prev, name:value}))} style={{border:'1px solid black',color:'black', marginBottom:15, height: 30}} />
                        </View>
                        <View style={{flex:1}}>
                            <Text style={{fontWeight: 'bold', marginBottom:10}}>Prénom</Text>
                            <TextInput onChangeText={(value) => setForm(prev => ({...prev, firstname:value}))} style={{border:'1px solid black',color:'black', marginBottom:15, height: 30}} />
                        </View>
                    </View>
                    <Text style={{fontWeight: 'bold', marginBottom:10}}>Email</Text>
                    <TextInput onChangeText={(value) => setForm(prev => ({...prev, email:value}))} style={{border:'1px solid black',color:'black', height: 30, borderRadius:5, marginBottom: 20}} />
                    <Text style={{fontWeight: 'bold', marginBottom:10}}>Mot de passe</Text>
                    <TextInput secureTextEntry onChangeText={(value) => setForm(prev => ({...prev, password:value}))} style={{border:'1px solid black',color:'black', height: 30, borderRadius:5, marginBottom: 20}} />
                    <Text style={{fontWeight: 'bold', marginBottom:10}}>Confirmation mot de passe</Text>
                    <TextInput secureTextEntry onChangeText={(value) => setForm(prev => ({...prev, passwordConfirmation:value}))} style={{border:'1px solid black',color:'black', height: 30, borderRadius:5, marginBottom: 20}} />
                    <View style={{flexDirection:'row', gap: 5}}>
                        <View style={{flex:1}}>
                            <Text style={{fontWeight: 'bold', marginBottom:10}}>Date de naissance</Text>
                            <TouchableOpacity onPress={showDatepicker} style={{border:'1px solid black', height:30, borderRadius:5}} />
                            {show && (
                                <DateTimePicker
                                testID="dateTimePicker"
                                value={date}
                                mode={mode}
                                is24Hour={true}
                                onChange={onChange}
                                />
                            )}
                        </View>
                        <View style={{flex:1}}>
                            <Text style={{fontWeight: 'bold', marginBottom:10}}>Numéro de téléphone</Text>
                            <TextInput onChangeText={(value) => setForm(prev => ({...prev, phoneNumber:value}))} style={{border:'1px solid black',color:'black', marginBottom:15, height: 30}} />
                        </View>
                    </View>
                    <Button title="S'inscrire" onPress={signUpRequest} />
                </View>
            </View>
        </View>
    );
};

export default SignUp;