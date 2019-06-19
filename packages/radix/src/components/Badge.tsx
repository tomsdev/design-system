import styled from 'styled-components';
import { ResponsiveValue } from 'styled-system';
import { margin, MarginProps, variant } from '@modulz/radix-system';
import css from '@styled-system/css';

type Variants = 'gray' | 'blue' | 'green' | 'red' | 'yellow';
type Sizes = 'normal' | 'large';

type BadgeProps = MarginProps & {
  variant?: ResponsiveValue<Variants>;
  size?: ResponsiveValue<Sizes>;
  waiting?: boolean;
  block?: boolean;
};

export const Badge = styled('span')<BadgeProps>(
  css({
    alignItems: 'center',
    backgroundColor: 'transparent',
    border: '1px solid',
    borderRadius: 9999,
    display: 'inline-flex',
    fontFamily: 'medium',
    fontWeight: 500,
    letterSpacing: '.134em',
    outline: 'none',
    paddingY: 0,
    textIndent: '.134em',
    textTransform: 'uppercase',
    userSelect: 'none',
    verticalAlign: 'middle',
    whiteSpace: 'nowrap',
  }),
  variant({
    variant: {
      gray: {
        borderColor: 'grays.3',
        color: 'grays.5',
      },
      blue: {
        borderColor: 'blues.3',
        color: 'blues.5',
      },
      green: {
        borderColor: 'greens.3',
        color: 'greens.5',
      },
      red: {
        borderColor: 'reds.3',
        color: 'reds.5',
      },
      yellow: {
        borderColor: 'yellows.3',
        color: 'yellows.5',
      },
    },
  }),
  variant({
    size: {
      normal: {
        fontSize: 0,
        height: 3,
        minWidth: 5,
        paddingX: 2,
      },
      large: {
        fontSize: 1,
        height: 5,
        minWidth: 6,
        paddingX: 3,
      },
    },
  }),
  { lineHeight: 1 },
  margin
);

Badge.defaultProps = {
  variant: 'gray',
  size: 'normal',
};
