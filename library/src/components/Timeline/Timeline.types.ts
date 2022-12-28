export interface TimelineProps {
  id?: string;
  className?: string;
  icon?: React.ReactNode;
  items: { title: string; date?: string; description?: string; icon?: React.ReactNode }[];
}
