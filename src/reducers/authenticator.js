const authenticator = (state = false, action) => {
  if (action.type === "AUTHENTICATED") {
    return !state;
  } else return state;
};

export default authenticator;
