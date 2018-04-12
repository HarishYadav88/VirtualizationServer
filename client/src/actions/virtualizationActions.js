import axios from 'axios';
import * as types from './actionTypes';

export function editVirtualization(virtualization) {
    var headers = {
        'Content-Type': 'application/json' 
    }
    return dispatch => {
        axios.put('http://localhost:8090/sv/v1/virtualizations/' + virtualization.virtualizationID, virtualization, headers)
            .then((response) => {
                dispatch({ type: types.EDIT_VIRTUALIZATION, virtualization});
            })
            .catch((error) => {
                dispatch({type: null})
            })
    }
}

export function undeployVirtualization(virtualization) {
    return { type: types.UNDEPLOY_VIRTUALIZATION, virtualization};
}

export function setVirtualizations(virtualizations) {
    return { type: types.SET_VIRTUALIZATION, virtualizations};
}

export function ajaxLoading(status) {
    return { type: types.AJAX_LOADING, status};
}

export function getVirtualization() {
    return dispatch => {
        dispatch(ajaxLoading(true));
        axios.get('http://localhost:8090/sv/v1/virtualizations')
            .then(response => {
                dispatch(setVirtualizations(response.data.virtualizationList));
                dispatch(ajaxLoading(false));
            })
            .catch(error => {
                console.error(error);
                dispatch(ajaxLoading(false));
            });
    };
}