import React, { FC } from "react";

interface InputBaseInterface {
    text?: string;
    type?: 'button' | 'submit' | 'reset';
    handler?: () => void;
    children?: JSX.Element;
}

const ButtonBase: FC<InputBaseInterface> = ({type = 'button', text, handler, children}) => {

    const handleClick = () => {
        handler && handler();
    };

    return (
        <button type={type} onClick={handleClick}>
            {text}
            {children}
        </button>
    )
};

export default ButtonBase;