import React, { useState } from 'react'
import Button from '../Button/Button'
import { FormAddFriendPropType } from './types'
import { FriendType } from '../Friend/types'

const FormAddFriend = ({handleAddNewFriends}: FormAddFriendPropType) => {
    const [friendName, setFriendName] = useState<string>('')
    const [friendPhoto, setFriendPhoto] = useState<string>('https://i.pravatar.cc/48')

    function handleSubmit(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        if(!friendName || !friendPhoto) return

        const id:number = Math.round(Math.random() * 1000);
        const newFriend: FriendType = {
            id: id,
            name: friendName,
            image: `${friendPhoto}?u=${id}`,
            balance: 0
        }

        handleAddNewFriends(newFriend)

        setFriendName('')
        setFriendPhoto('https://i.pravatar.cc/48')

    }
  return (
    <>
        <form className='form-add-friend' onSubmit={(e) => handleSubmit(e)}>
            <label>Name</label>
            <input type='text' value={friendName} onChange={(e) => setFriendName(e.target.value)}/>

            <label>Image URL</label>
            <input type='text' value={friendPhoto} onChange={(e) => setFriendPhoto(e.target.value)}/>

            <Button>Add</Button>
        </form> 
    </>
  )
}

export default FormAddFriend
