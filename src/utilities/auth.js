const tokenName = "AUTH_TOKEN";

export function setToken(token) {
  localStorage.setItem(tokenName, token);
}

export function getToken() {
  return localStorage.getItem(tokenName);
}

export function removeToken() {
  localStorage.removeItem(tokenName);
}

export function getUser() {
  const token = getToken();
  if (!token) return null;

  const payload = JSON.parse(atob(token.split(".")[1]));
  return payload.user;
}
