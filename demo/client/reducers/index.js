import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import cakes from './cakes';

const rootReducer = combineReducers({cakes, routing: routerReducer });

export default rootReducer;
