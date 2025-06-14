import { Link } from "react-router";

const Sidenav = () => {
    return (
        <aside className="row-start-2 col-start-1 bg-gray-100 p-4">
            <nav className="flex flex-col justify-between">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/form">Form</Link>
            </nav>
        </aside>
    );
};

export default Sidenav;
