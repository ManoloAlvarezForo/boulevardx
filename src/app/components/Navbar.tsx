// src/components/NavBar.tsx
import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="bg-gray-800 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold hover:text-gray-300">
              Boulevardx
            </Link>
          </div>

          <div className="flex-grow">
            <ul className="flex justify-center space-x-8">
              <li>
                <Link
                  href="/appointments"
                  className="text-sm font-medium hover:text-gray-300 transition"
                >
                  Appointments
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm font-medium hover:text-gray-300 transition"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm font-medium hover:text-gray-300 transition"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
