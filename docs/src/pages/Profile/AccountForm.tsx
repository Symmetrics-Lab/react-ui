import { Button, Loading, Timeline } from '@symlab/react-ui';
import { useEffect, useState } from 'react';
import Alert from '../../components/Alert';
import { activities, errsHttp } from '../../data/errsHttp';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function AccountForm() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [error, setError] = useState<any>();
  const [loading, isLoading] = useState(false);

  useEffect(() => {
    setError(null);
  }, []);

  const onDelete = () => {
    isLoading(true);
    setError(null);
    setTimeout(() => {
      const resp = errsHttp[Math.floor(Math.random() * errsHttp.length)];
      isLoading(false);
      resp.code !== 200 && setError(resp);
    }, 3000);
  };

  return (
    <>
      {loading && (
        <Loading>
          <svg
            aria-hidden="true"
            className="mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-white fill-blue-600 dark:fill-blue-400"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
        </Loading>
      )}
      <div className="divide-y divide-gray-200 dark:divide-gray-700 lg:col-span-9">
        <div className="py-6 px-4 sm:p-6 lg:pb-8">
          {error && (
            <div className="py-6">
              <Alert code={error?.code} message={error?.message} setError={setError} />
            </div>
          )}
          <div>
            <h2 className="text-lg font-medium leading-6 text-gray-900 dark:text-white">
              Activity
            </h2>

            <Timeline
              items={[...activities].reverse()}
             
            />
          </div>
        </div>
        <div className="py-6 px-4 sm:p-6 lg:pb-8">
          <div>
            <h2 className="text-lg font-medium leading-6 text-gray-900 dark:text-white">
              Deactivate account
            </h2>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-300">
              Once you deactivate your account, you may activate it again at any time.
            </p>
            <div className="p-10">
              <Button
                onClick={onDelete}
                type="submit"
                variant="primary"
                size="sm"
                className="mt-2 w-full bg-gray-100 dark:bg-gray-700 hover:bg-yellow-500 dark:hover:text-white font-bold hover:text-white focus:ring-0 focus:ring-offset-0 text-yellow-600 dark:text-yellow-500 border border-gray-300 dark:border-gray-600"
              >
                Deactivate your account
              </Button>
            </div>
          </div>
          {/*  <div className="divide-y divide-gray-200 pt-6">
            <div className="">
              <div>
                <h2 className="text-lg font-medium leading-6 text-gray-900">Notifications</h2>
                <p className="mt-1 text-sm text-gray-500">
                  Ornare eu a volutpat eget vulputate. Fringilla commodo amet.
                </p>
              </div>
              <ul role="list" className="mt-2 divide-y divide-gray-200">
                <Switch.Group as="li" className="flex items-center justify-between py-4">
                  <div className="flex flex-col">
                    <Switch.Label as="p" className="text-sm font-medium text-gray-900" passive>
                      Available to hire
                    </Switch.Label>
                    <Switch.Description className="text-sm text-gray-500">
                      Nulla amet tempus sit accumsan. Aliquet turpis sed sit lacinia.
                    </Switch.Description>
                  </div>
                  <Switch
                    checked={availableToHire}
                    onChange={setAvailableToHire}
                    className={clsx(
                      availableToHire ? 'bg-teal-500' : 'bg-gray-200',
                      'relative ml-4 inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2'
                    )}
                  >
                    <span
                      aria-hidden="true"
                      className={clsx(
                        availableToHire ? 'translate-x-5' : 'translate-x-0',
                        'inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
                      )}
                    />
                  </Switch>
                </Switch.Group>
                <Switch.Group as="li" className="flex items-center justify-between py-4">
                  <div className="flex flex-col">
                    <Switch.Label as="p" className="text-sm font-medium text-gray-900" passive>
                      Make account private
                    </Switch.Label>
                    <Switch.Description className="text-sm text-gray-500">
                      Pharetra morbi dui mi mattis tellus sollicitudin cursus pharetra.
                    </Switch.Description>
                  </div>
                  <Switch
                    checked={privateAccount}
                    onChange={setPrivateAccount}
                    className={clsx(
                      privateAccount ? 'bg-teal-500' : 'bg-gray-200',
                      'relative ml-4 inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2'
                    )}
                  >
                    <span
                      aria-hidden="true"
                      className={clsx(
                        privateAccount ? 'translate-x-5' : 'translate-x-0',
                        'inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
                      )}
                    />
                  </Switch>
                </Switch.Group>
                <Switch.Group as="li" className="flex items-center justify-between py-4">
                  <div className="flex flex-col">
                    <Switch.Label as="p" className="text-sm font-medium text-gray-900" passive>
                      Allow commenting
                    </Switch.Label>
                    <Switch.Description className="text-sm text-gray-500">
                      Integer amet, nunc hendrerit adipiscing nam. Elementum ame
                    </Switch.Description>
                  </div>
                  <Switch
                    checked={allowCommenting}
                    onChange={setAllowCommenting}
                    className={clsx(
                      allowCommenting ? 'bg-teal-500' : 'bg-gray-200',
                      'relative ml-4 inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2'
                    )}
                  >
                    <span
                      aria-hidden="true"
                      className={clsx(
                        allowCommenting ? 'translate-x-5' : 'translate-x-0',
                        'inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
                      )}
                    />
                  </Switch>
                </Switch.Group>
                <Switch.Group as="li" className="flex items-center justify-between py-4">
                  <div className="flex flex-col">
                    <Switch.Label as="p" className="text-sm font-medium text-gray-900" passive>
                      Allow mentions
                    </Switch.Label>
                    <Switch.Description className="text-sm text-gray-500">
                      Adipiscing est venenatis enim molestie commodo eu gravid
                    </Switch.Description>
                  </div>
                  <Switch
                    checked={allowMentions}
                    onChange={setAllowMentions}
                    className={clsx(
                      allowMentions ? 'bg-teal-500' : 'bg-gray-200',
                      'relative ml-4 inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2'
                    )}
                  >
                    <span
                      aria-hidden="true"
                      className={clsx(
                        allowMentions ? 'translate-x-5' : 'translate-x-0',
                        'inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
                      )}
                    />
                  </Switch>
                </Switch.Group>
              </ul>
            </div>
            <div className="mt-4 flex justify-end py-4 px-4 sm:px-6">
              <button
                type="button"
                className="inline-flex justify-center rounded-md border border-gray-300 dark:border-gray-600 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="ml-5 inline-flex justify-center rounded-md border border-transparent bg-sky-700 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-sky-800 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
              >
                Save
              </button>
            </div>
          </div> */}
        </div>
        <div className="py-6 px-4 sm:p-6 lg:pb-8">
          <div>
            <h2 className="text-lg font-medium leading-6 text-red-600 dark:text-red-500">
              Delete account
            </h2>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-300">
              Once you delete your account, there is no going back. Please be certain.
            </p>
            <div className="p-10">
              <Button
                onClick={onDelete}
                type="submit"
                variant="primary"
                size="sm"
                className="mt-2 w-full bg-gray-100 dark:bg-gray-700 hover:bg-red-800 font-bold hover:text-white focus:ring-0 focus:ring-offset-0 text-red-500 border border-gray-300 dark:border-gray-600"
              >
                Delete your account
              </Button>
            </div>
          </div>
          {/*  <div className="divide-y divide-gray-200 pt-6">
            <div className="">
              <div>
                <h2 className="text-lg font-medium leading-6 text-gray-900">Notifications</h2>
                <p className="mt-1 text-sm text-gray-500">
                  Ornare eu a volutpat eget vulputate. Fringilla commodo amet.
                </p>
              </div>
              <ul role="list" className="mt-2 divide-y divide-gray-200">
                <Switch.Group as="li" className="flex items-center justify-between py-4">
                  <div className="flex flex-col">
                    <Switch.Label as="p" className="text-sm font-medium text-gray-900" passive>
                      Available to hire
                    </Switch.Label>
                    <Switch.Description className="text-sm text-gray-500">
                      Nulla amet tempus sit accumsan. Aliquet turpis sed sit lacinia.
                    </Switch.Description>
                  </div>
                  <Switch
                    checked={availableToHire}
                    onChange={setAvailableToHire}
                    className={clsx(
                      availableToHire ? 'bg-teal-500' : 'bg-gray-200',
                      'relative ml-4 inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2'
                    )}
                  >
                    <span
                      aria-hidden="true"
                      className={clsx(
                        availableToHire ? 'translate-x-5' : 'translate-x-0',
                        'inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
                      )}
                    />
                  </Switch>
                </Switch.Group>
                <Switch.Group as="li" className="flex items-center justify-between py-4">
                  <div className="flex flex-col">
                    <Switch.Label as="p" className="text-sm font-medium text-gray-900" passive>
                      Make account private
                    </Switch.Label>
                    <Switch.Description className="text-sm text-gray-500">
                      Pharetra morbi dui mi mattis tellus sollicitudin cursus pharetra.
                    </Switch.Description>
                  </div>
                  <Switch
                    checked={privateAccount}
                    onChange={setPrivateAccount}
                    className={clsx(
                      privateAccount ? 'bg-teal-500' : 'bg-gray-200',
                      'relative ml-4 inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2'
                    )}
                  >
                    <span
                      aria-hidden="true"
                      className={clsx(
                        privateAccount ? 'translate-x-5' : 'translate-x-0',
                        'inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
                      )}
                    />
                  </Switch>
                </Switch.Group>
                <Switch.Group as="li" className="flex items-center justify-between py-4">
                  <div className="flex flex-col">
                    <Switch.Label as="p" className="text-sm font-medium text-gray-900" passive>
                      Allow commenting
                    </Switch.Label>
                    <Switch.Description className="text-sm text-gray-500">
                      Integer amet, nunc hendrerit adipiscing nam. Elementum ame
                    </Switch.Description>
                  </div>
                  <Switch
                    checked={allowCommenting}
                    onChange={setAllowCommenting}
                    className={clsx(
                      allowCommenting ? 'bg-teal-500' : 'bg-gray-200',
                      'relative ml-4 inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2'
                    )}
                  >
                    <span
                      aria-hidden="true"
                      className={clsx(
                        allowCommenting ? 'translate-x-5' : 'translate-x-0',
                        'inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
                      )}
                    />
                  </Switch>
                </Switch.Group>
                <Switch.Group as="li" className="flex items-center justify-between py-4">
                  <div className="flex flex-col">
                    <Switch.Label as="p" className="text-sm font-medium text-gray-900" passive>
                      Allow mentions
                    </Switch.Label>
                    <Switch.Description className="text-sm text-gray-500">
                      Adipiscing est venenatis enim molestie commodo eu gravid
                    </Switch.Description>
                  </div>
                  <Switch
                    checked={allowMentions}
                    onChange={setAllowMentions}
                    className={clsx(
                      allowMentions ? 'bg-teal-500' : 'bg-gray-200',
                      'relative ml-4 inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2'
                    )}
                  >
                    <span
                      aria-hidden="true"
                      className={clsx(
                        allowMentions ? 'translate-x-5' : 'translate-x-0',
                        'inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
                      )}
                    />
                  </Switch>
                </Switch.Group>
              </ul>
            </div>
            <div className="mt-4 flex justify-end py-4 px-4 sm:px-6">
              <button
                type="button"
                className="inline-flex justify-center rounded-md border border-gray-300 dark:border-gray-600 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="ml-5 inline-flex justify-center rounded-md border border-transparent bg-sky-700 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-sky-800 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
              >
                Save
              </button>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
}
