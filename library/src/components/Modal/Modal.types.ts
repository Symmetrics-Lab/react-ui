export interface ModalProps {
  setShowModal:(state: boolean) => void; 
  onClose?: () => void;
  id?: string;
  children?: React.ReactNode;
  className?: string;
}
