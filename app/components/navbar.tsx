export default function Navbar() {
    return (
      <nav className="bg-black text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-lg font-semibold">My Website</h1>
          <ul className="flex space-x-4">
            <li>
              <a href="/dashboard" className="hover:text-gray-400">Dashboard</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">About</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }