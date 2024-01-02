import * as React from 'react';

import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';

import styles from './Box.module.css';

export interface BoxProps {
    asChild?: boolean;
    children: React.ReactNode;
    className?: string;
}

export function Box({ asChild, children, className }: BoxProps) {
    const Tag = asChild ? Slot : 'div';

    return <Tag className={clsx(
        styles.base,

        className
    )}>
        {children}
    </Tag>
}
