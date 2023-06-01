import { Text, View } from 'react-native';
import { ProductsApi } from '../client/api.ts';
import { Configuration } from '../client/configuration.ts';
import Header from '../components/header.js';

const Results = (props) => {
  function goTo(text) {
    navigation.navigate('Results', { query: text })
  }
  console.log(props);
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
      }}>
      <Header goTo={goTo} />
      <Text>Hello Results!</Text>
    </View>
  );
};

export default Results;