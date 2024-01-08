import * as React from 'react';

import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';

import { Box, BoxProps } from '../Box';

import styles from './Flex.module.css';
import type { Spaces } from '../../types';
import { variableProp } from '../../utils/variableProp';

type FlexDirectionValues = 'start' | 'center' | 'end' | 'stretch';

export interface FlexProps extends BoxProps {
  alignItems?: FlexDirectionValues;
  direction?: 'column' | 'row';
  gap?: Spaces;
  justifyContent?: FlexDirectionValues | 'space-between';
}

export function Flex({
  alignItems,
  asChild = false,
  children,
  className,
  direction = 'row',
  gap,
  justifyContent,
  ...props
}: FlexProps) {
  const Tag = asChild ? Slot : Box;

  return (
    <Tag
      className={clsx(
        styles.base,

        variableProp(alignItems, 'alignItems', styles),
        variableProp(direction, 'direction', styles),
        variableProp(gap, 'gap', styles),
        variableProp(justifyContent, 'justifyContent', styles),

        className,
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}
