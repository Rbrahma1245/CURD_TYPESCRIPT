import React, { useState } from 'react'
import Card from '../components/Card'
import Form from '../components/Form'
import './index.css'


export interface Iuser {
    name: string;
    age: number | null;
    gender: string;
    id?: number;
}


const Homepage: React.FC = () => {

    const [user, setUser] = useState<Iuser>({
        name: '',
        age: null,
        gender: '',
    });

    const [userList, setUserList] = useState<Iuser[]>([])

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (user.name === '' || user.age === null || user.gender === '') {
            alert("Please fill the details");
        }
        else if (user.id) {
            setUserList(userList.map((elem) => {
                if (elem.id === user.id) {
                    elem = user;
                }
                return elem
            }))
            setUser({
                name: '',
                age: null,
                gender: '',
            })
        }
        else {
            setUserList([...userList, { ...user, id: Date.now() }]);
            setUser({
                name: '',
                age: null,
                gender: '',
            })
        }
    }

    console.log(userList)

    const handleUpdate = (id: number) => {

        let updateValue = userList.find((CurrElem, i) => {
            return CurrElem.id === id
        })
        if (updateValue) setUser(updateValue);
    }

    const handleDelete = (id: number) => {
        let newUserList = userList.filter((CurrElem, i) => {
            return (CurrElem.id !== id)
        })
        setUserList(newUserList)
    }


    const cardArgs = {
        userList,
        handleUpdate,
        handleDelete
    };

    const formArgs = {
        user,
        handleSubmit,
        setUser
    };

    return (
        <div className='home-container'>
            <Card {...cardArgs} />
            <Form {...formArgs} />
        </div>
    )
}

export default Homepage
