// 초기 상태값
const initialState = {
  userId: 123,
};

// 리듀서: state에 변화를 일으키는 함수
// state를 action의 type에 따라 변경하는 함수
// 인자값: state, action
const users = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default users;
