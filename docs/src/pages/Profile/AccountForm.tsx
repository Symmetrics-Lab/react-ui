import { Button, Timeline } from '@symlab/react-ui';
import { useEffect, useState } from 'react';
import Alert from '../../components/Alert';
import LoadingPage from '../../components/LoadingPage';
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
        <LoadingPage />
      )}
      <div className="divide-y divide-layout dark:divide-layout-dark lg:col-span-9">
        <div className="py-6 px-4 sm:p-6 lg:pb-8">
          {error && (
            <div className="py-6">
              <Alert code={error?.code} message={error?.message} setError={setError} />
            </div>
          )}
          <div>
            <h2 className="text-lg font-medium leading-6 text-sym-txt-primary dark:text-sym-txt-primary-dark">
              Activity
            </h2>

            <Timeline
              items={[...activities].reverse()}
             
            />
          </div>
        </div>
        <div className="py-6 px-4 sm:p-6 lg:pb-8">
          <div>
            <h2 className="text-lg font-medium leading-6 text-sym-txt-primary dark:text-sym-txt-primary-dark">
              Deactivate account
            </h2>
            <p className="mt-1 text-sm text-sym-secondary-gray dark:text-sym-secondary-gray-dark">
              Once you deactivate your account, you may activate it again at any time.
            </p>
            <div className="p-10">
              <Button
                onClick={onDelete}
                type="submit"
                // variant="outline"
                size="sm"
                className="mt-2 w-full bg-gray-100 dark:bg-gray-700 hover:bg-yellow-500 dark:hover:text-white font-bold hover:text-white focus:ring-0 focus:ring-offset-0 text-yellow-600 dark:text-yellow-500 border bborder-border dark:border-border-dark"
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
                        'inline-block h-5 w-5 transform rounded-full bg-sym-layout shadow ring-0 transition duration-200 ease-in-out'
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
                        'inline-block h-5 w-5 transform rounded-full bg-sym-layout shadow ring-0 transition duration-200 ease-in-out'
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
                        'inline-block h-5 w-5 transform rounded-full bg-sym-layout shadow ring-0 transition duration-200 ease-in-out'
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
                        'inline-block h-5 w-5 transform rounded-full bg-sym-layout shadow ring-0 transition duration-200 ease-in-out'
                      )}
                    />
                  </Switch>
                </Switch.Group>
              </ul>
            </div>
            <div className="mt-4 flex justify-end py-4 px-4 sm:px-6">
              <button
                type="button"
                className="inline-flex justify-center rounded-md border border-gray-300 dark:border-gray-600 bg-sym-layout py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-sym-wallpaper focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
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
            <h2 className="text-lg font-medium leading-6 text-error dark:text-error-dark">
              Delete account
            </h2>
            <p className="mt-1 text-sm text-sym-secondary-gray dark:text-sym-secondary-gray-dark">
              Once you delete your account, there is no going back. Please be certain.
            </p>
            <div className="p-10">
              <Button
                onClick={onDelete}
                type="submit"
                variant="primary"
                size="sm"
                className="mt-2 w-full bg-gray-100 dark:bg-gray-700 hover:bg-sym-secondary-red font-bold hover:text-white focus:ring-0 focus:ring-offset-0 text-error border border-border dark:border-border-dark"
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
                        'inline-block h-5 w-5 transform rounded-full bg-sym-layout shadow ring-0 transition duration-200 ease-in-out'
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
                        'inline-block h-5 w-5 transform rounded-full bg-sym-layout shadow ring-0 transition duration-200 ease-in-out'
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
                        'inline-block h-5 w-5 transform rounded-full bg-sym-layout shadow ring-0 transition duration-200 ease-in-out'
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
                        'inline-block h-5 w-5 transform rounded-full bg-sym-layout shadow ring-0 transition duration-200 ease-in-out'
                      )}
                    />
                  </Switch>
                </Switch.Group>
              </ul>
            </div>
            <div className="mt-4 flex justify-end py-4 px-4 sm:px-6">
              <button
                type="button"
                className="inline-flex justify-center rounded-md border border-gray-300 dark:border-gray-600 bg-sym-layout py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-sym-wallpaper focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
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
