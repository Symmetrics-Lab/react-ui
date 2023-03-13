import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';
import Switchs from './Switchs/Switchs';

export default function Layout() {
  return (
    <>
      <section className="flex flex-col h-screen bg-sym-wallpaper dark:bg-sym-wallpaper-dark">
        <Navbar />
        <section className="mode-theme px-20 pt-2 text-sm text-end dark:text-white">
          {/* Switchs */}
          <Switchs />
          <div className="w-full h-10">&nbsp;</div>
        </section>
        <main>
          <Outlet />
        </main>
         <Footer />
      </section>
    </>
  );
}
