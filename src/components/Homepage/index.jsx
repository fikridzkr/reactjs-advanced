import React from 'react'
import isLogged from '../../auth';
import Button from '../Login/components/Button';
const HomePage = () => {
    const Logout = () => {
        isLogged = false
    }
    return (
        <div className='card'>
                <h1>Anda Berhasil Login</h1>
                <form action="" onSubmit={Logout}>
                <Button type='submit' className='btn'>Logout</Button>
                </form>
        </div>
    )
}

export default HomePage
