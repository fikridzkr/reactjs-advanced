import React from 'react'

const Input = ({type,name,placeholder, inputHandler,className}) => {
    return (
        <div>
            <input type={type} name={name} placeholder={placeholder} onChange={inputHandler} className={className}/>
        </div>
    )
}

export default Input
