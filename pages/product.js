import { Text, View, Image, Picker, ScrollView, TouchableHighlight, Button, Modal, Pressable, StyleSheet } from 'react-native';
import { useState } from 'react'
import Header from '../components/header.js';
import ImagesCarouselBoutons from '../components/imagesCarouselBoutons.js';
import { useDispatch } from 'react-redux'
import { addToCart, resetCartError } from '../features/cartSlice.js';
import { useSelector } from 'react-redux'

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
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 15
    },
})

const Product = (props) => {
    const cart = useSelector(state => state.cart)
    const [selectedValue, setSelectedValue] = useState(1)
    const [modalVisible, setModalVisible] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const dispatch = useDispatch()
    const goTo = (text) => {
        props.navigation.navigate('SearchScreen', { screen: 'Results', params: { query: text } })
    }
    const goToCart = () => {
        setModalVisible(false)
        props.navigation.navigate('CartScreen', { screen: 'Cart' })
    }
    const addProductToCart = () => {
        dispatch(addToCart({ item: props.route.params.item, amount: selectedValue }))
    }
    const createPickerItems = () => {
        let items = []
        for (var i = 1; i <= props.route.params.item.stock; i++) {
            items.push(<Picker.Item label={i} value={i} key={i} />)
        }
        return items
    }
    return (
        <ScrollView
            style={{
                flex: 1,
            }}>
            <Header goTo={goTo} />
            <Modal
                animationType="slide"
                transparent={true}
                visible={cart.error}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Nous sommes désolés, le stock pour ce produit a atteint son maximum, réessayez plus tard.</Text>
                        <Button title='Fermer' onPress={() => dispatch(resetCartError())} />
                    </View>
                </View>
            </Modal>
            <View style={{ padding: '1rem', }}>
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
                    <Image style={{ width: '80%', height: 300 }} resizeMode="contain" source={props.route.params.item.images[0].url} />
                    <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center' }}>
                    {props.route.params.item.images.map( (image) => (
                        <Image key={image.id} style={{ width: '100%', height: 100 }} resizeMode="contain" source={image.url} />
                    ))}
                    </View>
                </View>
                <ImagesCarouselBoutons />
                <Text style={{ fontSize: '1.8rem', fontWeight: 'bold' }}>{props.route.params.item.title}</Text>
                <View style={{ flexDirection: 'row', marginTop: '0.5rem' }}>
                    <View style={{ flex: 1 }}>
                        {props.route.params.item.ratings.length > 0 ? props.route.params.item.ratings.reduce((accumulator, currentValue) =>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                {(accumulator.rating + currentValue.rating) / props.route.params.item.ratings.length > 1 ? <Image style={{ width: 15, height: 15 }} source={require('../assets/images/star-yellow.svg')} /> : <Image style={{ width: 15, height: 15 }} source={require('../assets/images/star.svg')} />}
                                {(accumulator.rating + currentValue.rating) / props.route.params.item.ratings.length > 2 ? <Image style={{ width: 15, height: 15 }} source={require('../assets/images/star-yellow.svg')} /> : <Image style={{ width: 15, height: 15 }} source={require('../assets/images/star.svg')} />}
                                {(accumulator.rating + currentValue.rating) / props.route.params.item.ratings.length > 3 ? <Image style={{ width: 15, height: 15 }} source={require('../assets/images/star-yellow.svg')} /> : <Image style={{ width: 15, height: 15 }} source={require('../assets/images/star.svg')} />}
                                {(accumulator.rating + currentValue.rating) / props.route.params.item.ratings.length > 4 ? <Image style={{ width: 15, height: 15 }} source={require('../assets/images/star-yellow.svg')} /> : <Image style={{ width: 15, height: 15 }} source={require('../assets/images/star.svg')} />}
                                {(accumulator.rating + currentValue.rating) / props.route.params.item.ratings.length > 5 ? <Image style={{ width: 15, height: 15, marginRight: 5 }} source={require('../assets/images/star-yellow.svg')} /> : <Image style={{ width: 15, height: 15 }} source={require('../assets/images/star.svg')} />}
                                <Text style={{ marginLeft: 5 }}>{(accumulator.rating + currentValue.rating) / props.route.params.item.ratings.length + '/5'}</Text>
                            </View>
                        ) : <Text style={{ fontStyle: 'italic' }}>Soyez le premier à donner votre avis</Text>
                        }
                        {
                            props.route.params.item.comments.length > 0 ? <Text style={{ fontStyle: 'italic' }}>{props.route.params.item.comments.length} commentaire{props.route.params.item.comments.length == 1 ? null : 's'} </Text> : <Text style={{ fontSize: '0.65rem', fontStyle: 'italic' }}> 0 commentaire </Text>
                        }
                    </View>
                    <View>
                        <View style={{ marginBottom: '1rem', flexDirection: 'row', justifyContent: 'flex-end' }}>
                            <Text style={{ fontSize: '1.5rem', fontWeight: 'bold', marginRight: 5 }}>{props.route.params.item.price}€</Text>
                            <Picker
                                selectedValue={selectedValue}
                                style={{ height: 35, width: 40 }}
                                onValueChange={(itemValue) => setSelectedValue(parseInt(itemValue))}
                            >
                                {createPickerItems()}
                            </Picker>
                        </View>
                        <Button onPress={() => addProductToCart()} title="Ajouter au panier" color="#2D2D2D" />
                    </View>
                </View>
                <View>
                    <Text style={{ fontWeight: 'bold', marginTop: '1rem', marginBottom: '0.5rem' }}>Description</Text>
                    <Text >{props.route.params.item.description}</Text>
                </View>
                <View>
                    <Text style={{ fontWeight: 'bold', marginTop: '1rem', marginBottom: '0.5rem' }}>Description technique</Text>
                    <Text >{props.route.params.item.technicalDescription}</Text>
                </View>
            </View>

        </ScrollView>
    )
}

export default Product;