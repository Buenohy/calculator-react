import React from 'react';
import { tv, type VariantProps } from 'tailwind-variants';
import Text from './text';

const buttonVariants = tv({
  base: 'flex items-center justify-center rounded-xl p-3 cursor-pointer text-(--text) bg-linear-(--gradient) hover:bg-linear-(--gradient-hover) shadow-(--shadow)',

  variants: {
    variant: {
      default: 'bg-(--background)',
      primary: 'bg-(--primary)',
    },
  },

  defaultVariants: {
    variant: 'default',
  },
});

interface ButtonProps
  extends
    Omit<React.ComponentProps<'button'>, 'size' | 'disabled'>,
    VariantProps<typeof buttonVariants> {}

export default function Button({
  variant,
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <Text
      as="button"
      variant="heading"
      className={buttonVariants({ variant, className })}
      {...props}
    >
      {children}
    </Text>
  );
}
