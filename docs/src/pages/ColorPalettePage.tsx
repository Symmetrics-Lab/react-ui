import { Tab } from '@headlessui/react';
import { useState } from 'react';

function ColorPalettePage() {
  const [categories] = useState({
    Primary: [
      {
        title: 'Brand sym-primary',
        color: 'bg-sym-primary',
      },
      {
        title: 'Brand sym-primary-dark',
        color: 'bg-sym-primary-dark',
      },
      {
        title: 'Brand sym-txt-primary',
        color: 'bg-sym-txt-primary',
      },
      {
        title: 'Brand sym-txt-primary-dark',
        color: 'bg-sym-txt-primary-dark',
      },
      {
        title: 'Brand sym-border',
        color: 'bg-sym-border',
      },
      {
        title: 'Brand sym-border-dark',
        color: 'bg-sym-border-dark',
      },
      {
        title: 'Brand sym-btn-txt',
        color: 'bg-sym-btn-txt',
      },
      {
        title: 'Brand sym-wallpaper',
        color: 'bg-sym-wallpaper',
      },
      {
        title: 'Brand sym-wallpaper-dark',
        color: 'bg-sym-wallpaper-dark',
      },
      {
        title: 'Brand sym-layout',
        color: 'bg-sym-layout',
      },
      {
        title: 'Brand sym-layout-dark',
        color: 'bg-sym-layout-dark',
      },
      {
        title: 'Brand sym-error',
        color: 'bg-sym-error',
      },
      {
        title: 'Brand sym-error-dark',
        color: 'bg-sym-error-dark',
      },
      {
        title: 'Brand sym-success',
        color: 'bg-sym-success',
      },
      {
        title: 'Brand sym-success-dark',
        color: 'bg-sym-success-dark',
      },
      {
        title: 'Brand sym-hover',
        color: 'bg-sym-hover',
      },
      {
        title: 'Brand sym-hover-dark',
        color: 'bg-sym-hover-dark',
      },
      {
        title: 'Brand sym-active',
        color: 'bg-sym-active',
      },
      {
        title: 'Brand sym-active-dark',
        color: 'bg-sym-active-dark',
      },
      {
        title: 'Brand sym-placeholder',
        color: 'bg-sym-placeholder',
      },
      {
        title: 'Brand sym-placeholder-dark',
        color: 'bg-sym-placeholder-dark',
      },
      {
        title: 'Brand sym-disabled',
        color: 'bg-sym-disabled',
      },
      {
        title: 'Brand sym-disabled-dark',
        color: 'bg-sym-disabled-dark',
      },
      {
        title: 'Brand sym-purple-200',
        color: 'bg-sym-purple-200',
      },
      {
        title: 'Brand sym-purple-300',
        color: 'bg-sym-purple-300',
      },
      {
        title: 'Brand sym-blue-10',
        color: 'bg-sym-blue-10',
      },
      {
        title: 'Brand sym-blue-100',
        color: 'bg-sym-blue-100',
      },
      {
        title: 'Brand sym-green-50',
        color: 'bg-sym-green-50',
      },
      {
        title: 'Brand sym-green-100',
        color: 'bg-sym-green-100',
      },
    ],
    Secondary: [
      {
        title: 'Brand sym-txt-secondary',
        color: 'bg-sym-txt-secondary',
      },
      {
        title: 'Brand sym-txt-secondary-dark',
        color: 'bg-sym-txt-secondary-dark',
      },

      {
        title: 'Brand sym-secondary-error',
        color: 'bg-sym-secondary-error',
      },
      {
        title: 'Brand sym-secondary-error-dark',
        color: 'bg-sym-secondary-error-dark',
      },
      {
        title: 'Brand sym-secondary-red',
        color: 'bg-sym-secondary-red',
      },
      {
        title: 'Brand sym-secondary-gray',
        color: 'bg-sym-secondary-gray',
      },
      {
        title: 'Brand sym-secondary-gray-dark',
        color: 'bg-sym-secondary-gray-dark',
      },
      {
        title: 'Brand sym-secondary-gray-10',
        color: 'bg-sym-secondary-gray-10',
      },
      {
        title: 'Brand sym-secondary-gray-10-dark',
        color: 'bg-sym-secondary-gray-10-dark',
      },
      {
        title: 'Brand sym-secondary-green',
        color: 'bg-sym-secondary-green',
      },
      {
        title: 'Brand sym-secondary-green-dark',
        color: 'bg-sym-secondary-green-dark',
      },
      {
        title: 'Brand sym-txt-secondary',
        color: 'bg-sym-txt-secondary',
      },
      {
        title: 'Brand sym-txt-secondary-dark',
        color: 'bg-sym-txt-secondary-dark',
      },
    ],
    Input: [
      {
        title: 'Brand sym-input-bg',
        color: 'bg-sym-input-bg',
      },
      {
        title: 'Brand sym-input-bg-dark',
        color: 'bg-sym-input-bg-dark',
      },
      {
        title: 'Brand sym-input-icon',
        color: 'bg-sym-input-icon',
      },
      {
        title: 'Brand sym-input-icon-dark',
        color: 'bg-sym-input-icon-dark',
      },
      {
        title: 'Brand sym-input-icon-inactive',
        color: 'bg-sym-input-icon-inactive',
      },
      {
        title: 'Brand sym-input-icon-inactive-dark',
        color: 'bg-sym-input-icon-inactive-dark',
      },
      {
        title: 'Brand sym-input-border',
        color: 'bg-sym-input-border',
      },
      {
        title: 'Brand sym-input-border-dark',
        color: 'bg-sym-input-border-dark',
      },
    ],
    Header: [
      {
        title: 'Brand sym-header-txt',
        color: 'bg-sym-header-txt',
      },
      {
        title: 'Brand sym-header-txt-dark',
        color: 'bg-sym-header-txt-dark',
      },
      {
        title: 'Brand sym-header-bg',
        color: 'bg-sym-header-bg',
      },
      {
        title: 'Brand sym-header-bg-dark',
        color: 'bg-sym-header-bg-dark',
      },
    ],
    TimeLine: [
      {
        title: 'Brand sym-timeline-line',
        color: 'bg-sym-timeline-line',
      },
      {
        title: 'Brand sym-timeline-line-dark',
        color: 'bg-sym-timeline-line-dark',
      },
      {
        title: 'Brand sym-timeline-icon',
        color: 'bg-sym-timeline-icon',
      },
      {
        title: 'Brand sym-timeline-icon-dark',
        color: 'bg-sym-timeline-icon-dark',
      },
      {
        title: 'Brand sym-timeline-icon-bg',
        color: 'bg-sym-timeline-icon-bg',
      },
      {
        title: 'Brand sym-timeline-icon-bg-dark',
        color: 'bg-sym-timeline-icon-bg-dark',
      },
      {
        title: 'Brand sym-timeline-title',
        color: 'bg-sym-timeline-title',
      },
      {
        title: 'Brand sym-timeline-title-dark',
        color: 'bg-sym-timeline-title-dark',
      },
      {
        title: 'Brand sym-timeline-date',
        color: 'bg-sym-timeline-date',
      },
      {
        title: 'Brand sym-timeline-date-dark',
        color: 'bg-sym-timeline-date-dark',
      },
      {
        title: 'Brand sym-timeline-date',
        color: 'bg-sym-timeline-date',
      },
      {
        title: 'Brand sym-timeline-desc-dark',
        color: 'bg-sym-timeline-desc-dark',
      },
    ],
  });

  return (
    <>
      <section className="bg-sym-wallpaper py-8 dark:bg-sym-wallpaper-dark">
        <main className="relative ">
          <div className="mx-auto max-w-screen-xl px-4 pb-6 sm:px-6 lg:px-8 lg:pb-16">
            <div className="overflow-hidden rounded-lg bg-sym-layout dark:bg-sym-layout-dark dark:border-gray-700 shadow">
              <div className="m-4">
                <h2 className="text-lg font-medium leading-6 text-sym-primary dark:text-sym-primary-dark m-4">
                  Color pallete
                </h2>
                <hr />
                <h2 className="text-lg font-medium leading-6 text-sym-txt-primary dark:text-sym-txt-primary-dark m-4">
                  Theme colors
                </h2>

                {/* TABS */}
                <div className="w-full px-2 sm:px-0">
                  <Tab.Group>
                    <Tab.List className="sm:flex space-x-1 rounded-xl p-1 w-full">
                      {Object.keys(categories).map((category) => (
                        <Tab
                          key={category}
                          className={({ selected }) =>
                            `
                              w-full py-2.5 text-sm font-medium leading-5 dark:text-sym-secondary-gray-dark dark:focus:ring-sym-primary-dark border-solid border-b-2 border-sym-border dark:border-sym-border-dark 
                              ${
                                selected
                                  ? 'text-sym-primary !border-sym-primary dark:!border-sym-primary-dark  dark:text-sym-primary-dark'
                                  : 'hover:bg-sym-hover dark:hover:bg-sym-hover-dark text-sym-txt-primary dark:text-sym-txt-primary-dark'
                              } `
                          }
                        >
                          {category}
                        </Tab>
                      ))}
                    </Tab.List>

                    <Tab.Panels className="mt-2">
                      {Object.values(categories).map((posts, idx) => (
                        <Tab.Panel
                          key={idx}
                          className={`rounded-xl bg-sym-layout dark:bg-sym-layout-dark p-3`}
                        >
                          <ul className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
                            {posts.map((post) => (
                              <li
                                key={post.color}
                                className="relative rounded-md p-3 hover:bg-sym-border dark:hover:bg-sym-border-dark"
                              >
                                <div className="group aspect-w-10 aspect-h-7 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-offset-2">
                                  <div
                                    className={`pointer-events-none group-hover:opacity-75 ${post.color} w-full h-[100px]`}
                                  />
                                  <button
                                    type="button"
                                    className="absolute inset-0 focus:outline-none"
                                  >
                                    <span className="sr-only">View details for {post.title}</span>
                                  </button>
                                </div>

                                <p className="pointer-events-none mt-2 block truncate text-sm font-medium text-sym-txt-primary dark:text-sym-txt-primary-dark">
                                  {post.title}
                                </p>
                              </li>
                            ))}
                          </ul>
                        </Tab.Panel>
                      ))}
                    </Tab.Panels>
                  </Tab.Group>
                </div>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
}

export default ColorPalettePage;
