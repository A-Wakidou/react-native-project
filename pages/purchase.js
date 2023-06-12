import { useState } from 'react';
import { Text, View, ScrollView, TextInput, Picker, Button, FlatList, Image } from 'react-native';
import Header from '../components/header.js';
import { useSelector } from 'react-redux'

const Purchase = ({navigation}) => {
    const cart = useSelector(state => state.cart.value)
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
    return (
        <ScrollView
        style={{
          flex: 1,
        }}>
            <Header goTo={goTo} />
            <Text style={{margin: '1rem', fontSize: '1.2rem', fontWeight:'bold'}}>Informations complémentaires : </Text>
            <View style={{justifyContent:'center', backgroundColor:'#2D2D2D', margin:10, borderRadius:5, padding: 10}}>
                <View style={{flexDirection: 'row'}}>
                    <View style={{flex:1, alignItems:'center'}}>
                        <Text style={{fontSize:'0.8rem', color: step == 1 | 2 ? '#5F9EC2' : 'white'}}>Étape 1/3</Text>
                        <Text style={{fontSize:'0.7rem', color: step == 1 | 2 ? '#5F9EC2' : 'white'}}>Informations</Text>
                    </View>
                    <View style={{flex:1, alignItems:'center'}}>
                        <Text style={{fontSize:'0.8rem', color: step == 2 ? '#5F9EC2' : 'white'}}>Étape 2/3</Text>
                        <Text style={{textAlign:'center', color: step == 2 ? '#5F9EC2' : 'white', fontSize:'0.7rem'}}>Vérifications</Text>
                    </View>
                    <View style={{flex:1, alignItems:'center'}}>
                        <Text style={{fontSize:'0.8rem', color: step == 3 ? '#5F9EC2' : 'white'}}>Étape 3/3</Text>
                        <Text style={{fontSize:'0.7rem', color: step == 3 ? '#5F9EC2' : 'white'}}>Paiement</Text>
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
                                <Text style={{color:'white'}}>Votre nom :</Text>
                                <TextInput
                                    style={{height:30, marginTop:5}}
                                    onChangeText={(value) => setFormStep1({name:value})}
                                />
                            </View>
                            <View style={{flex:1}}>
                                <Text style={{color:'white'}}>Votre prénom :</Text>
                                <TextInput
                                    style={{height:30, marginTop:5}}
                                    onChangeText={(value) => setFormStep1({firstname:value})}
                                />
                            </View>
                        </View>
                        <View style={{marginTop:10}}>
                            <Text style={{color:'white'}}>Votre email</Text>
                            <TextInput
                                style={{height:30, marginTop:5}}
                                onChangeText={(value) => setFormStep1({email:value})}
                            />
                        </View>
                        <View style={{marginTop:10}}>
                            <Text style={{color:'white'}}>Votre addresse</Text>
                            <TextInput
                                multiline = {true}
                                numberOfLines = {4}
                                onChangeText={(value) => setFormStep1({address:value})}
                            />
                        </View>
                        <View style={{flexDirection: 'row', marginTop: 10, marginBottom: 20, gap: 10}}>
                            <View style={{flex:1}}>
                                <Text style={{color:'white'}}>Code postal :</Text>
                                <TextInput
                                    keyboardType="numeric"
                                    onChangeText={(value) => setFormStep1({postCode:value})}
                                />
                            </View>
                            <View style={{flex:1}}>
                                <Text style={{color:'white'}}>Ville :</Text>
                                <Picker
                                    selectedValue={formStep1.city}
                                    onValueChange={(itemValue) => setFormStep1({city:itemValue})}
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
                        <Text style={{fontSize: '1.1rem', fontWeight:'bold', color: 'white'}}>Vos produits</Text>
                        <View style={{flex: 1, flexDirection:'row', gap: 10}}>
                            <View style={{flex:2}}>
                                <FlatList data={cart} keyExtractor={data => data.id} renderItem={({item, index, separators}) => (
                                    <View style={{flex:1, flexDirection: 'row', alignItems:'center', gap: 5}}>
                                        <View style={{flex:1}}>
                                            <Image style={{width: '100%', height: 100}} resizeMode="contain" source={item.images[0].url} />
                                        </View>
                                        <View style={{flex:2}}>
                                            <Text style={{fontSize: '1rem', fontWeight: 'bold', color: 'white'}} numberOfLines={1}>{item.title}</Text>
                                            <View style={{flexDirection:'row'}}>
                                                <Text style={{fontSize: '1rem', marginRight: 10, fontWeight: 'bold', color: 'white'}}>{item.price}€</Text>
                                                <Text style={{fontSize: '1rem', marginRight: 10, fontWeight: 'bold', color: 'white'}}>{item.quantity}</Text>
                                            </View>
                                        </View>
                                    </View>
                                )} />

                            </View>
                            <View style={{flex:1}}>
                                <Text style={{textAlign:'right', color:'white'}}>Frais de livraisons estimés : 5.99€</Text>
                                <Text style={{textAlign:'right', color:'white'}}>Total : ?</Text>
                                <Text style={{textAlign:'right', color:'white'}}>Addresse de facturation :{"\n"} {formStep1.address} </Text>
                                <Text style={{textAlign:'right', color:'white'}}>Livraison {"\n"} Chronopost : 2-3 ouvrés</Text>
                            </View>
                        </View>
                    </View>
                )}
            </View>
        </ScrollView>
    );
};

export default Purchase;