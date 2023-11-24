import { HIT_END, DELETE_ROW, DELETE_KEY } from '../actions/actionType';
const BASE_URL = 'http://jsonplaceholder.typicode.com/posts';
import axios from 'axios';

export const hitEnd = () => {
    return {
        type: HIT_END
    }
}

export function hitEndAction() {
    return async (dispatch) => {
        try {
            const response = await axios.get(BASE_URL);
            dispatch({
                type: HIT_END,
                payload: response.data
            });
        } catch (error) {
            console.error(error);
        }
    }
}

export function deleteRow(id) {
    return {
        type: DELETE_ROW,
        payload: id
    }
}

export function deleteKey(rowId, keyToDelete) {
    return {
        type: DELETE_KEY,
        payload: {
            rowId,
            keyToDelete
        }
    }
}