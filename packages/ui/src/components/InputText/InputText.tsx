import { clsx } from 'clsx';

import styles from './InputText.module.css';

export function InputText(props) {
    return <input type="text" className={clsx(styles.input)} {...props} />
}
