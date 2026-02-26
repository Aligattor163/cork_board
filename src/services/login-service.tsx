const LOGIN_ATTRIBUTE = "isLoggedIn"

export const LoginService = {
    isLoggedIn: () => localStorage.getItem(LOGIN_ATTRIBUTE) === "true",
    login: () => localStorage.setItem(LOGIN_ATTRIBUTE, "true"),
    logout: () => localStorage.setItem(LOGIN_ATTRIBUTE, "false")
}