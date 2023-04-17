// import {} from 'react';

// import * as React from 'react';
import styles from '../styles/Userpage.module.css'

export interface IUserProps {
}

export default function User (props: IUserProps) {
  return (
    <div className={`${styles.root}`}>
      恭喜你，登录成功！
    </div>
  );
}
