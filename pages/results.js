import { Text, View, Image, FlatList, ScrollView, TouchableHighlight } from 'react-native';
import { useEffect, useState } from 'react'
import { ProductsApi } from '../client/api.ts';
import { Configuration } from '../client/configuration.ts';
import Header from '../components/header.js';

const Results = (props) => {
  const [data, setData] = useState([])
  function goTo(text) {
    props.navigation.navigate('Results', { query: text })
  }

  useEffect( () => {
    new ProductsApi(Configuration, 'http://localhost:3000').productsControllerFindAllBy({data: {query:props.route.params.query}})
      .then((res) => {
        setData(res.data)
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <ScrollView
      style={{
        flex: 1,
      }}>
      <Header goTo={goTo} />
      <FlatList style={{flex:1}} data={data} keyExtractor={data => data.id} renderItem={({item, index, separators}) => (
        <TouchableHighlight
          key={item.id}
          onPress={() => props.navigation.navigate('Product', {id: item.id})}
          onShowUnderlay={separators.highlight}
          onHideUnderlay={separators.unhighlight}>
          <View style={{padding: '1rem', flex:1, flexDirection: 'row'}}>
            <Image style={{width: '35%', height: 100, marginRight:10}} resizeMode="contain" source={item.images[0].url} />
            <View style={{flex:1, flexDirection: 'column', justifyContent: 'center'}}>
            <Text style={{fontSize: '1.1rem', fontWeight: 'bold'}}>{item.title}</Text>
              { item.ratings.length > 0 ? item.ratings.reduce( (accumulator, currentValue) =>
                <View style={{flexDirection:'row', alignItems:'center'}}>
                  { (accumulator.rating + currentValue.rating) / item.ratings.length > 1 ? <Image style={{width: 10, height: 10}} source={require('../assets/images/star-yellow.svg')} /> : <Image style={{width: 10, height: 10}} source={require('../assets/images/star.svg')} /> } 
                  { (accumulator.rating + currentValue.rating) / item.ratings.length > 2 ? <Image style={{width: 10, height: 10}} source={require('../assets/images/star-yellow.svg')} /> : <Image style={{width: 10, height: 10}} source={require('../assets/images/star.svg')} /> } 
                  { (accumulator.rating + currentValue.rating) / item.ratings.length > 3 ? <Image style={{width: 10, height: 10}} source={require('../assets/images/star-yellow.svg')} /> : <Image style={{width: 10, height: 10}} source={require('../assets/images/star.svg')} /> } 
                  { (accumulator.rating + currentValue.rating) / item.ratings.length > 4 ? <Image style={{width: 10, height: 10}} source={require('../assets/images/star-yellow.svg')} /> : <Image style={{width: 10, height: 10}} source={require('../assets/images/star.svg')} /> } 
                  { (accumulator.rating + currentValue.rating) / item.ratings.length > 5 ? <Image style={{width: 10, height: 10, marginRight: 5}} source={require('../assets/images/star-yellow.svg')} /> : <Image style={{width: 10, height: 10}} source={require('../assets/images/star.svg')} /> } 
                  <Text style={{fontSize:'0.65rem'}}>{(accumulator.rating + currentValue.rating) / item.ratings.length + '/5'}</Text>
                </View>
              ) : <Text style={{fontSize:'0.65rem', fontStyle: 'italic'}}>Soyez le premier à donner votre avis</Text>}
              <Text style={{fontSize: '1.2rem', fontWeight: 'bold'}}>{item.price}€</Text>
              <Text>{item.rating}</Text>
            </View>
          </View>
        </TouchableHighlight>
      )} />
    </ScrollView>
  );
};

export default Results;