import React, {FC} from 'react';
import AppRoutes from './routes';
import styles from './index.module.scss';

const App: FC = () => {
    return (
            <div className={styles.main}>
                <AppRoutes />
            </div>
    );
};

export default App;