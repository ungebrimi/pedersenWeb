import React from 'react'

const Profile = () => {
  return (
    <div className="flex flex-col justify-center items-center py-spacersm md:py-spacermd lg:py-spacerlg">
        <img src="profile2.png" className="profile-img" alt="" />
        <div className="text-labelsm md:text-labelmd lg:text-labellg profile-card rounded-3xl px-12 py-4 text-center">
            <h1 className="text-3xl">Joakim Pedersen</h1>
            <h2 className="text-2xl mt-2">Creative Developer</h2>
        </div>
    </div>
  )
}

export default Profile