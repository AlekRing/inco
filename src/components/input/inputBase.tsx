import React, { FC } from "react";

interface InputBaseInterface {
    value?: string;
    type?: 'text' | 'password' | 'number';
    placeholder?: string;
    name?: string;
    id?: string;
    autoComplete?: 'on' | 'off';
}

const InputBase: FC<InputBaseInterface> = ({type = 'text', placeholder = '', value, name, id, autoComplete = 'on'}) => {
    return (
        <input type={type} placeholder={placeholder} value={value} name={name} autoComplete={autoComplete} />
    )
};

export default InputBase;