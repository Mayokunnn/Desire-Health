import Logo from "../Logo";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Optional, smooth scrolling animation
    });
  };
  return (
    <div className="flex flex-col justify-between h-full text-sm text-[#354a56] font-medium relative">
      <div className="flex justify-between font-semibold lg:tracking-wide">
        <div className="md:leading-9">
          <Logo color={"footer"} />
          <p className="text-[10px] md:text-base">
            For further Information, Contact
          </p>
          <div className="flex space-x-1 lg:space-x-2">
            <img className="w-4 lg:w-8" src="./assets/mail-icon.svg" />
            <span className="text-[10px] md:text-base">
              info@desirehealthinclusive.com
            </span>
          </div>
          <div className="flex space-x-1 lg:space-x-2">
            <img className="w-4 lg:w-8" src="./assets/phone-icon.svg" />
            <span className="text-[10px] md:text-base">
              +234&nbsp;81&nbsp;5075&nbsp;2548
            </span>
          </div>
          <div className="flex space-x-4 lg:space-x-6 my-2 lg:mt-4">
            <a href="">
              <img
                className="w-6 lg:w-8"
                src="./assets/instagram-icon.svg"
                alt="Instagram Icon"
              />
            </a>
            <a href="">
              <img
                className="w-6 lg:w-8"
                src="./assets/twitter-icon.svg"
                alt="Twitter Icon"
              />
            </a>
            <a href="">
              <img
                className="w-6 lg:w-8"
                src="./assets/facebook-icon.svg"
                alt="Facebook Icon"
              />
            </a>
            <a href="">
              <img
                className="w-6 lg:w-8"
                src="./assets/whatsapp-icon.svg"
                alt="Whatsapp Icon"
              />
            </a>
          </div>
        </div>
        <div className="text-[10px] md:text-base flex gap-[10px] lg:gap-6 ">
          <ul className=" lg:space-y-2">
            <li>About Us</li>
            <li>Join Us</li>
          </ul>
          <ul className="space-y-1 lg:space-y-2">
            <li>Services</li>
            <li>Blogs</li>
            <li>Forums</li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <div className="flex items-center gap-12 justify-center capitalize min-w-full self-end text-[10px] mt-1 lg:mt-1.5 font-semibold">
          <p>&copy; 2024 Desire Health</p>
          <p>Privacy Policy</p>
        </div>
      </div>
      <img
        src="./assets/scroll-icon.svg"
        alt="Scroll-Icon"
        className="hidden lg:block absolute -right-12 -top-6 lg:w-8 cursor-pointer"
        onClick={scrollToTop}
      />
    </div>
  );
}
