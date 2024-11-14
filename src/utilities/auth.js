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
