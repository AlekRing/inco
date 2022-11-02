import React, { FC, ReactNode } from 'react';
import launchRocket from '../../assets/img/png/signUpLogin/launchRocket.png';
import styles from './signUpLogin.module.scss';

interface SignUpLoginProps {
    children: ReactNode;
}

const SignUpLogin: FC<SignUpLoginProps> = ({children}) => {
    return (
        <div className={styles.container}>
            <div className={styles.blueBoxContainer}>
                <p className={styles.ideas}>★ Место встречи идей</p>
                <h1 className={styles.title}>Начни свой стартап вместе с нами</h1>
                <p className={styles.subtitle}>Расскажите о своей идеи, найдите команду и средства</p>
                <img src={launchRocket} alt="start here" className={styles.img} />
            </div>
            {children}
        </div>
    );
};

export default SignUpLogin;