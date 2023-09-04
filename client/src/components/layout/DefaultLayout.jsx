//import Navigation from '../Navigation';
import SideTest from '../SideTest';
import Footer from './Footer';
import NavTest from '../NavTest';

const DefaultLayout = ({ children }) => {
  return (
    <div className="grid grid-rows-[8%,auto,auto] grid-cols-[250px,auto] h-screen ">
      <header className="inline-grid col-span-5   grid-rows-1">
        <NavTest />
      </header>
      <aside className="row-span-4 col-start-1 row-start-2 bg-gray-50  h-full">
        <SideTest />
      </aside>
      <main className=" col-span-4 row-span-8 col-start-2 row-start-2">
        {children}
      </main>

      <footer className=" col-span-5 col-start-1 row-start-5 bg-gray-800 ">
        <Footer />
      </footer>
    </div>
  );
};

export default DefaultLayout;
