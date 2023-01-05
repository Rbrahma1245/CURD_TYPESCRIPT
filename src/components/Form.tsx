import React from 'react'
import { Iuser } from '../screens/HomePage'
import './index.css'


interface props {
    user: Iuser
    setUser: React.Dispatch<React.SetStateAction<Iuser>>
    handleSubmit: (e: React.FormEvent) => void
}


const Form: React.FC<props> = ({ user, setUser, handleSubmit }) => {

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }


    return (
        <div className='form-container'>
            <input className="userInput" type='text' name='name' value={user.name} placeholder='Enter Your Name' onChange={handleChange} />
            <input className="userInput" min="1" type='number' name="age" value={user.age !== null ? user.age : ""} placeholder='Enter Your Age' onChange={handleChange} />
            <br />
            <div className='radio-form'>
                <input type="radio" value="Male" name="gender" checked={user.gender === "Male"} onChange={handleChange} /> Male
                <input type="radio" value="Female" name="gender" checked={user.gender === "Female"} onChange={handleChange} /> Female
                <input type="radio" value="Other" name="gender" checked={user.gender === "Other"} onChange={handleChange} /> Other
            </div>
            <br />
            {
                user.id ? <button className="toggleEditButton" onClick={handleSubmit} > Update </button> :
                    <button className="addButton" onClick={handleSubmit} > SUBMIT </button>
            }


        </div>
    )
}

export default Form
