import React, {FC} from 'react';
import DefaultLayout from '../../containers/defaultLayout/defaultLayout';
import styles from './main.module.scss';

const MainPage: FC = () => {
    return <DefaultLayout >
            <main className={styles.test}>main</main>
        </DefaultLayout>
};

export default MainPage;