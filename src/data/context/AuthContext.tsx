import { createContext, Dispatch, SetStateAction, useState } from 'react'

import userMock from 'data/mock/userMock.json'

interface AuthContextProps {
  setLogout: () => void
  loading: boolean
  user?: UserData
  setLoading: Dispatch<SetStateAction<boolean>>
}

type UserData = {
  isLogged: boolean
  name: string
  imageProfile: string
}

interface AuthProviderProps {
  children: React.ReactNode
}

const AuthContext = createContext<AuthContextProps>({
  setLogout: () => undefined,
  loading: true,
  setLoading: () => undefined
})

export function AuthProvider(props: AuthProviderProps) {
  const [loading, setLoading] = useState<boolean>(true)
  const [data, setData] = useState<AuthContextProps>({
    user: userMock,
    setLogout,
    loading: true,
    setLoading
  })

  function setLogout() {
    const user = undefined
    const fData = { ...data, user }

    setData(fData)
  }

  return (
    <AuthContext.Provider value={{ ...data, loading }}>
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthContext
