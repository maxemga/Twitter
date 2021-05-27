import { useCallback, useState } from "react"

export const useHttp = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<any>(null)

    const request = useCallback(async (url: string, method: string = 'GET', body: any = null, type ={}, headers: any = {}) => {
        setLoading(true)
        try {   
            
            if (body !== null && type === 'json') {
                body = JSON.stringify(body)
                headers['Content-Type'] = 'application/json'
            }  
            else {
                body = body
            }
            

            const responce = await fetch(`http://localhost:8000${url}`, {
               method, body, headers
            })
            const data = await responce.json()
            if (!responce.ok) {
                throw new Error(data.message)
            }
            setLoading(false)
            
            return data

        }
        catch(e) {
            setLoading(false);
            setError(e.message)
            throw e
        }      
    }, [])
    const clearError = useCallback( () => setError(null), [])

    return {error, loading, request, clearError}
}