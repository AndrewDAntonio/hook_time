import React from 'react'
import {useForm} from '../hooks/useForm.js'

const Form = () => {
    const [values, handleChange] = useForm({email: '', password: ''})



    
    return (
        <>
        <div>
            <label>Email</label>
            <input name='email' value={values.email} onChange={handleChange}/>
        </div>
        <div>
            <label>Password</label>
            <input type='password' name='password' value={values.password} onChange={handleChange}/>
        </div>
        </>
        
    )
}

export default Form;