export const setLoginToken = token => {
  localStorage.setItem("loginToken", token);
};

export const getLoginToken = () => {
  let token = null;
  try {
    token = localStorage.getItem("loginToken");
  }
  catch(e) {
    token = null;
  }
  return token;
};

export const clearLoginToken = () => {
  localStorage.removeItem("loginToken");
};
