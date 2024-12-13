import React from 'react';
import classnames from 'classnames';
enum ButtonColors {
  teal = 'teal',
  yellow = 'yellow',
  silver = 'silver',
  navy = 'navy',
}
enum ButtonSizes {
  small = 'small',
  medium = 'medium',
  large = 'large',
}
interface ButtonProps {
  color?: keyof typeof ButtonColors;
  size?: keyof typeof ButtonSizes;
}
const COLORS: Record<keyof typeof ButtonColors, string> = {
  [ButtonColors.teal]:
    'bg-teal-400 text-navy-500  shadow-[0_8px_0_theme(colors.teal.500),0_10px_4px_rgba(0,0,0,1)] hover:bg-teal-300',
  [ButtonColors.yellow]:
    'bg-yellow-400 text-navy-500  shadow-[0_8px_0_theme(colors.yellow.500)] hover:bg-yellow-300',
  [ButtonColors.silver]:
    'bg-gray-400 text-navy-500  shadow-[0_8px_0_theme(colors.gray.500)] hover:bg-silver-300',
  [ButtonColors.navy]:
    'bg-navy-400 text-silver-400 shadow-[0_8px_0_theme(colors.navy.600)] hover:bg-navy-500',
};
const SIZES: Record<keyof typeof ButtonSizes, string> = {
  [ButtonSizes.small]: 'px-2 py-2 text-sm',
  [ButtonSizes.medium]: 'px-3 py-3 text-base',
  [ButtonSizes.large]: 'px-4 py-4 text-lg',
};
export default function Button(props: React.ButtonHTMLAttributes<HTMLButtonElement> & ButtonProps) {
  const { className, color = ButtonColors.teal, size = ButtonSizes.medium, children } = props;
  const classes = classnames(
    'font-bold uppercase rounded-xl',
    COLORS[color],
    SIZES[size],
    className
  );
  return (
    <button {...props} className={classes}>
      {children}
    </button>
  );
}
