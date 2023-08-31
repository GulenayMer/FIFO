import Navigation from '../Navigation';
import Footer from './Footer';

const DefaultLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="h-10">
        <Navigation />
      </header>
      <main className="flex-1">{children}</main>

      <footer >
        <Footer />
      </footer>
    </div>
  );
};

export default DefaultLayout;
