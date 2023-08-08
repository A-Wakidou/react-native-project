import { useState } from 'react';
import { Text, View, ScrollView, TextInput, Picker, Button, FlatList, Image } from 'react-native';
import Header from '../components/header.js';
import { useSelector } from 'react-redux'
import { StripeApi } from '../client/api.ts';
import { Configuration } from '../client/configuration.ts';

const Purchase = ({navigation}) => {
    const cart = useSelector(state => state.cart)
    console.log(cart);
    const [step, setStep] = useState(1)
    const [formStep1, setFormStep1] = useState({
        name: '',
        firstname: '',
        email: '',
        address: '',
        postCode: null,
        city: ''
    })
    const goTo = (text) => {
        navigation.navigate('SearchScreen', { screen : 'Results', params: {query: text} })
    }
    const getDeliveryDate = () => {
        let today = new Date();
        let dd = String(today.getDate()+3).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        let yyyy = today.getFullYear();

        return dd + '/' + mm + '/' + yyyy;
    }
    const stripeCheckout = () => {
        new StripeApi(Configuration, 'http://localhost:3000').stripeControllerCheckout({data: cart.value})
    }
    return (
        <ScrollView
        style={{
          flex: 1,
        }}>
            <Header goTo={goTo} />
            <Text style={{margin: 15, marginTop:'2rem', fontSize: 18, fontWeight:'bold'}}>Informations complémentaires</Text>
            <View style={{margin: 15,  marginTop:'0.5rem', padding: 15, justifyContent:'center', backgroundColor:'#2D2D2D', borderRadius:5}}>
                <View style={{flexDirection: 'row'}}>
                    <View style={{flex:1, alignItems:'center'}}>
                        <Text style={{fontSize:8, fontWeight:'bold', color: step == 1 | 2 ? '#5F9EC2' : 'white'}}>Étape 1/3</Text>
                        <Text style={{fontSize:6, fontWeight:'bold', fontStyle:'italic', color: step == 1 | 2 ? '#5F9EC2' : 'white'}}>Informations</Text>
                    </View>
                    <View style={{flex:1, alignItems:'center'}}>
                        <Text style={{fontSize:7, fontWeight:'bold', color: step == 2 ? '#5F9EC2' : 'white'}}>Étape 2/3</Text>
                        <Text style={{textAlign:'center', fontWeight:'bold', fontStyle:'italic', color: step == 2 ? '#5F9EC2' : 'white', fontSize:6}}>Vérifications</Text>
                    </View>
                    <View style={{flex:1, alignItems:'center'}}>
                        <Text style={{fontSize:7, fontWeight:'bold', color: step == 3 ? '#5F9EC2' : 'white'}}>Étape 3/3</Text>
                        <Text style={{fontSize:6, fontWeight:'bold', fontStyle:'italic', color: step == 3 ? '#5F9EC2' : 'white'}}>Paiement</Text>
                    </View>
                </View>
                <View style={{flexDirection: 'row', marginTop:10}}>
                    <View style={{flex:1, alignItems:'center'}}>
                        <View style={{width:10, height:10, borderRadius:'50%', backgroundColor: step == 1 | 2 ? '#5F9EC2' : 'white'}} />
                    </View>
                    <View style={{flex:1, alignItems:'center'}}>
                        <View style={{width:10, height:10, borderRadius:'50%', backgroundColor: step == 2 ? '#5F9EC2' : 'white'}} />
                    </View>
                    <View style={{flex:1, alignItems:'center'}}>
                        <View style={{width:10, height:10, borderRadius:'50%', backgroundColor: step == 3 ? '#5F9EC2' : 'white'}} />
                    </View>
                </View>
                {step == 1 ? (
                    <View>
                        <View style={{flexDirection: 'row', marginTop:20, gap:10}}>
                            <View style={{flex:1}}>
                                <Text style={{color:'white', fontWeight:'bold', fontSize:8}}>Votre nom :</Text>
                                <TextInput
                                    style={{height:30, marginTop:5}}
                                    onChangeText={(value) => setFormStep1(prev => ({...prev, name:value}))}
                                />
                            </View>
                            <View style={{flex:1}}>
                                <Text style={{color:'white', fontWeight:'bold', fontSize:8}}>Votre prénom :</Text>
                                <TextInput
                                    style={{height:30, marginTop:5}}
                                    onChangeText={(value) => setFormStep1(prev => ({...prev, firstname:value}))}
                                />
                            </View>
                        </View>
                        <View style={{marginTop:10}}>
                            <Text style={{color:'white', fontWeight:'bold', fontSize:8}}>Votre email</Text>
                            <TextInput
                                style={{height:30, marginTop:5}}
                                onChangeText={(value) => setFormStep1(prev => ({...prev, email:value}))}
                            />
                        </View>
                        <View style={{marginTop:10}}>
                            <Text style={{color:'white', fontWeight:'bold', fontSize:8}}>Votre addresse</Text>
                            <TextInput
                                multiline = {true}
                                numberOfLines = {4}
                                style={{border:'1px solid white', marginTop:5, borderRadius:5, color:'white'}}
                                onChangeText={(value) => setFormStep1(prev => ({...prev, address:value}))}
                            />
                        </View>
                        <View style={{flexDirection: 'row', marginTop: 10, marginBottom: 20, gap: 10}}>
                            <View style={{flex:1}}>
                                <Text style={{color:'white', fontWeight:'bold', fontSize:8}}>Code postal :</Text>
                                <TextInput
                                    keyboardType="numeric"
                                    style={{border:'1px solid white', marginTop:5, borderRadius:5, height:30, color: 'white'}}
                                    onChangeText={(value) => setFormStep1(prev => ({...prev, postCode:value}))}
                                />
                            </View>
                            <View style={{flex:1}}>
                                <Text style={{color:'white', fontWeight:'bold', fontSize:8, marginBottom:5}}>Ville :</Text>
                                <Picker
                                    style={{height:30}}
                                    selectedValue={formStep1.city}
                                    onValueChange={(itemValue) => setFormStep1(prev => ({...prev, city:itemValue}))}
                                >
                                    <Picker.Item label="Marseille" value="Marseille" />
                                    <Picker.Item label="Paris" value="Paris" />
                                </Picker>
                            </View>
                        </View>
                        <Button onPress={() => setStep(2)} title="Suivant" />
                    </View>
                ):
                (
                    <View style={{marginTop: 30}}>
                        <Text style={{fontSize: 16, fontWeight:'bold', color: 'white'}}>Vos produits</Text>
                        <View style={{flex: 1, flexDirection:'row', gap: 10}}>
                            <View style={{flex:2}}>
                                <FlatList data={cart.value} keyExtractor={data => data.id} renderItem={({item, index, separators}) => (
                                    <View style={{flex:1, flexDirection: 'row', alignItems:'center', gap: 5}}>
                                        <View style={{flex:1}}>
                                            <Image style={{width: '100%', height: 50}} resizeMode="contain" source={item.images[0].url} />
                                        </View>
                                        <View style={{flex:2}}>
                                            <Text style={{fontSize: 15, fontWeight: 'bold', color: 'white'}} numberOfLines={1}>{item.title}</Text>
                                            <View style={{flexDirection:'row'}}>
                                                <Text style={{fontSize: 15, marginRight: 10, fontWeight: 'bold', color: 'white'}}>{item.price}€</Text>
                                                <Text style={{fontSize: 15, marginRight: 10, fontWeight: 'bold', color: 'white'}}>Q :{item.quantity}</Text>
                                            </View>
                                        </View>
                                    </View>
                                )} />

                            </View>
                            <View style={{flex:1}}>
                                <Text style={{textAlign:'right', color:'white'}}>Frais de livraisons estimés : 5.99€</Text>
                                <Text style={{textAlign:'right', color:'white', fontWeight:'bold', marginTop: 5}}>Total : {cart.total}€</Text>
                                <Text style={{textAlign:'right', color:'white', marginTop:5}}>Addresse de facturation :{"\n"} {formStep1.address} </Text>
                                <Text style={{textAlign:'right', color:'white'}}>Livraison {"\n"} Chronopost : 2-3 ouvrés</Text>
                            </View>
                        </View>
                        <View>
                            <Text style={{color:'white', fontSize:15, fontWeight:'bold', marginTop:30, textDecorationLine:"underline"}}>Informations de livraison</Text>
                            <Text style={{color:'white'}}>{formStep1.name} {formStep1.firstname}</Text>
                            <Text style={{color:'white'}}>{formStep1.address}</Text>
                            <Text style={{color:'white', fontStyle:'italic'}}>Date de livraison estimée : {getDeliveryDate()}</Text>
                            <Button title='Passer au paiement' onPress={() => stripeCheckout()} />
                        </View>
                    </View>
                )}
            </View>
        </ScrollView>
    );
};

export default Purchase;