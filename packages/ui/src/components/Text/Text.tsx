import * as React from 'react';
import { clsx } from 'clsx';

import { Box, BoxProps } from '../Box';

import styles from './Text.module.css';
import type { Colors } from '../../types';
import { variableProp } from '../../utils/variableProp';

export interface TextProps extends BoxProps {
  align?: 'center' | 'start' | 'end';
  color?: Colors;
  transform?: 'uppercase';
}

export function Text({ children, color, align, className, transform, ...props }: TextProps) {
  return (
    <Box
      className={clsx(
        align === 'center' && styles.alignCenter,
        align === 'end' && styles.alignEnd,
        align === 'start' && styles.alignStart,

        // TODO: lineHeight
        variableProp(color, 'color', styles),

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
