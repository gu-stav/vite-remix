import { clsx } from 'clsx';

import { Box } from '../Box';

import styles from './InputText.module.css';

export function InputText({ type = 'text', ...props }) {
    return <Box asChild>
        <input type={type} className={clsx(styles.input)} {...props} />
    </Box>
}
