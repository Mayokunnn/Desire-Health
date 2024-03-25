import Logo from "./Logo";

export default function Footer() {
  return (
    <div>
        <div>
            <div>
                <Logo color={'footer'}/>
            </div>
            <div>
                <ul>
                    <li></li>
                    <li></li>
                </ul>
                <ul>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </div>
        <hr />
        <div className="flex space-between capitalize min-w-full">
            <p>&copy; 2024 Desire Health</p>
            <p>Privacy Policy</p>
        </div>
    </div>
  )
}
