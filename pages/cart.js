import { useState, useEffect } from 'react'
import { Text, View, ScrollView, FlatList, Image, Button } from 'react-native';
import Header from '../components/header.js';
import { useSelector } from 'react-redux'
import { resetCart, calculateTotal } from '../features/cartSlice.js';
import { useDispatch } from 'react-redux'

const Cart = ({navigation}) => {
    const goTo = (text) => {
        navigation.navigate('SearchScreen', { screen : 'Results', params: {query: text} })
    }
    const dispatch = useDispatch()
    const cart = useSelector(state => state.cart)
    const [selectedValue, setSelectedValue] = useState(1);
    const [total, setTotal] = useState(null);

    useEffect( () => {
        dispatch(calculateTotal())
    }, [])

    return (
        <View
        style={{
          flex: 1,
        }}>
            <Header goTo={goTo} />
            <Text style={{margin: 15, marginTop:20, fontSize: 25, fontWeight:'bold'}}>Votre panier : </Text>
            <View style= {{margin: 15,  marginTop:5, padding: 15, backgroundColor:'#2D2D2D', borderRadius: 5}}>
                <FlatList style={{flex:1}} data={cart.value} keyExtractor={data => data.id} renderItem={({item, index, separators}) => (
                    <View style={{flexDirection:'row', alignItems: 'center', marginBottom:7}}>
                        <View style={{flex:1, marginRight: 10}} >
                            <Image style={{width: '100%', height: 70, marginRight:10}} resizeMode="contain" source={item.images[0].url} />
                        </View>
                        <View>
                            <Text style={{fontSize: 25, fontWeight: 'bold', color: 'white'}} numberOfLines={1}>{item.title}</Text>
                            <View style={{flexDirection:'row', alignItems:'center', marginTop: 3}}>
                                <Text style={{fontSize: 15, marginRight: 10, fontWeight: 'bold', color: 'white'}}>{item.price}€</Text>
                                <Text style={{fontSize: 15, marginRight: 10, fontWeight: 'bold', color: 'white'}}>Quantité : {item.quantity}</Text>
                                <Image style={{width: 20, height: 20}} source={require('../assets/images/trash.svg')} />
                            </View>
                        </View>
                    </View>
                )} />
                { cart.length > 0 ? <Button title='Vider le panier' onPress={() => dispatch(resetCart())} /> : <Text style={{color:'white'}}> Vous n'avez aucun produit </Text> }
                <View style={{backgroundColor:'white', height: 2, marginTop:10, marginBottom:5}} />
                <View style={{alignItems:'flex-end', padding: 10, paddingRight : 0}}>
                    <Text style={{color: 'white', marginBottom: 5}}>Frais de livraison estimés : 5.99€ </Text>
                    <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold', marginBottom: 10}}>Total : {cart.total ? cart.total : 0}€ </Text>
                    { cart.value.length > 0 ? <Button title='Passer commande' onPress={() => navigation.navigate('Purchase')} /> : <Button title='Découvrez nos produits' onPress={() => navigation.navigate('SearchScreen', {screen:'Search'})} /> }
                </View>
            </View>
        </View>
    );
};

export default Cart;