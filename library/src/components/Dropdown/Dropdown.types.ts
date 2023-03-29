interface DropDownTypes {
  className?: string;
  subClassName?: string;
  srLabel?: string;
  children: React.ReactNode;
}

interface DropdownWithLabel extends DropDownTypes {
  label: string;
  icon?: never;
}

interface DropdownWithIcon extends Partial<DropDownTypes> {
  label?: never;
  icon: React.ReactNode;
}

export type DropdownProps = DropdownWithLabel | DropdownWithIcon;
