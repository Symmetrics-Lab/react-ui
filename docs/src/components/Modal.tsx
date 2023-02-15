import { Button, Modal } from '@symlab/react-ui';
import { useState } from 'react';
import { ExclamationCircleIcon } from '@heroicons/react/20/solid';
export default function ModalComponent() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <section className="flex flex-col h-20 bg-gray-50 dark:bg-gray-900">
        <Button
          onClick={() => setOpenModal(true)}
          variant="secondary"
          //className='bg-gray-50 dark:bg-gray-900'
        >
          Show Modal
        </Button>
        {openModal && (
          <Modal id="modal" className="h-60" setShowModal={setOpenModal}>
            <>
              <div className="relative min-h-screen md:flex md:items-center md:justify-center px-4">
                <div className="bg-white dark:bg-gray-700 rounded-lg md:max-w-md md:mx-auto px-4 fixed inset-x-0 bottom-0 z-50 md:relative">
                  <div className="md:flex items-center ">
                    <div className="rounded-full border border-gray-300 flex items-center justify-center w-16 h-16 flex-shrink-0 mx-auto">
                      <ExclamationCircleIcon className="text-symlab-blue-100 dark:text-symlab-blue-10" />
                    </div>
                    <div className="mt-4 md:mt-0 md:ml-6 text-center md:text-left">
                      <p className="font-bold dark:text-white">Delete your account</p>
                      <p className="text-sm dark:text-gray-300 text-gray-700 mt-1">
                        You will lose all of your data by deleting your account. This action cannot
                        be undone.
                      </p>
                    </div>
                  </div>
                  <div className="text-center md:text-right mt-8 md:flex md:justify-end">
                    <Button
                      className="block w-full md:inline-block md:w-auto px-4 py-3 md:py-2 bg-red-200 text-red-700 rounded-lg font-semibold text-sm md:ml-2 md:order-2"
                      onClick={() => setOpenModal(false)}
                    >
                      Confirm
                    </Button>
                    <Button
                      onClick={() => setOpenModal(false)}
                      className="block w-full md:inline-block md:w-auto px-4 py-3 md:py-2 bg-gray-200 rounded-lg font-semibold text-sm mt-4
                      md:mt-0 md:order-1 text-gray-500"
                    >
                      Cancel
                    </Button>
                  </div>
                </div>
              </div>
            </>
          </Modal>
        )}
      </section>
    </>
  );
}
