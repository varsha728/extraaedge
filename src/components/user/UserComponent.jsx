import React, { useState } from 'react'
import './user-component.css'
import MailOutlinedIcon from '@mui/icons-material/MailOutlined'
import CallOutlinedIcon from '@mui/icons-material/CallOutlined'
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FavoriteIcon from '@mui/icons-material/Favorite'
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined'
import DeleteIcon from '@mui/icons-material/Delete'
import CloseIcon from '@mui/icons-material/Close'
import { Dialog } from '@mui/material'
import UserInput from '../user-input/UserInput'

const UserComponent = ({ userDetails, handleDeleteUser }) => {
  const [isLiked, setLike] = useState(false)
  const [open, setOpen] = useState(false)
  const [userData, setUserData] = useState({ ...userDetails })

  const [userFormData, setUserFormData] = useState({
    Name: userDetails?.name ?? '',
    Email: userDetails?.email ?? '',
    Phone: userDetails?.phone ?? '',
    Website: userDetails?.website ?? ''
  })

  const handleDoneEditClick = () => {
    const { Name: name, Email: email, Phone: phone, Website: website } = userFormData
    setUserData({ ...userData, name, email, phone, website })
    setOpen(false)
  }
  return (
    <div className='user__component__card'>
      <div className='user__card__avatar'>
        <img src={`https://avatars.dicebear.com/v2/avataaars/${userDetails.username}.svg?options[mood][]=happy`} alt="Avatar" />
      </div>
      <div className='user__component__details'>
        <div className='user__details__row user__details__name'>
          {userData.name}
        </div>
        <div className='user__details__row'>
          <MailOutlinedIcon fontSize='small' className='user__detail__icon' />
          {userData.email}
        </div>
        <div className='user__details__row'>
          <CallOutlinedIcon fontSize='small' className='user__detail__icon' />
          {userData.phone}
        </div>
        <div className='user__details__row'>
          <LanguageOutlinedIcon fontSize='small' className='user__detail__icon' />
          {userData.website}
        </div>
      </div>
      <div className='user__buttons__group'>
        <div className='user__button like__button' onClick={() => setLike(!isLiked)}>
          {isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
        </div>
        <div className='user__button user__grey__icon' onClick={() => setOpen(true)}>
          <BorderColorOutlinedIcon />
        </div>
        <div className='user__button user__grey__icon' onClick={() => handleDeleteUser(userDetails?.id)}>
          <DeleteIcon />
        </div>
      </div>
      <Dialog
        open={open}
        maxWidth='sm'
        fullWidth
      >
        <div className='user__edit__container'>
          <div className='user__edit__popup__header'>
            <h4>Edit user details</h4>
            <span className='custom__button close__button' onClick={() => setOpen(false)}>
              <CloseIcon />
            </span>
          </div>
          <hr />
          <div className='user__prefill__data__form'>
            <UserInput labelValue='Name' value={userFormData.Name} handler={setUserFormData} />
            <UserInput type='email' labelValue='Email' value={userFormData.Email} handler={setUserFormData} />
            <UserInput labelValue='Phone' value={userFormData.Phone} handler={setUserFormData} />
            <UserInput type='url' labelValue='Website' value={userFormData.Website} handler={setUserFormData} />
          </div>
          <hr />
          <div className='user__footer_button__group'>
          <div className='custom__button user__edit__buttons' onClick={() => setOpen(false)}>Cancel</div>
            <div className='custom__button user__edit__buttons ok__button' onClick={handleDoneEditClick}> Ok</div>
          </div>
        </div>
      </Dialog>
    </div>
  )
}

export default UserComponent