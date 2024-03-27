import Logo from "./Logo";

export default function Footer() {
  return (
    <div className="flex flex-col justify-between h-full text-sm text-[#354a56] font-medium relative">
        <div className="flex justify-between font-semibold tracking-wide">
            <div className="leading-9">
                <Logo color={'footer'}/>
                <p>For further Information, Contact</p>
                <div className="flex space-x-2">
                    <img className="w-8" src="./assets/mail-icon.svg"/><span>info@desirehealthinclusive.com</span>
                </div>
                <div className="flex space-x-2">
                    <img className="w-8" src="./assets/phone-icon.svg"/><span>+234&nbsp;81&nbsp;5075&nbsp;2548</span>
                </div>
                <div className="flex space-x-6 mt-4">
                    <a href=""><img className="w-8" src="./assets/instagram-icon.svg" alt="Instagram Icon" /></a>
                    <a href=""><img className="w-8" src="./assets/twitter-icon.svg" alt="Twitter Icon" /></a>
                    <a href=""><img className="w-8" src="./assets/facebook-icon.svg" alt="Facebook Icon" /></a>
                    <a href=""><img className="w-8" src="./assets/whatsapp-icon.svg" alt="Whatsapp Icon" /></a>
                </div>
            </div>
            <div className="flex gap-6 ">
                <ul className="space-y-2">
                    <li>About Us</li>
                    <li>Join Us</li>
                </ul>
                <ul className="space-y-2">
                    <li>Services</li>
                    <li>Blogs</li>
                    <li>Forums</li>
                </ul>
            </div>
        </div>
        <div> 
            <hr />
            <div className="flex items-center gap-12 justify-center capitalize min-w-full self-end text-[10px] mt-1.5 font-semibold">
                <p>&copy; 2024 Desire Health</p>
                <p>Privacy Policy</p>
            </div>
        </div>
        <img src="./assets/scroll-icon.svg" alt="Scroll-Icon" className="scroll-icon w-8" />
    </div>
  )
}
