export const ADD_HOVERPLAYER = "ADD_HOVERPLAYER";
export const REMOVE_HOVERPLAYER = "REMOVE_HOVERPLAYER";

export const addHover = (_id: number) => ({
  type: ADD_HOVERPLAYER,
  _id: _id
});

export const removeHover = () => ({
  type: REMOVE_HOVERPLAYER
});
