import Navigation from '../Navigation';
import Footer from './Footer';

const DefaultLayout = ({ children }) => {
  //console.log(children);
  return (
    <div>
      <header>
        <Navigation />
      </header>
      <main>{children}</main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default DefaultLayout;
