import {combineReducers} from "redux";
import { reducer as formReducer } from 'redux-form'

import counter from "./reducers/counter";

export default combineReducers({
    counter,
    form: formReducer
})