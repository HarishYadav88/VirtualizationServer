import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
// Reducers
import virtualizations from './virtualizationsReducer';
import ajaxLoading from './ajaxLoadingReducer';

const rootReducer = combineReducers({
    virtualizations,
    ajaxLoading,
    form: formReducer
});

export default rootReducer;