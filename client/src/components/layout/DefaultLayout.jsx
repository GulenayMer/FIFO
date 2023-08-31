import Navigation from "../Navigation";
import Footer from "./Footer";
import DishForm from "../forms/DishForm";

const DefaultLayout = ({ children }) => {
  return (
    <div>
      <header>
        <Navigation />
      </header>
      <main>{children}</main>
      <DishForm />
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default DefaultLayout;
