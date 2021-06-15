export const authenticated = () => {
  return {
    type: "AUTHENTICATED",
  };
};

export const nonAuthenticated = () => {
  return {
    type: "NOT_AUTHENTICATED",
  };
};
