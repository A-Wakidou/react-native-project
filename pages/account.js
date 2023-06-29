import { Text, View, TextInput, TouchableOpacity, Modal, Image, ScrollView, FlatList } from 'react-native';
import Header from '../components/header.js';
import { useState } from 'react';
import { useSelector } from 'react-redux'
import { logOut } from '../features/userSlice.js';
import { useDispatch } from 'react-redux'

const Account = ({navigation}) => {
    const user = useSelector(state => state.user)
    const dispatch = useDispatch()
    const goTo = (text) => {
        navigation.navigate('SearchScreen', { screen : 'Results', params: {query: text} })
    }

    return (
        <ScrollView
            style={{
                flex: 1,
            }}>
            <Header goTo={goTo} />
            <View style={{padding:'1rem'}}>
                <Text style={{fontWeight:'bold', fontSize:25, marginBottom:20}}>Bonjour {user.value.firstname} {user.value.lastname}</Text>
                <View style={{flexDirection:'row', gap: 5, marginBottom: 5}}>
                    <TouchableOpacity style={{backgroundColor:'#5F9EC2', padding: 10, borderRadius:5, width: 150}}>
                        <Text style={{color:'white', textAlign:'center'}}>Votre compte</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{backgroundColor:'#5F9EC2', padding: 10, borderRadius:5, width: 150}}>
                        <Text style={{color:'white', textAlign:'center'}}>Vos commandes</Text>
                    </TouchableOpacity>
                </View>
                <View style={{flexDirection:'row', gap: 5}}>
                    <TouchableOpacity style={{backgroundColor:'#5F9EC2', padding: 10, borderRadius:5, width: 150}}>
                        <Text style={{color:'white', textAlign:'center'}}>Acheter à nouveau</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{backgroundColor:'#5F9EC2', padding: 10, borderRadius:5, width: 150}}>
                        <Text style={{color:'white', textAlign:'center'}}>Continuer vos achats</Text>
                    </TouchableOpacity>
                </View>
                <Text style={{fontWeight:'bold', marginTop: 20, fontSize:18}}>Vos commandes</Text>
                <FlatList horizontal={true} data={user.value.orders} keyExtractor={data => data.id} renderItem={({item, index, separators}) => (
                    <View style={{width:100, marginRight:30}}>
                        {console.log(item)}
                        <Image style={{width: '100%', height: 100, marginRight:10}} resizeMode="contain" source={item.products[1].images[0].url} />
                        <Text style={{textAlign:'center', fontWeight:'bold', fontSize:'0.7rem'}}>Commande du {item.createdDate}</Text>
                    </View>
                )} />
                <Text style={{fontWeight:'bold', marginTop:30, fontSize:18}}>Paramètres</Text>
                <View style={{flexDirection:'row', marginTop:20, marginBottom:10}}>
                    <TouchableOpacity style={{backgroundColor:'#5F9EC2', padding: 10, borderRadius:5, width: 150, marginRight:5}}>
                        <Text style={{color:'white', textAlign:'center'}}>Vos informations</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{backgroundColor:'#5F9EC2', padding: 10, borderRadius:5, width: 150, marginRight:5}}>
                        <Text style={{color:'white', textAlign:'center'}}>Vos paiements</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{backgroundColor:'#5F9EC2', padding: 10, borderRadius:5, width: 150}}>
                        <Text style={{color:'white', textAlign:'center'}}>Vos préférences</Text>
                    </TouchableOpacity>
                </View>
                <View style={{marginBottom:10}}>
                    <TouchableOpacity onPress={() => navigation.navigate('')}>
                        <Text style={{color:'#5F9EC2', marginBottom:5}}>Changer votre mot de passe</Text>
                    </TouchableOpacity>        
                    <TouchableOpacity onPress={() => navigation.navigate('')}>
                        <Text style={{color:'#5F9EC2', marginBottom:5}}>Changer votre adresse email</Text>
                    </TouchableOpacity>        
                    <TouchableOpacity onPress={() => navigation.navigate('')}>
                        <Text style={{color:'#5F9EC2', marginBottom:5}}>Vos information de paiements</Text>
                    </TouchableOpacity>        
                    <TouchableOpacity onPress={() => navigation.navigate('')}>
                        <Text style={{color:'#5F9EC2'}}>Vos adresses</Text>
                    </TouchableOpacity>        
                </View>
                <TouchableOpacity onPress={() => dispatch(logOut())} style={{backgroundColor:'tomato', padding: 10, borderRadius:5, width: 150}}>
                    <Text style={{color:'white', textAlign:'center'}}>Déconnexion</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

export default Account;