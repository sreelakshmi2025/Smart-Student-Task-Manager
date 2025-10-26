
import React, { useState, useEffect, useCallback } from 'react';
import { Auth } from './pages/Auth';
import { Dashboard } from './pages/Dashboard';
import { User } from './types';
import { Header } from './components/Header';
import { Spinner } from './components/icons';

const App: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate checking for an existing session
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setTimeout(() => setLoading(false), 500); // Simulate loading delay
  }, []);

  const handleLogin = useCallback((loggedInUser: User) => {
    localStorage.setItem('user', JSON.stringify(loggedInUser));
    setUser(loggedInUser);
  }, []);

  const handleLogout = useCallback(() => {
    localStorage.removeItem('user');
    localStorage.removeItem('tasks'); // Also clear tasks on logout
    setUser(null);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-slate-100">
        <Spinner className="h-12 w-12 text-blue-600" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100 text-slate-800">
      {user ? (
        <>
          <Header user={user} onLogout={handleLogout} />
          <main>
            <Dashboard />
          </main>
        </>
      ) : (
        <Auth onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;
