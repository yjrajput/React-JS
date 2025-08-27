import React, { useState } from 'react'

const UserProfile = () => {
    const [profile, setProfile] = useState({
        name: "",
        age: "",
    });

    const handleonchange = (e) =>{
        const {name, value} = e.target;

        setProfile((prev) =>({
            ...prev, [name]: value
        }))
    }
  return (
    <div>
      <h1>User Profile</h1>

      <label>
        Name:
        <input type="text" name='name' value={profile.name}  onChange={handleonchange}/>
      </label>

      <label >
        Age: 
        <input type="number" name='age' value={profile.age} onChange={handleonchange} />
      </label>

      <h1>User Name : {profile.name}</h1>
      <h2>Age : {profile.age}</h2>
    </div>
  )
}

export default UserProfile
