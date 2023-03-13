import { forwardRef, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { ModalProps } from './Modal.types';
import './style.css';
import * as ReactDOM from 'react-dom/client';
const Modal = forwardRef<HTMLSelectElement, ModalProps>(function Modal(props, ref) {
  const { showModal, setShowModal, children, className, onClose, id } = props;
  const [portalDiv, setProtalDiv] = useState<HTMLElement>();

  // close the modal when clicking outsidxe the modal.
  const modalRef = useRef<HTMLDivElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const closeModal = (e: any) => {
    if (e.target === modalRef.current) {
      setShowModal(false);
    }
  };
  useEffect(() => {
    if (showModal) {
      const domNode = document.createElement('div');
      domNode.setAttribute('id', 'portal');
      ReactDOM.createRoot(domNode);
      document.body.appendChild(domNode);
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setProtalDiv(document.getElementById('portal')!);
    } else {
      const portal = document.getElementById('portal');
      portal?.remove();
    }
  }, [setShowModal, showModal]);
  return (
    <>
      {showModal &&
        portalDiv &&
        createPortal(
          <div
            id={'modal-sym' || id}
            role="none"
            className="fixed top-0 left-0 h-screen w-full flex items-center justify-center bg-black bg-opacity-70"
            ref={modalRef}
            onClick={closeModal}
          >
            <div
              className={`relative z-10 bg-sym-layout dark:bg-sym-layout-dark opacity-100 w-96 h-80 flex items-center justify-center rounded-md ${className}`}
              style={{ animation: 'animate 0.3s' }}
            >
              <main className="w-full">{children}</main>
              <button
                className="absolute top-4 right-4 text-sym-txt-primary dark:text-sym-txt-primary-dark font-bold cursor-pointer"
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
        )}
    </>
  );
});
export default Modal;
