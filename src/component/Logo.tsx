import logo from "../assets/logoroyal.jpg";

const Logo = () => {
  return (
    <>
      <a
        href="https://flowbite.com/"
        className="flex items-center space-x-3 rtl:space-x-reverse"
      >
        <img src={logo} className="h-8" alt="Royal store logo" />
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
          Royal Store
        </span>
      </a>
    </>
  );
};

export default Logo;
