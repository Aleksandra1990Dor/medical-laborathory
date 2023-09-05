const ADD_VISITER_MESSAGE = 'ADD_VISITER_MESSAGE';
const ADD_ADMIN_MESSAGE = 'ADD_ADMIN_MESSAGE';
const initialState = {
  visiterMessages: [],
  adminMessages: [],
  allDialog: [],
};
const dialogsReduser = (state = initialState, action) => {
  switch (action.type) {
    case ADD_VISITER_MESSAGE:
      return {
        ...state,
        visiterMessages: [...state.visiterMessages, action.message],
        allDialog: [...state.allDialog, action.message],
      };
    case ADD_ADMIN_MESSAGE:
      return {
        ...state,
        adminMessages: [...state.adminMessages, action.message],
        allDialog: [...state.allDialog, action.message],
      };
    default:
      return state;
  }
};
export const addVisiterMessageAC = (message) => ({
  type: ADD_VISITER_MESSAGE,
  message,
});
export const addAdminMessageAC = (message) => ({
  type: ADD_ADMIN_MESSAGE,
  message,
});
export default dialogsReduser;
