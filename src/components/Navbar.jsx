import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Testimony', path: '/testimony' },
    { name: 'FAQ', path: '/faq' },
  ];

  return (
    <header className="flex items-center justify-between border-b px-8 py-4 bg-white shadow-sm">
      <div className="flex items-center space-x-8">
        <Link to="/" className="flex items-center gap-2 font-bold text-lg">
          <div className="w-8 h-8 bg-black text-white rounded-md flex items-center justify-center font-extrabold">
            L
          </div>
          <span>Logo</span>
        </Link>

        <nav className="flex space-x-6">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${
                  isActive ? 'text-black font-semibold' : 'text-gray-500 hover:text-black'
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>
      </div>

      <button className="bg-black text-white px-5 py-2 rounded-md text-sm font-medium hover:bg-gray-800 transition">
        Sign In
      </button>
    </header>
  );
}