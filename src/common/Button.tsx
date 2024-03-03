import React from 'react'
import {Button as AntDBtn} from 'antd'

interface CustomButtonProps {
    typeBtn ?: 'submit' | 'reset' | 'button'
    color ?: 'default' | 'primary'  | 'dashed' | 'link' | 'text'
    size ?: 'large' | 'middle' | 'small'
    shape ?: 'circle' | 'round'
    icon ?: string | React.ReactNode
    className ?: string
    loading ?: boolean
    disabled ?: boolean
    href ?: string
    target ?: string
    onClick ?: (e: React.MouseEvent<HTMLButtonElement>) => void
    onSubmit ?: (e: React.FormEvent<HTMLFormElement>) => void
    children ?: React.ReactNode

}

const ButtonComp = ({onSubmit,typeBtn, color, size, shape, icon, loading, disabled, href, className, target, onClick, children}:CustomButtonProps) => {
  return (
    <div>
        <AntDBtn
        htmlType={typeBtn}
        type={color}
        color = {color} 
        size={size}
        shape={shape}
        icon={icon}
        loading={loading}
        disabled={disabled}
        href={href}
        target={target}
        className={className}
        onClick={onClick}
        onSubmit={onSubmit}
        >
            {children}
        </AntDBtn>
    </div>
  )
}

export default ButtonComp