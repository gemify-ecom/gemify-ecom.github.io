import { Link, type LinkProps } from 'react-router-dom';
import { useLocalePath } from './use-locale';

interface LocalizedLinkProps extends Omit<LinkProps, 'to'> {
  to: string;
}

/** A react-router `Link` that keeps the visitor in the current language. */
export function LocalizedLink({ to, ...props }: LocalizedLinkProps) {
  const localePath = useLocalePath();

  return <Link to={localePath(to)} {...props} />;
}
