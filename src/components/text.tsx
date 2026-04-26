import { ElementType, forwardRef, ReactNode } from 'react';
import { tv, type VariantProps } from 'tailwind-variants';
import { cn } from '../utils/cn'; // utilitário de merge de classes

const textVariants = tv({
  base: '',
  variants: {
    variant: {
      default: 'text-xl',
      muted: 'text-xl text-(--text-secondary)',
      heading: 'text-2xl',
      blast: 'text-3xl',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

type TextOwnProps<T extends ElementType = 'span'> = {
  as?: T;
  children: ReactNode;
  className?: string;
} & VariantProps<typeof textVariants>;

type TextProps<T extends ElementType> = TextOwnProps<T> &
  Omit<React.ComponentPropsWithoutRef<T>, keyof TextOwnProps<T>>;

const Text = forwardRef(
  <T extends ElementType = 'span'>(
    {
      as: Component = 'span',
      variant,
      className,
      children,
      ...props
    }: TextProps<T>,
    ref: React.ForwardedRef<any>,
  ) => {
    return (
      <Component
        ref={ref}
        className={cn(textVariants({ variant }), className)}
        {...props}
      >
        {children}
      </Component>
    );
  },
);

Text.displayName = 'Text';
export default Text;
