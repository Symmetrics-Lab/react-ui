import { Pallete } from '@symlab/react-ui';
function ColorPalettePage() {
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
                <Pallete />
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
}

export default ColorPalettePage;
