import React from 'react';

export interface NavBarProps {
  logo: React.ReactNode;
  leftItems?: React.ReactNode;
  rightItems?: React.ReactNode;
  itemsMobile?: {
    label: string;
    link: string;
    current?: boolean;
  }[];
  currentPath?: string;
}
