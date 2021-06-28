import React from 'react'

const Input = ({defaultValue, type,name,placeholder, onChange,className}) => {
    return (
        <div>
            <input type={type} name={name} placeholder={placeholder} onChange={onChange} className={className} defaultValue={defaultValue}/>
        </div>
    )
}

export default Input
