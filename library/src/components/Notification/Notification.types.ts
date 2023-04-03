import React from 'react';

export interface Item {
  icon?: string | React.ReactNode;
  title?: string;
  description?: string;
  time?: string;
  
}

export interface NotificationProps {
  key?: string;
  rounded?: 'rounded-full' | 'rounded-md' | 'rounded-lg' | 'rounded' | 'rounded-none';
  shadow?: boolean;
  className?: string;
  as?: React.ElementType;
  to?: string | null;
  onClick?: (event: React.MouseEvent) => void;
  data?: Item;
}
