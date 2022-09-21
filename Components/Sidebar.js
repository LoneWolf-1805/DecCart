import React, { useContext } from 'react'
import { ConnectButton } from 'web3uikit'
import { Image } from 'next/image'
import {DecCartContext} from '../context/DecCartContext'

const Sidebar = () => {
  const styles ={
    container:'h-full w-[300px] flex flex-col bg-[#fff] static',
    profile:'w-full py-16 flex flex-col justify-center items-center rounded-r-3xl bg-gradient-to-t from-[#0d141c] to-[#42667e] mt-[40px] mb-[50px] border-2 border-[#fb9701]',
    profilePic:'rounded-3xl object-cover',
    profilePicContainer:'flex rounded-xl items-center justify-center w-full h-full mb-5',
    welcome:'text-md mb-2 font-bold text-2xl text-white',
  }

  const {
    isAuthenticated,
    buyTokens,
    getBalance,
    nickname,
    setNickname,
    username,
    handleSetUsername,
  } = useContext(DecCartContext)

  return (
    <div className='styles.container'>
      <div className='styles.profile'>
        {isAuthenticated && (
          <>
            <div className='styles.profilePicContainer'>
              <Image
              alt='profile'
              className='styles.profilePic'
              height={100}
              width={100}
              />
            </div>
            {!username?(
              <>
                <div className='styles.username'>
                  <input
                  type='text'
                  placeholder='Username...'
                  className={usernameInput}
                  value={nickname}
                  onChange={e => setNickname(e.target.value)}
                />
                </div>
                <button className='styles.setNickname'>
                Set Nickname
                </button>
              </>
            ):(
              <div>
                <div className='styles.welcome'>Welcome {username}</div>
              </div>
            )}
          </>
          )}
      </div>
      <ConnectButton/>
    </div>
  )
}

export default Sidebar