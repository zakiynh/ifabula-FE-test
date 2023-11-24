import { HIT_END, DELETE_ROW, DELETE_KEY } from "../actions/actionType";

const initialState = {
  hitEnd: [],
};

export default function hitEndReducer(state = initialState, action) {
  switch (action.type) {
    case HIT_END:
      return {
        ...state,
        hitEnd: action.payload,
      };
    case DELETE_ROW:
      return {
        ...state,
        hitEnd: state.hitEnd.filter((item) => item.id !== action.payload),
      };
    case DELETE_KEY:
        const updatedData = state.hitEnd.map(item => {
            if (item.id === action.payload.rowId) {
                const { [action.payload.keyToDelete]: deletedKey, ...updatedItem } = item;
                return updatedItem;
            }
            return item;
        });

      return {
        ...state,
        hitEnd: updatedData,
      };
    default:
      return state;
  }
}
