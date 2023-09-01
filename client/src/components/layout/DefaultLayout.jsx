//import Navigation from '../Navigation';
import SideTest from '../SideTest';
import Footer from './Footer';
import NavTest from '../NavTest';

const DefaultLayout = ({ children }) => {
  return (
    <div className="grid grid-cols-4  h-screen">
      <header className='col-span-4 '>
		<NavTest />
      </header>
		<aside className="col-span-1 h-full bg-gray-50 border-r-2  border-r-gray-100">
		<SideTest />
		</aside>
    <main className="col-span-3">{children}</main> 

      <footer className='col-span-4  bg-gray-800 '>
        <Footer />
      </footer>
    </div>
  );
};

export default DefaultLayout;
