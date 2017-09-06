import { combineReducers, Reducer } from 'redux';
import { namespace as appNamespace, reducer as appReducer } from './app/ducks';

export const rootReducer = combineReducers({
    [appNamespace]: appReducer,
}) as Reducer<any>;
