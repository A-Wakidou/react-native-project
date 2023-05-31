import { SafeAreaView, StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './pages/index.js'
import Cart from './pages/cart.js'
import Account from './pages/account.js'
import Search from './pages/search.js'
import Results from './pages/results.js'
import Header from './components/header.js';
import './assets/styles/index.css'

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="Home" component={Home} />
    </HomeStack.Navigator>
  );
}

const CartStack = createNativeStackNavigator();

function CartStackScreen() {
  return (
    <CartStack.Navigator screenOptions={{ headerShown: false }}>
      <CartStack.Screen name="Cart" component={Cart} />
    </CartStack.Navigator>
  );
}

const AccountStack = createNativeStackNavigator();

function AccountStackScreen() {
  return (
    <AccountStack.Navigator screenOptions={{ headerShown: false }}>
      <AccountStack.Screen name="Account" component={Account} />
    </AccountStack.Navigator>
  );
}

const SearchStack = createNativeStackNavigator();

function SearchStackScreen() {
  return (
    <SearchStack.Navigator screenOptions={{ headerShown: false }}>
      <SearchStack.Screen name="Search" component={Search} />
      <SearchStack.Screen name="Results" component={Results} />
    </SearchStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, paddingTop: StatusBar.currentHeight }}>
      <NavigationContainer>
        <Header style={{ height: 130 }} />
        <Tab.Navigator navigationOptions={{ header: null }} screenOptions={{
          tabBarStyle: { height: 80 },
          tabBarActiveTintColor: '#5F9EC2',
          tabBarInactiveTintColor: 'black',
          headerShown: false,
          tabBarShowLabel: false,
        }}>
          <Tab.Screen name="HomeScreen" component={HomeStackScreen} options={{
            // title: 'Home',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            )
          }} />
          <Tab.Screen name="SearchScreen" component={SearchStackScreen} options={{
            // title: 'Search',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="store-search" color={color} size={size} />
            )
          }} />
          <Tab.Screen name="CartScreen" component={CartStackScreen} options={{
            // title: 'Cart',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="cart" color={color} size={size} />
            )
          }} />
          <Tab.Screen name="AccountScreen" component={AccountStackScreen} options={{
            // title: 'Account',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="account" color={color} size={size} />
            )
          }} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}