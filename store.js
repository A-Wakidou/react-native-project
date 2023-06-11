import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './features/cartSlice'
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = { key: 'root', version: 1, storage: AsyncStorage }

export const store = configureStore({
  reducer: {
    cart: persistReducer(persistConfig, cartReducer)
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false
    })
})

export const persistor = persistStore(store)

