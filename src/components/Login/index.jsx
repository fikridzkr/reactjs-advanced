import React, {useState} from 'react'
import Input from "./components/Input";
import Button from "./components/Button";
const Login = () => {
    const [auth, setAuth] = useState({username:'', password:''})
    const {username, password} = auth

    const handleChange= (e) => {
    const {name, value} = e.target
    setAuth((prev) => ({
        ...prev,
        [name] :value
    }))
    }

    const loginHandler = (e) => {
        e.preventDefault()
     if(username === 'user' && password === 'admin123'){
        
     }
    }
    return (
        <div className='card'>
            <h1 >Login</h1>
            <form action='' onSubmit={loginHandler}>
            <Input type='text' name='username' placeholder='Masukkan Username Anda' className='input' onChange={handleChange} defaultValue={username}/>
            <Input type='password' name='password' placeholder='Masukkan Password Anda' className='input' onChange={handleChange} defaultValue={password}/>
            <Button type='submit' className='btn'>Login</Button>
            </form>
        </div>
    )
}

export default Login
