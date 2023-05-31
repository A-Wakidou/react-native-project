import { Text, View } from 'react-native';
import { ProductsApi } from '../client/api.ts';
import { Configuration } from '../client/configuration.ts';

const Results = () => {
    new ProductsApi(Configuration, 'http://localhost:3000').productsControllerFindAll()
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err)
    })
    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
            <Text>Hello Results!</Text>
        </View>
    );
};

export default Results;