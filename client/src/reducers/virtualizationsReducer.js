import * as types from '../actions/actionTypes';
import initialState from '../store/initialState';

export default function virtualizationsReducer(state = initialState.virtualizations, action) {
    switch (action.type) {
        case types.SET_VIRTUALIZATION:
            return action.virtualizations;
        case types.EDIT_VIRTUALIZATION:
            return [
                ...state.filter(virtualization => virtualization.virtualizationID !== action.virtualization.virtualizationID),
                Object.assign({}, action.virtualization)
            ];
        case types.UNDEPLOY_VIRTUALIZATION:
            return [
                ...state.filter(virtualization => virtualization.virtualizationID !== action.virtualization.virtualizationID),
                Object.assign({}, action.virtualization)
            ];
        default:
            return state;
    }
}