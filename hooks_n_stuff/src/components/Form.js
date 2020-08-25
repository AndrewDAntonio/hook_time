import React, {useEffect} from 'react'
import {useForm} from '../hooks/useForm.js'
import {useFetch} from '../hooks/useFetch.js'

const Form = () => {
    const [values, handleChange] = useForm({email: '', password: '', firstName: ''})
    const {data, loading} = useFetch("http://numbersapi.com/43/trivia")
    // useEffect(() => {
    //     const onMouseMove = e => {
    //         console.log(e)
    //     }
    //     window.addEventListener('mousemove', onMouseMove)

    //     return () => {
    //         window.removeEventListener('mousemove', onMouseMove)
    //     }
    // }, [])

    
    return (
        <>
        <div>
            <label>First Name</label>
            <input name='firstName' value={values.firstName} onChange={handleChange}/>
        </div>
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