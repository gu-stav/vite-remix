import { clsx } from 'clsx';

import { Box, BoxProps } from '../Box';

import styles from './InputText.module.css';

export interface InputTextProps extends BoxProps {
  type?: 'text' | 'email';
}

export function InputText({ className, type = 'text', ...props }) {
  return (
    <Box
      asChild
      className={clsx(styles.input, className)}
      paddingBlock={1}
      paddingInline={1}
    >
      <input type={type} {...props} />
    </Box>
  );
}
