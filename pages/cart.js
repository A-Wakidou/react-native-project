import { useState, useEffect } from 'react'
import { Text, View, ScrollView, FlatList, Image, Picker, Button } from 'react-native';
import Header from '../components/header.js';
import { useSelector } from 'react-redux'

const Cart = ({navigation}) => {
    const goTo = (text) => {
        navigation.navigate('SearchScreen', { screen : 'Results', params: {query: text} })
    }
    const cart = useSelector(state => state.cart.value)
    const [selectedValue, setSelectedValue] = useState(1);
    const [total, setTotal] = useState(null);
    console.log(cart)

    useEffect( () => {
        let total = 0
        cart.reduce( (accumulator, currentValue) =>{
            total = accumulator.price + currentValue.price
        })
        setTotal(total)
    }, [])

    return (
        <ScrollView
        style={{
          flex: 1,
        }}>
            <Header goTo={goTo} />
            <Text style={{margin: '1rem', fontSize: '1.2rem', fontWeight:'bold'}}>Votre panier : </Text>
            <View style= {{margin: '1rem', backgroundColor:'#2D2D2D', padding: 5, borderRadius: 5}}>
                <FlatList style={{flex:1}} data={cart} keyExtractor={data => data.id} renderItem={({item, index, separators}) => (
                    <View style={{flexDirection:'row', alignItems: 'center'}}>
                        <View style={{flex:1, marginRight: 10}} >
                            <Image style={{width: '100%', height: 100, marginRight:10}} resizeMode="contain" source={item.images[0].url} />
                        </View>
                        <View>
                            <Text style={{fontSize: '1.2rem', fontWeight: 'bold', color: 'white'}} numberOfLines={1}>{item.title}</Text>
                            <View style={{flexDirection:'row', alignItems:'center', marginTop: 3}}>
                                <Text style={{fontSize: '1rem', marginRight: 10, fontWeight: 'bold', color: 'white'}}>{item.price}€</Text>
                                <Picker
                                    selectedValue={selectedValue}
                                    style={{ height: 25, width: 35, marginRight:10 }}
                                    onValueChange={(itemValue) => setSelectedValue(itemValue)}
                                >
                                    <Picker.Item label="2" value="2" />
                                    <Picker.Item label="3" value="3" />
                                </Picker>
                                <Image style={{width: 20, height: 20}} source={require('../assets/images/trash.svg')} />
                            </View>
                        </View>
                    </View>
                )} />
                <View style={{backgroundColor:'white', height: 2}} />
                <View style={{alignItems:'flex-end', padding: 10, paddingRight : 0}}>
                    <Text style={{color: 'white', marginBottom: 5}}>Frais de livraison estimés : 5.99€ </Text>
                    <Text style={{color: 'white', fontSize: '1.1rem', fontWeight: 'bold', marginBottom: 10}}>Total : {total}€ </Text>
                    <Button title='Passer commande' onPress={() => navigation.navigate('Purchase')} />
                </View>
            </View>
        </ScrollView>
    );
};

export default Cart;