import { style, styleVariants } from '@vanilla-extract/css';

export const displayBlock = style({
    display: 'block'
  });


export const backgroundColorVariant = styleVariants({
    red: { backgroundColor: 'red' },
    blue: { backgroundColor: 'blue' },
})

export const colorVariant = styleVariants({
  white: { color: 'white' },
  black: { color: 'black' }
})
