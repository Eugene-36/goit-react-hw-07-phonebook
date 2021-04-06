import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import logger from "redux-logger";
import todosReducer from "../redux/reducers/allUsersReducer";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "contacts",
  storage,
};

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
];
const todosPersistConfig = {
  key: "contacts",
  storage,
  blacklist: ["filter"],
};
const store = configureStore({
  reducer: {
    allUsers: persistReducer(todosPersistConfig, todosReducer),
  },
  middleware,
});

const persistor = persistStore(store);
export default { store, persistor };
