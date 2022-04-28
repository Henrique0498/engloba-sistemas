import { useContext } from 'react'
import AuthContext from 'data/context/AuthContext'

const useAuth = () => useContext(AuthContext)

export default useAuth
