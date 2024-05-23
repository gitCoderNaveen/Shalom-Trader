import React, {useContext, useState} from 'react'

const AuthContext = React.createContext()
export default function Auth(props) {
    const [user, setUser] = useState(null)
    const Login=(user)=>{
        setUser(user)
    }
    const Logout = ()=>{
        setUser(null)
    }
  return (
    <div>
      <AuthContext.Provider value={{user, Login, Logout}}>
        {props.children}
      </AuthContext.Provider>
    </div>
  )
}
export function useAuth(){
    return useContext(AuthContext)
}
