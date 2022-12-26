import React from 'react';

export interface ItemProps {
  name: string;
  link: string;
  className?: string;
  current?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon?: any;
}

export interface ItemUser {
  img?: string;
  lastSesion?: string;
  name?: string;
  label?:string;
}

export interface SubMenuProps {
  className?: string;
  items: ItemProps[];
  as?: React.ElementType;
  currentPath?: string;
  classNameItem?: string;
  userData?: ItemUser;
}
