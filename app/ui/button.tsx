import clsx from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function Button({ children, className, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={clsx(
        'flex h-10 items-center justify-center rounded-lg px-4 py-6 text-sm font-medium transition-colors hover:bg-white hover:border-2 hover:border-black hover:text-black aria-disabled:cursor-not-allowed aria-disabled:opacity-50 cursor-pointer',
        className,
      )}
    >
      {children}
    </button>
  );
}