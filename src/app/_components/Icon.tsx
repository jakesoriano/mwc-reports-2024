interface Props {
  name: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
  extraClass?: string;
}

const sizes = {
  sm: 'text-sm',
  md: 'text-base',
  lg: 'text-lg',
  xl: 'text-xl',
  '2xl': 'text-2xl',
  '3xl': 'text-3xl',
};

const Icon = ({ name, size, extraClass }: Props) => {
  return (
    <span
      className={`icon icon-${name} ${size ? sizes[size] : ''} ${extraClass}`}
    />
  );
};

export default Icon;
