import { GET_DATA } from "../actions/actionType";

const initialState = {
    question: [],
};

export default function dataReducer(state = initialState, action) {
    switch (action.type) {
        case GET_DATA:
            return {
                ...state,
                question: action.payload
            };
        default:
            return state;
    }
}