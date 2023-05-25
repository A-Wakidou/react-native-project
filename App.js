import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './pages/index.js'
import Account from './pages/account.js'
import Search from './pages/search.js'
import { ProductsApi } from './client/api.ts';
import { Configuration } from './client/configuration.ts';

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={Home} />
    </HomeStack.Navigator>
  );
}

const AccountStack = createNativeStackNavigator();

function AccountStackScreen() {
  return (
    <AccountStack.Navigator>
      <AccountStack.Screen name="Account" component={Account} />
    </AccountStack.Navigator>
  );
}

const SearchStack = createNativeStackNavigator();

function SearchStackScreen() {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen name="Search" component={Search} />
    </SearchStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  new ProductsApi(Configuration, 'http://localhost:3000').productsControllerFindAll()
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err)
    })
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="HomeStackScreen" component={HomeStackScreen} />
        <Tab.Screen name="SearchStackScreen" component={SearchStackScreen} />
        <Tab.Screen name="AccountStackScreen" component={AccountStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}