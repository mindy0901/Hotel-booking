import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from "./reducers";
import thunk from "redux-thunk";

const persistConfig = {
      key: 'root',
      storage,
      blacklist: ['hotelsReducer', 'searchReducer', 'roomsReducer'],
};

const presistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
      presistedReducer,
      composeWithDevTools(applyMiddleware(thunk))
);

const persistor = persistStore(store);

export { persistor, store };


