import React from 'react';
import { useRouters } from './hooks/useRouters'
import { useAuth } from './hooks/useAuth';
import { ContextAuth } from './context/ContextAuth'


const App: React.FC = () => {
    const { login, logout, token, id } = useAuth()
    const isAuthenticated = !!token
    const router = useRouters(isAuthenticated)
    
    return (
      <>
      <ContextAuth.Provider value={{ 
        token, id, login, logout 
      }}>
        
        {router}
      </ContextAuth.Provider>
      </>
    );
}

export default App;