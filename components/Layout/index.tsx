import React, { FC, ReactNode, ReactElement } from 'react';
import styles from '../../styles/Layout.module.css'

interface Props { 
    children: ReactNode[];
}

const Layout: FC<Props> = ({children}): ReactElement => {
  return (<div className={styles.Layout__container}>
    {children}
    <footer className={styles.footer}>Im the footer</footer>
  </div>)
}

Layout.defaultProps = {
  children: [],
}

export default Layout;