const Footer = () => {
  return (
    <div className="">
      <div className="w-full mx-auto md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-200 sm:text-center">
          © 2023
          <a
            href="#"
            className="hover:underline"
          >
            FIFOTEAM™
          </a>
          .
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-200 sm:mt-0">
          <li>
            <a
              href="#"
              className="mr-4 hover:underline md:mr-6 "
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:underline"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
