function defineCookies (key, value) {
  document.cookie = `${key}=${value};path=/`;
}

function getCookie (keyCookie) {
  return document.cookie
    .split('; ')
    .find(cookie => cookie.startsWith(`${keyCookie}=`))
    ?.split('=')[1];
}

function removeCookie (keyCookie) {
  document.cookie = `${keyCookie}=; expires=Thu, 01 Jan 1970 00:00:00; path=/`;
}

export { defineCookies, getCookie, removeCookie };
