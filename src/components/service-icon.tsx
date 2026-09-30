import { Bug, Code, Puzzle, RefreshCw, type LucideIcon } from 'lucide-react';

/**
 * Icons for the four services, in the same order as `services.services` in
 * the dictionaries. Shared by the services page and the home page teaser so
 * a service always shows the same icon.
 */
const SERVICE_ICONS: LucideIcon[] = [Code, Puzzle, RefreshCw, Bug];

interface ServiceIconProps {
  /** Position of the service in `services.services`. */
  index: number;
  className?: string;
}

export function ServiceIcon({ index, className = 'w-6 h-6' }: ServiceIconProps) {
  const Icon = SERVICE_ICONS[index] ?? Code;
  return <Icon className={className} strokeWidth={1.75} aria-hidden="true" />;
}
