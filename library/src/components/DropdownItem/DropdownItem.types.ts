export interface DropdownItemProps {
  className?: string;
  link: string;
  disabled?: boolean;
  as?: React.ElementType;
  children?: React.ReactNode;
  onClick?: (event: React.MouseEvent) => void;
}
