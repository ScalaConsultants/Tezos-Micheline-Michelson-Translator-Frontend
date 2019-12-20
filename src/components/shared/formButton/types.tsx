export type ButtonProps = {
  type: 'submit' | 'reset' | 'button';
  label: string;
  className?: string;
  onClick?: any;
  disabled?: boolean;
  stylingType?: string;
};
