import { Image, View, Text} from 'react-native';

const ProductCard = (props) => {
    props = props.item ? props.item : props
    return (
        <View style={{
            width: 130,
            marginRight: 5
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
                <Image resizeMode='contain' style={{ width:'100%', height: 80 }} source={props.path}/>
            </View>
            <Text style={{fontSize: 15, fontWeight: 400, marginTop: 10}}>{props.title}</Text>
            <Text style={{fontSize: 15, fontWeight: 600, marginTop: 12}}>{props.price}€</Text>
        </View>
    );
};

export default ProductCard;