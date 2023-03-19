const initialState = {
  user: {},
  loggedIn: false,
  pairedContact: { userName: "", chatListTable: "" }
};

function getTable(reciever) {
  let contacts = initialState.user.contacts;
  contacts.forEach((contact) => {
    if (contact.userName == reciever) {
      return contact.chatListTable;
    }
  });
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case "USER_INSERT":
      return {
        ...state,
        user: action.userData,
        loggedIn: true
      };
    case "REFRESH_USER":
      return {
        ...state,
        user: action.userData,
        loggedIn: true
      };
    case "PEER_REGISTER":
      return {
        ...state,
        pairedContact: {
          userName: action.peer,
          chatListTable: getTable(action.peer)
        }
      };
    default:
      return state;
  }
}

export default reducer;
