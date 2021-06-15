const authenticator = (state = false, action) => {
  if (action.type === "AUTHENTICATED") {
    return (state = true);
  } else return (state = false);
};

export default authenticator;
