import Cart from "./Cart";
import Login from "./Login";
import Logo from "./Logo";
import Navigation from "./Navigation";
import TopBar from "./Topbar";

const Header = ({ children }: any) => {
    return (
        <header>
            <TopBar />
            <div className="flex justify-between items-center max-w-[60%] mx-auto p-3">
                <Logo />
                <Login />
            </div>
            <div className=" bg-[#1E1E1E] p-1">
                <div className="max-w-[60%] mx-auto flex justify-between items-center">
                    <Navigation />
                    <Cart />
                </div>
            </div>
        </header>
    );
}

export default Header;