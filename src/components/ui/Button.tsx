import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useRouter } from '@/lib/router';

type Variant = 'primary' | 'secondary' | 'outline' | 'outline-light';
type Size = 'md' | 'lg';

const baseStyles =
  'inline-flex items-center justify-center gap-2 font-body font-semibold tracking-wide transition-all duration-300 ease-smooth focus-visible:outline-offset-4 disabled:opacity-50 disabled:pointer-events-none';

const variantStyles: Record<Variant, string> = {
  primary:
    'bg-dzone-yellow text-dzone-black hover:bg-dzone-yellow-dark hover:-translate-y-0.5 active:translate-y-0',
  secondary:
    'bg-dzone-black text-white hover:bg-dzone-black/85 hover:-translate-y-0.5 active:translate-y-0',
  outline:
    'border border-dzone-black/20 text-dzone-black hover:border-dzone-black hover:bg-dzone-black hover:text-white',
  'outline-light':
    'border border-white/25 text-white hover:border-white hover:bg-white hover:text-dzone-black',
};

const sizeStyles: Record<Size, string> = {
  md: 'text-[13px] uppercase px-6 h-12 rounded-lg',
  lg: 'text-[14px] uppercase px-8 h-14 rounded-xl',
};

interface CommonProps {
  variant?: Variant;
  size?: Size;
  external?: boolean;
  children: ReactNode;
  className?: string;
  withArrow?: boolean;
}

type ButtonProps = CommonProps & ButtonHTMLAttributes<HTMLButtonElement> & { to?: undefined };
type AnchorProps = CommonProps & AnchorHTMLAttributes<HTMLAnchorElement> & { to: string };

export function LinkButton({
  to,
  variant = 'primary',
  size = 'md',
  external = false,
  children,
  className,
  withArrow = false,
  ...rest
}: AnchorProps) {
  const { navigate } = useRouter();
  const isExternal = external || to.startsWith('http');

  const handleInternal = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate(to);
  };

  return (
    <a
      href={isExternal ? to : `#${to}`}
      onClick={isExternal ? undefined : handleInternal}
      {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className={cn(baseStyles, variantStyles[variant], sizeStyles[size], 'group', className)}
      {...rest}
    >
      {children}
      {withArrow && <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />}
    </a>
  );
}

export function Button({
  variant = 'primary',
  size = 'md',
  children,
  className,
  withArrow = false,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={cn(baseStyles, variantStyles[variant], sizeStyles[size], 'group', className)}
      {...rest}
    >
      {children}
      {withArrow && <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />}
    </button>
  );
}
