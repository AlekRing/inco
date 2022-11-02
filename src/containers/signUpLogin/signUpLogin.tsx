import React, { FC, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import LaunchRocket from '../../assets/img/png/signUpLogin/launchRocket.png';
import styles from './signUpLogin.module.scss';

interface SignUpLoginProps {
    isLogin: boolean;
    children: ReactNode;
}

const SignUpLogin: FC<SignUpLoginProps> = ({isLogin, children}) => {
    return (
        <div className={styles.container}>
            <div className={styles.blueBoxContainer}>
                <p className={styles.ideas}>★ Место встречи идей</p>
                <h1 className={styles.title}>Начни свой стартап вместе с нами</h1>
                <p className={styles.subtitle}>Расскажите о своей идеи, найдите команду и средства</p>
                <img src={LaunchRocket} alt="start here" className={styles.img} />
            </div>
            <div className={styles.formContainer}>
                {
                    isLogin ? (
                        <>
                            <h2 className={styles.formTitle}>Вход</h2>
                            <p>Нет аккаунта? <Link to='/signup'>Зарегистрироваться</Link></p>
                        </>
                    )
                    :
                    (
                        <>
                            <h2 className={styles.formTitle}>Регистрация</h2>
                            <p>Уже есть аккаунт? <Link to='/login'>Войти</Link></p>
                        </>
                    )
                }

                {children}
            </div>
        </div>
    );
};

export default SignUpLogin;