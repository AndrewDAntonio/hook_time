import React, { useState, useRef } from 'react'
import {useForm} from '../hooks/useForm.js'
import {useFetch} from '../hooks/useFetch.js'

const Form = () => {
    const [values, handleChange] = useForm({email: '', password: '', firstName: ''})
    const [count, setCount] = useState(0);
    const {data, loading} = useFetch(`http://numbersapi.com/${count}/trivia`)
    const inputRef= useRef();
    
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
            <input ref={inputRef} name='email' value={values.email} onChange={handleChange}/>
        </div>
        <div>
            <label>Password</label>
            <input type='password' name='password' value={values.password} onChange={handleChange}/>
        </div>
        <div>
            Number Fact: {loading ? 'loading...' : data}
        </div>
        <button onClick={() => setCount(c => c + 1)}>Click for a new fact!</button>
        <button onClick={() => {inputRef.current.focus()}}>focus</button>
        </>
        
    )
}

export default Form;