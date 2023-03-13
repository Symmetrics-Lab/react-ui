import { Button, Modal } from '@symlab/react-ui';
import { useState } from 'react';
import { ExclamationCircleIcon } from '@heroicons/react/20/solid';
export default function ModalComponent() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <section className="flex flex-col h-20 bg-sym-wallpaper dark:bg-sym-wallpaper-dark">
        <Button
          onClick={() => setOpenModal(true)}
          variant="outline"
          //className='bg-sym-wallpaper dark:bg-sym-wallpaper-dark'
        >
          Show Modal
        </Button>

        <Modal id="modal" className="h-60" showModal={openModal} setShowModal={setOpenModal}>
          <>
            <div className="relative min-h-screen md:flex md:items-center md:justify-center px-4">
              <div className="bg-sym-layout dark:bg-sym-layout-dark rounded-lg md:max-w-md md:mx-auto px-4 fixed inset-x-0 bottom-0 z-50 md:relative">
                <div className="md:flex items-center ">
                  <div className="rounded-full border flex items-center justify-center w-16 h-16 flex-shrink-0 mx-auto">
                    <ExclamationCircleIcon className="text-error" />
                  </div>
                  <div className="mt-4 md:mt-0 md:ml-6 text-center md:text-left text-sym-txt-primary dark:text-sym-txt-primary-dark">
                    <p className="font-bold ">Delete your account</p>
                    <p className="text-sm mt-1">
                      You will lose all of your data by deleting your account. This action cannot be
                      undone.
                    </p>
                  </div>
                </div>
                <div className="text-center md:text-right mt-8 md:flex md:justify-end">
                  <Button
                    className="block w-full md:inline-block md:w-auto px-4 py-3 md:py-2 bg-error text-error-dark rounded-lg font-semibold text-sm md:ml-2 md:order-2"
                    onClick={() => setOpenModal(false)}
                  >
                    Confirm
                  </Button>
                  <Button
                    onClick={() => setOpenModal(false)}
                    className="block w-full md:inline-block md:w-auto px-4 py-3 md:py-2 bg-gray-200 rounded-lg font-semibold text-sm mt-4
                      md:mt-0 md:order-1 text-sym-txt-primary"
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            </div>
          </>
        </Modal>
      </section>
    </>
  );
}
