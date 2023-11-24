import { QUESTION_ANSWERED } from "./actionType";

const data = [
    {
        "id": 1,
        "title": "Petualang Asal Indonesia",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies aliquam, nunc nisl ultricies nunc, vitae ultricies nisl nunc eu nisl. Nulla facilisi. Sed euismod, nisl eget ultricies aliquam, nunc nisl ultricies nunc, vitae ultricies nisl nunc eu nisl. Nulla facilisi."
    },
    {
        "id": 2,
        "title": "Petualang Asal Indonesia Serie 2",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies aliquam, nunc nisl ultricies nunc, vitae ultricies nisl nunc eu nisl. Nulla facilisi. Sed euismod, nisl eget ultricies aliquam, nunc nisl ultricies nunc, vitae ultricies nisl nunc eu nisl. Nulla facilisi."
    },
    {
        "id": 3,
        "title": "Petualang Asal Indonesia Serie 3",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies aliquam, nunc nisl ultricies nunc, vitae ultricies nisl nunc eu nisl. Nulla facilisi. Sed euismod, nisl eget ultricies aliquam, nunc nisl ultricies nunc, vitae ultricies nisl nunc eu nisl. Nulla facilisi."
    },
];

export const quest = () => {
    return {
        type: QUESTION_ANSWERED,
        payload: data
    }
}

export function questionAnswered() {
    return async dispatch => {
        // const question = data.find(question => question.id === id);
        dispatch({
            type: QUESTION_ANSWERED,
            payload: data
        });
    };
}