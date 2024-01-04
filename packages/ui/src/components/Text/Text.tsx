import * as React from 'react';
import { clsx } from 'clsx';

import { Box, BoxProps } from '../Box';

import styles from './Text.module.css';

export interface TextProps extends BoxProps {
  align?: React.CSSProperties['textAlign'];
  transform?: React.CSSProperties['textTransform'];
}

export function Text({ children, align, className, transform, ...props }) {
  return (
    <Box
      className={clsx(
        align === 'center' && styles.alignCenter,
        align === 'end' && styles.alignEnd,
        align === 'start' && styles.alignStart,

        // TODO: color, lineHeight

        transform === 'uppercase' && styles.transformUppercase,

        className,
      )}
      display="inline"
      {...props}
    >
      {children}
    </Box>
  );
}
