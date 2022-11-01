import React, {FC} from 'react';
import { Link } from 'react-router-dom';
import styles from './main.module.scss';

const MainPage: FC = () => {
    return (
        <>
            <Link to='/login'>login</Link>
            <Link to='/signup'>signup</Link>
            <Link to='/profile'>profile</Link>
            <main className={styles.test}>main</main>
        </>
    )
};

export default MainPage;