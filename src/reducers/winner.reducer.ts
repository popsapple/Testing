import * as types from "../actions/winner.action";

// 초기 상태를 정의합니다
const initialState = {
  _id: -1
};

export const hovering = (
  state = initialState,
  action: { type: any; _id: number }
) => {
  switch (action.type) {
    case types.ADD_HOVERPLAYER:
      return {
        ...state,
        _id: action._id
      };
    case types.REMOVE_HOVERPLAYER:
      return {
        ...state,
        _id: -1
      };
    default:
      return state;
  }
};
