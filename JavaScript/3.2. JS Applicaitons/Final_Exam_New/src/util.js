export function getUserData () {
    return JSON.parse(sessionStorage.getItem('userData'))
}

export function setuUserData (data) {
    sessionStorage.setItem('userData', JSON.stringify(data))
}

export function clearUserData () {
    sessionStorage.removeItem('userData')
}