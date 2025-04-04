export const ALERT_VARIANTS = {
  info:     'alert-info',
  error:    'alert-error',
  success:  'alert-success',
  warning:  'alert-warning'
} as const;

export type AlertVariant = 'info' | 'error' | 'success' | 'warning';

export interface Alert {
  type:     AlertVariant;
  message:  string;
  icon:     string;
}
