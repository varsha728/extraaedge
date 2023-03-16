import React from 'react'
import './user-input.css'
const UserInput = ({ labelValue, type='text', value, handler, isRequired = true }) => {

    const handleInputChange = e => {
        const { value, name } = e.target
        handler(oldData => ({ ...oldData, [name]: value }))
    }
    return (
        <div className='custom__input'>
            <label htmlFor={labelValue}>
                {isRequired ? <span className='required__field'>*</span> : null}{labelValue}:
            </label>
            <input type={type} id={labelValue} value={value} onChange={handleInputChange} required={isRequired} name={labelValue} />
        </div>
    )
}

export default UserInput