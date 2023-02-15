import { forwardRef, useRef } from 'react';
import ReactDom from 'react-dom';
import { ModalProps } from './Modal.types';
import './style.css';

const Modal = forwardRef<HTMLSelectElement, ModalProps>(function Modal(props, ref) {
  const { setShowModal, children, className, onClose, id } = props;

  // close the modal when clicking outsidxe the modal.
  const modalRef = useRef<HTMLDivElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const closeModal = (e: any) => {
    if (e.target === modalRef.current) {
      setShowModal(false);
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const portalDiv = document.getElementById('portal')!;

  return ReactDom.createPortal(
    <div
      id={'modal-sym' || id}
      role="none"
      className="fixed top-0 left-0 h-screen w-full flex items-center justify-center bg-black bg-opacity-70"
      ref={modalRef}
      onClick={closeModal}
    >
      <div
        className={`relative z-10 bg-white dark:bg-gray-700 opacity-100 w-96 h-80 flex items-center justify-center rounded-md ${className}`}
        style={{ animation: 'animate 0.3s' }}
      >
        <main className="w-full">{children}</main>
        <button
          className="absolute top-4 right-4 text-black dark:text-white font-bold cursor-pointer"
          type="button"
          onClick={() => {
            setShowModal(false);
            if (onClose) {
              onClose();
            }
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>,
    portalDiv
  );
});
export default Modal;
