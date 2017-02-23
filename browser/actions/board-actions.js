import axios from 'axios';
import { browserHistory } from 'react-router';

/* -----------------    ACTIONS     ------------------ */
export const LOAD_BUTTONS = 'LOAD_BUTTONS';
export const SET_BOARDID = 'SET_BOARDID';
export const SET_AUDIENCE_COUNT = 'SET_AUDIENCE_COUNT';


/* -----------------    ACTION CREATORS     ------------------ */
export const stateBoardId = boardId => {
  return {
    type: SET_BOARDID,
    payload: boardId
  };
};

export const foundBoard = buttons => {
  return {
    type: LOAD_BUTTONS,
    payload: buttons
  };
};

export const setAudienceCount = audienceString => {
  return {
    type: SET_AUDIENCE_COUNT,
    payload: audienceString
  };
};


/* ------------       REDUCER     ------------------ */
export const enterBoard = pathId => {
  return dispatch => {
    axios.get(`/api/buttons/${pathId}`)
      .then(res => res.data)
      .then(errorOrButtons => {
        errorOrButtons.notFound ? browserHistory.replace('/pageNotFound/error') : dispatch( foundBoard(errorOrButtons.buttons));
      })
      .catch(err => console.log(err));
  };
};

