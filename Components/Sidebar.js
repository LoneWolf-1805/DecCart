import React from 'react'
import { ConnectButton } from 'web3uikit'
import { Image } from 'next/image'

const Sidebar = () => {
  return (
    <div className='styles.container'>
      <div className='styles.profile'>
        {
          isAuthenticated && (
            <div>
              <Image alt='profile' className='styles.ProfilePic' height={100} width={100}/>

            </div>
            {!username ? (
              
            )}
          )
        }

      </div>

      <ConnectButton/>
    </div>
  )
}

export default Sidebar