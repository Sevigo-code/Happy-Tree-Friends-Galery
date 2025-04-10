import { Link } from "react-router-dom";
import { useRef } from "react";
import "./styles/navbar.css";
import Logo from "../assets/logo1.png";
import SearchBar from "./search.jsx";

function NavBar({ setQuery }) {
    const targetRef = useRef(null);

    const handleScrollUp = (e) => {
        e.preventDefault();
        if (targetRef.current) {
            targetRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <>
            <nav className="nav-bar">
                <Link to={"/"} onClick={handleScrollUp}>
                    <img className="logo" src={Logo} alt="Logo" width="100" />
                </Link>

                <div className="search">
                    <SearchBar setQuery={setQuery} />
                </div>
            </nav>
            <div ref={targetRef}></div>
        </>
    );
}

export default NavBar;