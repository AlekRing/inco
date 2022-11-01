import React, { FC, ReactNode } from "react";
import Header from "../header/header";
import styles from './defaultLayout.module.scss';

export interface DefaultLayoutProps {
    title?: string;
    children?: ReactNode;
}

const DefaultLayout: FC<DefaultLayoutProps> = ({children}) => {
    return (
        <section className={styles.main}>
            <Header/>
            <main>{children}</main>
        </section>
    )
};

export default DefaultLayout;
