import axios from 'axios';

/* -----------------    ACTIONS     ------------------ */
export const BOARD_NOT_FOUND = 'BOARD_NOT_FOUND';
export const SET_CURRENT_BOARD = 'SET_CURRENT_BOARD';


/* ------------   ACTION CREATORS     ------------------ */
export const showBoardNotFound = bool => {
  return {
    type: BOARD_NOT_FOUND,
    payload: bool
  };
};

export const stateCurrentBoard = boardId => {
  return {
    type: SET_CURRENT_BOARD,
    payload: boardId
  };
};

/* ------------       DISPATCHERS     ------------------ */
export const loadBoard = boardId => {
  return dispatch => {
    axios.get(`/api/${boardId}`)
      .then( res => res.data )
      .then( board => {
        board.message ? dispatch(showBoardNotFound(true)) : dispatch(stateCurrentBoard(board));
      })
      .catch(err => console.log(err));
  };
};

