import React, {useState} from 'react'
import Input from "./components/Input";
import Button from "./components/Button";
const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const usernameHandler = (event) => {
        setUsername(event.target.value)
    }
    const passwordHandler = (event) => {
        setPassword(event.target.value)
    }

    const loginHandler = (event) => {

    }
    return (
        <div className='card'>
            <h1 >Login</h1>
            <form onSubmit={loginHandler}>
            <Input type='text' name='username' placeholder='Masukkan Username Anda' className='input' onChange={usernameHandler}/>
            <Input type='password' name='password' placeholder='Masukkan Password Anda' className='input' onChange={passwordHandler}/>
            <Button type='submit' className='btn'>Login</Button>
            </form>
        </div>
    )
}

export default Login
