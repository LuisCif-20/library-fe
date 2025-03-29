export const POSITION_VARIANTS = {
  top:    'tooltip-top',
  left:   'tooltip-left',
  right:  'tooltip-right',
  bottom: 'tooltip-bottom',
} as const;

export type Position = 'top' | 'left' | 'right' | 'bottom';
