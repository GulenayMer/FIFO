import Navigation from '../Navigation';
import Footer from './Footer';

export const DefaultLayout = ({ children }) => {
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
