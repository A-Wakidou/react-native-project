import { Text, View, TextInput, Button, Modal, StyleSheet, ScrollView } from 'react-native';
import Header from '../components/header.js';
import { useState } from 'react';
import { useSelector } from 'react-redux'

const Account = ({navigation}) => {
    const user = useSelector(state => state.user)
    const goTo = (text) => {
        navigation.navigate('SearchScreen', { screen : 'Results', params: {query: text} })
    }

    return (
        <ScrollView
            style={{
                flex: 1,
            }}>
            <Header goTo={goTo} />
            <Text>Bonjour {user.value.firstname} {user.value.lastname}</Text>
            <View style={{flexDirection:'row'}}>
                <Button title='Votre compte' />
                <Button title='Vos commandes' />
            </View>
            <View style={{flexDirection:'row'}}>
                <Button title='Acheter à nouveau' />
                <Button title='Continuer vos achats' />
            </View>
        </ScrollView>
    );
};

export default Account;