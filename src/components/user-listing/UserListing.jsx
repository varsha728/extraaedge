import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CircularProgress } from '@mui/material'
import './user-listing.css'
import UserComponent from '../user/UserComponent'
import { SET_USERS } from '../../redux/action-types/user-action-types'
const UserListing = () => {
    const dispatch = useDispatch()
    const { error, loader, users } = useSelector(state => state.user)

    const handleDeleteUser = userId => {
        const newUsers = users.filter(user => user?.id !== userId)
        dispatch({
            type: SET_USERS,
            payload: newUsers
        })
    }
    return (
        <div className='user__listing__container'>
            {loader ? <div className='user__loader__container'><CircularProgress color="success" /></div> : null}
            {error ? <div className='user__error'>{error}</div> : null}
            {
                users.map(user =>  <UserComponent key={user?.id} userDetails={user} handleDeleteUser={handleDeleteUser} />)
            }
        </div>
    )
}

export default UserListing