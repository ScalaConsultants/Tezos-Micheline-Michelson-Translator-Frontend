export const setLoginToken = token => {
  localStorage.setItem("loginToken", token);
};

export const getLoginToken = () => {
  const token = localStorage.getItem("loginToken");
  console.log(token);
  return token;
};

export const clearLoginToken = () => {
  localStorage.removeItem("loginToken");
};
