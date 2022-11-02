import React from "react";
import { Link, useNavigate } from "react-router-dom";
import ButtonBase from "../../components/button/buttonBase";
import InputBase from "../../components/input/inputBase";
import SignUpLogin from "../signUpLogin/signUpLogin";
import styles from './login.module.scss';

interface fieldsInterface {
    [string: string]: {
        label: string;
        placeholder: string;
        type?: 'number' | 'password' | 'text';
    }
} 

const fields: fieldsInterface = {
    username: {
        label: 'Почта',
        placeholder: 'user name',
    },
    password: {
        label: 'Пароль',
        placeholder: 'password',
        type: 'password',
    },
};

const Login = () => {
    const navigate = useNavigate();

    const handleSubmit = (e: any, inputsKeys: string[]) => {
        e.preventDefault();

        const inputValues: {[string: string]: {name: string, value: FormDataEntryValue | null}} = {};

        const formData = new FormData(e.target);
        
        inputsKeys.forEach(name => inputValues[name] = {name, value: formData.get(name)});

        console.log(inputValues);

        if (inputValues['username'].value === '1' && inputValues['password'].value === '1') {
            navigate('/');
            localStorage.setItem('isLogin', 'true');
        } else {
            console.log('test failed login');
            
        }
    };

    return (
        <SignUpLogin>
            <div className={styles.container}>
                <h2 className={styles.title}>Вход</h2>
                <p>Нет аккаунта? <Link to='/signup'>Зарегистрироваться</Link></p>
                <form action="submit" onSubmit={e => handleSubmit(e, Object.keys(fields))} className={styles.form}>
                    {
                        Object.entries(fields).map(([key, value]) => (
                            <label htmlFor={key} key={key} className={styles.inputLabel}>
                                <span>{value.label}</span>
                                <InputBase key={key} name={key} {...value} />
                            </label>
                        ))
                    }
                    <ButtonBase text="Submit" type="submit" />
                </form>
            </div>
        </SignUpLogin>
    )
};

export default Login;