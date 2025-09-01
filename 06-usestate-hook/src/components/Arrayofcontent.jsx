import React from 'react'
import { useState } from 'react'

const Arrayofcontent = () => {
    const [friend, setFriend] = useState(['Alex', 'Jhon', 'Dua', 'Lana']);

    const handleOnSetFriend = () =>{
        setFriend([...friend,'David'])
    }
    const handleOnRemoveFriend = () =>{
        setFriend(friend.filter((f) => (f !== 'David')))
    }
    const handleOnUpdateFriend = () =>{
        setFriend(friend.map((f) => f === 'David' ? 'David Smith' : f))
    }

  return (
    <div>
      {
        friend.map((f) => (
            <li key={Math.random()}>{f}</li>
        ))
      }
      <button onClick={handleOnSetFriend}>Add new friend</button>
      <button onClick={handleOnRemoveFriend}>remove new friend</button>
      <button onClick={handleOnUpdateFriend}>Update new friend</button>
    </div>
  )
}

export default Arrayofcontent
