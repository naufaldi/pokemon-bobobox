import * as React from 'react';

import clsxm from '@/lib/clsxm';

enum ButtonVariant {
  'primary',
  'outline',
  'light',
}

enum ButtonSize {
  'small',
  'medium',
  'large',
}

export interface ButtonProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: keyof typeof ButtonVariant;
  size?: keyof typeof ButtonSize;
  type?: 'button' | 'submit';
  tag?: React.ElementType;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  disabled: buttonDisabled,
  variant = 'primary',
  size = 'medium',
  type = 'button',
  tag = 'button',
  ...rest
}) => {
  const disabled = buttonDisabled;
  const Component = tag;
  return (
    <Component
      type={type}
      disabled={disabled}
      className={clsxm(
        'inline-flex items-center rounded-lg  font-semibold',
        'focus:outline-none focus-visible:ring focus-visible:ring-blue-500',
        'shadow-sm',
        'transition-colors duration-75',
        //#region  //*=========== Variants ===========
        [
          variant === 'primary' && [
            'bg-blue-500 text-white',
            'border border-blue-500',
            'hover:bg-blue-600 hover:text-white',
            'active:bg-blue-500',
            'disabled:bg-blue-400 disabled:hover:bg-blue-400',
          ],
          variant === 'outline' && [
            'text-blue-500',
            'border border-gray-500',
            ' hover:border-blue-500 hover:bg-blue-500 hover:text-white',
          ],
          variant === 'light' && [
            'bg-white text-dark ',
            'border border-gray-300',
            'hover:bg-gray-100 hover:text-dark',
            'active:bg-white/80 disabled:bg-gray-200',
          ],
        ],
        //#endregion  //*======== Variants ===========
        [
          size === 'medium' && 'px-4 py-2',
          size === 'large' && 'px-8 py-3',
          size === 'small' && 'px-2 py-1',
        ],
        'disabled:cursor-not-allowed',

        className
      )}
      {...rest}
    >
      {children}
    </Component>
  );
};

export default Button;
