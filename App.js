import { SafeAreaView, StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './pages/index.js'
import Cart from './pages/cart.js'
import Account from './pages/account.js'
import Login from './pages/login.js';
import SignUp from './pages/signup.js';
import Search from './pages/search.js'
import Results from './pages/results.js'
import Product from './pages/product.js'
import Purchase from './pages/purchase.js';
import {store, persistor} from './store'
import { Provider } from 'react-redux'
import { useSelector } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { checkToken } from './features/userSlice.js';
import { useDispatch } from 'react-redux'

export default function App() {
  const AppContainer = () => {
    const dispatch = useDispatch()
    const cartCount = useSelector(state => state.cart.value)
    const user = useSelector(state => state.user)
    
    if(user.token) {
      dispatch(checkToken(user.token))
    }

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
          <CartStack.Screen name="Purchase" component={Purchase} />
        </CartStack.Navigator>
      );
    }
    
    const AccountStack = createNativeStackNavigator();
    
    function AccountStackScreen() {
      return (
        <AccountStack.Navigator screenOptions={{ headerShown: false }}>
          {
            user.isLoggedIn ? (
              <AccountStack.Screen name="Account" component={Account} />
            ) : 
            (
              <>              
                <AccountStack.Screen name="Login" component={Login} />
                <AccountStack.Screen name="SignUp" component={SignUp} />
              </>
            )
          }
        </AccountStack.Navigator>
      );
    }
    
    const SearchStack = createNativeStackNavigator();
    
    function SearchStackScreen() {
      return (
        <SearchStack.Navigator screenOptions={{ headerShown: false }}>
          <SearchStack.Screen name="Search" component={Search} />
          <SearchStack.Screen name="Results" component={Results} />
          <SearchStack.Screen name="Product" component={Product} />
        </SearchStack.Navigator>
      );
    }
    
    const Tab = createBottomTabNavigator();
    
    return (
      <SafeAreaView style={{ flex: 1, paddingTop: StatusBar.currentHeight }}>
        <NavigationContainer>
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
              tabBarBadge: cartCount.length > 0 ? cartCount.length : null,
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
      )
    }

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppContainer />
      </PersistGate>
    </Provider>
  );
}