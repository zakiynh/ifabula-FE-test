import { applyMiddleware, createStore } from "redux";
import rootReducer from "./reducer/rootReducer";
import thunk from "redux-thunk";
import logger from "./middleware/logger";

let store = createStore(rootReducer, applyMiddleware(logger, thunk));

export default store;