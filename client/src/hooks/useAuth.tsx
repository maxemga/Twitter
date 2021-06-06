import { useCallback, useEffect, useState } from 'react'

export const useAuth = () => {
    const [token, setToken] = useState<string>()
    const [id, setId] = useState<string>()

    const login = useCallback((userId: string, token: string): void => {
        setId(userId)
        setToken(token)

        localStorage.setItem('user', JSON.stringify({
            id: userId, token: token
        }))
    }, [])

    const logout = (): void => {
        setId('')
        setToken('')
        localStorage.removeItem('user')
    }
    useEffect(()=> {
        const data: Storage = JSON.parse(localStorage.getItem('user') || '{}')
        
        if (data && data.token) {
            login(data.id, data.token)
        }
    }, [login])

    return { login, logout, token, id }
}