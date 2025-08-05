
'use client';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import PortfolioGallery from './PortfolioGallery';
import AdminPanel from './AdminPanel';
import { useState } from 'react';

export default function PortfolioPage() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [adminPassword, setAdminPassword] = useState('');
  const [showAdminLogin, setShowAdminLogin] = useState(false);

  const handleAdminLogin = () => {
    if (adminPassword === 'admin123') {
      setIsAdmin(true);
      setShowAdminLogin(false);
      setAdminPassword('');
    } else {
      alert('Incorrect password');
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              My
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"> Portfolio</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore my creative work and design projects
            </p>
          </div>

          <div className="flex justify-between items-center mb-8">
            <div></div>
            {!isAdmin && (
              <button
                onClick={() => setShowAdminLogin(!showAdminLogin)}
                className="text-sm text-gray-500 hover:text-gray-700 cursor-pointer"
              >
                Admin
              </button>
            )}
            {isAdmin && (
              <button
                onClick={() => setIsAdmin(false)}
                className="bg-red-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-red-600 transition-colors cursor-pointer whitespace-nowrap"
              >
                Exit Admin
              </button>
            )}
          </div>

          {showAdminLogin && !isAdmin && (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
              <div className="bg-white rounded-xl p-6 w-96 max-w-90vw">
                <h3 className="text-xl font-semibold mb-4">Admin Login</h3>
                <input
                  type="password"
                  value={adminPassword}
                  onChange={(e) => setAdminPassword(e.target.value)}
                  placeholder="Enter admin password"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <div className="flex gap-3">
                  <button
                    onClick={handleAdminLogin}
                    className="flex-1 bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors cursor-pointer whitespace-nowrap"
                  >
                    Login
                  </button>
                  <button
                    onClick={() => setShowAdminLogin(false)}
                    className="flex-1 bg-gray-300 text-gray-700 py-3 rounded-lg hover:bg-gray-400 transition-colors cursor-pointer whitespace-nowrap"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}

          {isAdmin ? <AdminPanel /> : <PortfolioGallery />}
        </div>
      </main>
      <Footer />
    </div>
  );
}
