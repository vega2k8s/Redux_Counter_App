import * as types from '../actions/ActionTypes';

// state 객체, color와 number가 상태변수
const initialState = {
    color: 'black',
    number: 0
};

//Reducer 함수 선언
function counter(state = initialState, action) {
    switch (action.type) {
        case types.INCREMENT:
            return {
                ...state,
                number: state.number + 1
            };
        case types.DECREMENT:
            return {
                ...state,
                number: state.number - 1
            };
        case types.SET_COLOR:
            return {
                ...state,
                color: action.color
            };
        default:
            return state;
    }
};
export default counter;


