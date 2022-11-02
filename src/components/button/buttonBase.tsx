import React, { FC } from "react";
import styles from './button.module.scss';

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
        <button type={type} onClick={handleClick} className={styles.btn}>
            {text}
            {children}
        </button>
    )
};

export default ButtonBase;