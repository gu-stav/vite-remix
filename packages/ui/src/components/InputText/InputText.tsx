import { clsx } from 'clsx';

import styles from './InputText.module.css';

export function InputText({ type = 'text', ...props }) {
    return <input type={type} className={clsx(styles.input)} {...props} />
}
