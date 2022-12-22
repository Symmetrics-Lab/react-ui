import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Switchs from './Switchs/Switchs';

export default function Layout() {
  return (
    <>
      <section className="flex flex-col h-screen bg-gray-50 dark:bg-gray-900">
        <Navbar />
        <section className="px-20 pt-2 text-sm text-end dark:text-white text-black-500">
          {/* Switchs */}
          light <Switchs /> dark
          <div className="w-full h-10">&nbsp;</div>
        </section>
        <main>
          <Outlet />
        </main>
        {/* <Footer /> */}
      </section>
    </>
  );
}
