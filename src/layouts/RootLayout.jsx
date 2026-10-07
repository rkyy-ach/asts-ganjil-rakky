import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function RootLayout() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      <Navbar />
      <main className="max-w-5xl mx-auto py-10 px-6">
        <Outlet />
      </main>
    </div>
  );
}