const Footer = () => {
  return (
    <div className="">
      <div className="w-full mx-auto md:flex md:items-center md:justify-between h-14 ">
        <span className="text-lg text-gray-200 m sm:text-center md:justify-start md:ml-5">
          © 2023
          <a
            href="#"
            className="hover:underline "
          >
            FIFOTEAM™
          </a>
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-lg font-medium text-gray-200 sm:mt-0 md:justify-center md:mr-8">
          <li>
            <a
              href="#"
              className="mr-4 hover:underline md:mr-6 hover:text-fuchsia-400"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:underline  hover:text-fuchsia-400"
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
