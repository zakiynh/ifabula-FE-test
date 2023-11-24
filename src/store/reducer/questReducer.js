import { QUESTION_ANSWERED } from "../actions/actionType";

const initialState = {
    question: {}
};

export default function questReducer(state = initialState, action) {
    switch (action.type) {
        case QUESTION_ANSWERED:
            return {
                ...state,
                question: action.payload
            };
        default:
            return state;
    }
}