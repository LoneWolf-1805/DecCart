import { createContext,useState,useEffect } from 'react'
import { useMoralis } from 'react-moralis'

export const DecCartContext = createContext()

export const DecCartProvider = ({children}) => {
  const [nickname, setNickname] = useState('')
  const [username, setUsername] = useState('')

    const {
        isAuthenticated,
        enableWeb3,
        user,
        isWeb3Enabled,
      } = useMoralis()

      // useEffect(async () => {
      //   if (!isWeb3Enabled) {
      //     await enableWeb3()
      //   }

      //   if (isAuthenticated) {
      //     const currentUsername = await user?.get('nickname')
      //     setUsername(currentUsername)
      //   } 

      // }, [
      //   isWeb3Enabled,
      //   isAuthenticated,
      //   setUsername,
      //   user,
      //   username,
      // ])
      /*error in above part of useEffect*/
      const handleSetUsername = () => {
        if (user) {
          if (nickname) {
            user.set('nickname', nickname)
            user.save()
            setNickname('')
          } else {
            console.log("Can't set empty nickname")
          }
        } else {
          console.log('No user')
        }
      }

    return (
        <DecCartContext.Provider 
        value={{
            isAuthenticated,
            nickname,
            setNickname,
            username,
            setUsername,
            handleSetUsername,
        }}>
            {children}
        </DecCartContext.Provider>
    )
}