// action value
const PLUS_ONE = "counter/PLUS_ONE";
const MINUS_ONE = "counter/MINUS_ONE";
const PLUS_N = "counter/PLUS_N";

// action creator: action value를 return하는 함수
export const plusOne = (payload) => {
  return {
    type: PLUS_ONE,
    payload,
  };
};
export const minusOne = (payload) => {
  return {
    type: MINUS_ONE,
    payload,
  };
};

// 초기 상태값
const initialState = {
  number: 0,
};

// 리듀서: state에 변화를 일으키는 함수
// state를 action의 type에 따라 변경하는 함수
// 인자값: state, action
const counter = (state = initialState, action) => {
  switch (action.type) {
    case PLUS_ONE:
      return {
        number: state.number + action.payload,
      };
    case MINUS_ONE:
      return {
        number: state.number - action.payload,
      };
    default:
      return state;
  }
};

export default counter;
