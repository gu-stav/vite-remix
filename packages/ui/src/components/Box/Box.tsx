import * as React from 'react';

import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';

import styles from './Box.module.css';

export interface BoxProps {
    asChild?: boolean;
    children: React.ReactNode;
    className?: string;
    display?: React.CSSProperties['display'];

    marginBlock?: React.CSSProperties['marginBlock'];
    marginBlockEnd?: React.CSSProperties['marginBlockEnd'];
    marginBlockStart?: React.CSSProperties['marginBlockStart'];
    marginInline?: React.CSSProperties['marginInline'];
    marginInlineEnd?: React.CSSProperties['marginInlineEnd'];
    marginInlineStart?: React.CSSProperties['marginInlineStart'];

    paddingBlock?: React.CSSProperties['paddingBlock'];
    paddingBlockEnd?: React.CSSProperties['paddingBlockEnd'];
    paddingBlockStart?: React.CSSProperties['paddingBlockStart'];
    paddingInline?: React.CSSProperties['paddingInline'];
    paddingInlineEnd?: React.CSSProperties['paddingInlineEnd'];
    paddingInlineStart?: React.CSSProperties['paddingInlineStart'];
}

function variableProp(variable, variableName, styles) {
    if (variable === undefined || variable === null) {
        return false;
    }

    return styles?.[`${variableName}${variable}`] ?? false;
}

export function Box({ asChild, children, display, className, marginBlock, marginBlockEnd, marginBlockStart, marginInline, marginInlineEnd, marginInlineStart, paddingBlock, paddingBlockEnd, paddingBlockStart, paddingInline, paddingInlineEnd, paddingInlineStart }: BoxProps) {
    const Tag = asChild ? Slot : 'div';

    return <Tag className={clsx(
        styles.base,

        display === 'inline' && styles.displayInline,
        display === 'inline-block' && styles.displayInlineBlock,

        variableProp(marginBlock, 'marginBlock', styles),
        variableProp(marginBlockEnd, 'marginBlockEnd', styles),
        variableProp(marginBlockStart, 'marginBlockStart', styles),

        variableProp(marginInline, 'marginInline', styles),
        variableProp(marginInlineEnd, 'marginInlineEnd', styles),
        variableProp(marginInlineStart, 'marginInlineStart', styles),

        variableProp(paddingBlock, 'paddingBlock', styles),
        variableProp(paddingBlockEnd, 'paddingBlockEnd', styles),
        variableProp(paddingBlockStart, 'paddingBlockStart', styles),

        variableProp(paddingInline, 'paddingInline', styles),
        variableProp(paddingInlineEnd, 'paddingInlineEnd', styles),
        variableProp(paddingInlineStart, 'paddingInlineStart', styles),

        className,
    )}>
        {children}
    </Tag>
}
