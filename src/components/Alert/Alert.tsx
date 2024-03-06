import { styled } from 'stitches';

export const Alert = styled('div', {
  variants: {
    variant: {
      default: {
        backgroundColor: 'hsl($background)',
        color: 'hsl($foreground)',
      },
      destructive: {
        borderColor: 'hsl($destructive)',
        borderWidth: '1px',
        color: 'hsl($destructive)',
        '[&>svg]': {
          color: 'hsl($destructive)',
        },
      },
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});
Alert.displayName = 'Alert';
