
import fetch from '@/util/fetch.ts'

export function Logins(data) {
    return fetch({
        url: '/user/login',
        method: 'POST',
        data
    })
}

export function GetUserInfo() {
    return fetch({
        url: '/user/info',
        method: 'GET',
    })
}