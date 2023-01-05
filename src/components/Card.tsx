import React from 'react'
import { Iuser } from '../screens/HomePage'



interface props {
    userList: Iuser[]
    handleUpdate: (id: number) => void
    handleDelete: (id: number) => void
}

const Card: React.FC<props> = ({ userList, handleUpdate, handleDelete }) => {



    return (
        <div className='card-container'>
            {
                userList.map((currElem, index) => {
                    // console.log(currElem)
                    return (
                        <div className='card' key={currElem.id}>

                            <div className='card-details'>
                                Name : {currElem.name}
                                <br />
                                Age : {currElem.age}
                                <br />
                                Gender : {currElem.gender}
                            </div>

                            <div className='btn-box'>
                                <button onClick={() => handleUpdate(currElem.id!)}>Update</button>
                                <button onClick={() => handleDelete(currElem.id!)}>Delete</button>
                            </div>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default Card
