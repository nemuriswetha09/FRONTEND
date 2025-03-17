import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-black text-white p-4">
      <ul className="flex justify-center space-x-8">
        <li>
          <Link to="/" className="hover:text-gray-300">Home</Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-gray-300">About Us</Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-gray-300">Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
