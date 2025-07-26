import clsx from 'clsx';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
}

export function Input({ className, ...rest }: InputProps) {
  return (
    <input
      {...rest}
      className={clsx(
        'peer block w-full rounded-lg border border-gray-200 py-[12px] pl-2 text-sm placeholder:text-gray-500',
        className,
      )}
    />
  );
}