import * as React from 'react';
import { clsx } from 'clsx';

import { Box } from '../Box';

import styles from './InputText.module.css';

export interface InputTextProps
  extends React.HTMLAttributes<HTMLInputElement> {}

export function InputText({ className, ...props }: InputTextProps) {
  return (
    <Box
      asChild
      borderRadius={1}
      className={clsx(styles.input, className)}
      paddingBlock={2}
      paddingInline={2}
    >
      <input type="text" {...props} />
    </Box>
  );
}
