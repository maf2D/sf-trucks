import { ButtonHTMLAttributes } from 'react';
import type { FC } from 'react';
import { BaseButton, PrimaryButton, SecondaryButton } from './button.styles';

export enum BUTTON_TYPE_CLASSES {
  base = 'base',
  primary = 'primary',
  secondary = 'secondary'
}

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) => ({
  [BUTTON_TYPE_CLASSES.base]: BaseButton,
  [BUTTON_TYPE_CLASSES.primary]: PrimaryButton,
  [BUTTON_TYPE_CLASSES.secondary]: SecondaryButton
}[buttonType]);

export type ButtonProps = {
  buttonType?: BUTTON_TYPE_CLASSES;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = ({
  children,
  buttonType = BUTTON_TYPE_CLASSES.base,
  ...restProps
}) => {
  const CustomButton = getButton(buttonType);

  return <CustomButton {...restProps}>{children}</CustomButton>;
};

export default Button;
