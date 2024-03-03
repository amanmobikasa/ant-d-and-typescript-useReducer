import React from 'react'
import { Input as AntdInput } from 'antd';


interface CustomInputProps {
    type ?: 'text' | 'email' | 'password',
    placeholder ?: string,
    value ?: string,
    onChange ?: (e: React.ChangeEvent<HTMLInputElement>) => void,
    className ?: string,
    name ?: string,
    id ?: string,
    required ?: boolean,

}

const InputComp = ({type, placeholder, value, onChange, className, name, id, required} : CustomInputProps) => {
  return (
    <div>
        <AntdInput
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={className}
        name={name}
        id={id}
        required={required}
        />
    </div>
  )
}

export default InputComp    