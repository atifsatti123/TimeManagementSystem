import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'
import { updateUser } from '../../../redux/actions/userActions'

import styles from './Updateform.module.css'

const UpDateUser = () => {
    

    const [firstName,setFirstName] = useState('')
    const [lastName,setLastName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [password_confirmation,setPassword_confirmation] = useState('')


    const dispatch = useDispatch()
    const history = useHistory()

    const handelSubmit = (e) =>{
        e.preventDefault();
        dispatch(updateuser(firstName, lastName,email,password,password_confirmation))
        history.push('/')
        console.log(firstName);
        console.log(lastName);
        console.log(email);
        console.log(password);
        console.log(password_confirmation);
        
    }
    return (
        <div className={styles.form_wrapper}>
            <form onSubmit={handelSubmit}>
                <h2 className={styles.title}>Update User</h2>
                <input type="firstName" placeholder="firstName" name="firstName" value={firstName} onChange={(e)=>{setFirstName(e.target.value)}}/>
                <input type="lastName" placeholder="lastName" name="lastName" value={lastName} onChange={(e)=>{setLastName(e.target.value)}}/>
                <input type="email" placeholder="email" name="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                <input type="password" placeholder="Password" name="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
                <input type="password_confirmation" placeholder="Password_Confirmation" name="password_confirmation" value={password_confirmation} onChange={(e)=>{setPassword_confirmation(e.target.value)}}/>
                <button className={styles.update_user_btn}
                    onClick={()=>dispatch(allActions.crudUsers(firstName,lastName,email,password,password_confirmation,token))}
                >
                    UpdateUser</button>
                
            </form>

        </div>
    )
}

export default UpDateUser


