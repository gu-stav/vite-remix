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

export function Box({ asChild, children, display, className, marginBlock, marginBlockEnd, marginBlockStart, marginInline, marginInlineEnd, marginInlineStart, paddingBlock, paddingBlockEnd, paddingBlockStart, paddingInline, paddingInlineEnd, paddingInlineStart }: BoxProps) {
    const Tag = asChild ? Slot : 'div';

    return <Tag className={clsx(
        styles.base,

        display === 'inline' && styles.displayInline,
        display === 'inline-block' && styles.displayInlineBlock,

        marginBlock === 1 && styles.marginBlock1,
        marginBlock === 2 && styles.marginBlock2,
        marginBlock === 3 && styles.marginBlock3,

        marginBlockEnd === 1 && styles.marginBlockEnd1,
        marginBlockEnd === 2 && styles.marginBlockEnd2,
        marginBlockEnd === 3 && styles.marginBlockEnd3,

        marginBlockStart === 1 && styles.marginBlockStart1,
        marginBlockStart === 2 && styles.marginBlockStart2,
        marginBlockStart === 3 && styles.marginBlockStart3,

        marginInline === 1 && styles.marginInline1,
        marginInline === 2 && styles.marginInline2,
        marginInline === 3 && styles.marginInline3,

        marginInlineEnd === 1 && styles.marginInlineEnd1,
        marginInlineEnd === 2 && styles.marginInlineEnd2,
        marginInlineEnd === 3 && styles.marginInlineEnd3,

        marginInlineStart === 1 && styles.marginInlineStart1,
        marginInlineStart === 2 && styles.marginInlineStart2,
        marginInlineStart === 3 && styles.marginInlineStart3,

        paddingBlock === 1 && styles.paddingBlock1,
        paddingBlock === 2 && styles.paddingBlock2,
        paddingBlock === 3 && styles.paddingBlock3,

        paddingBlockEnd === 1 && styles.paddingBlockEnd1,
        paddingBlockEnd === 2 && styles.paddingBlockEnd2,
        paddingBlockEnd === 3 && styles.paddingBlockEnd3,

        paddingBlockStart === 1 && styles.paddingBlockStart1,
        paddingBlockStart === 2 && styles.paddingBlockStart2,
        paddingBlockStart === 3 && styles.paddingBlockStart3,

        paddingInline === 1 && styles.paddingInline1,
        paddingInline === 2 && styles.paddingInline2,
        paddingInline === 3 && styles.paddingInline3,

        paddingInlineEnd === 1 && styles.paddingInlineEnd1,
        paddingInlineEnd === 2 && styles.paddingInlineEnd2,
        paddingInlineEnd === 3 && styles.paddingInlineEnd3,

        paddingInlineStart === 1 && styles.paddingInlineStart1,
        paddingInlineStart === 2 && styles.paddingInlineStart2,
        paddingInlineStart === 3 && styles.paddingInlineStart3,

        className,
    )}>
        {children}
    </Tag>
}
