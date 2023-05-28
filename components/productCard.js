import { Image, View, Text} from 'react-native';

const ProductCard = (props) => {
    props = props.item ? props.item : props
    return (
        <View style={{
            width: 120,
            marginRight: '1rem'
        }}>
            <View
                style={{
                    flexDirection: 'row',
                    height: 110,
                    backgroundColor: '#2D2D2D',
                    padding: 20,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 5
                }}>
                <Image style={{ width: 50, height: 50 }} source={props.path}/>
            </View>
            <Text style={{fontSize: '1rem', fontWeight: 400, marginTop: '0.1rem', fontFamily:'Glory, serif'}}>{props.title}</Text>
            <Text style={{fontSize: '1rem', fontWeight: 600, marginTop: '0.2rem', fontFamily:'Glory, serif'}}>{props.price}€</Text>
        </View>
    );
};

export default ProductCard;