import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import oliveLogo from '@/assets/olive-logo.png';

const SITE_PASSWORD = 'Marwan';
const STORAGE_KEY = 'olive-studios-access';

interface PasswordGateProps {
  children: React.ReactNode;
}

export const PasswordGate = ({ children }: PasswordGateProps) => {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if already authenticated in this session
    const hasAccess = sessionStorage.getItem(STORAGE_KEY);
    if (hasAccess === 'true') {
      setIsUnlocked(true);
    }
    setIsLoading(false);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password === SITE_PASSWORD) {
      sessionStorage.setItem(STORAGE_KEY, 'true');
      setIsUnlocked(true);
      setError('');
    } else {
      setError('Incorrect password');
      setPassword('');
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-olive-black flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-cream/30 border-t-cream rounded-full animate-spin" />
      </div>
    );
  }

  if (isUnlocked) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen bg-olive-black flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-sm"
      >
        <div className="flex flex-col items-center mb-8">
          <img src={oliveLogo} alt="Olive Studios" className="h-20 md:h-24 w-auto mb-4" />
          <h1 
            className="text-2xl md:text-3xl text-cream tracking-wider"
            style={{ fontFamily: "'Jost', 'Futura', system-ui, sans-serif" }}
          >
            Olive Studios
          </h1>
          <p className="text-stone text-sm mt-2">Enter password to continue</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError('');
              }}
              placeholder="Password"
              autoFocus
              className="w-full bg-transparent border border-cream/30 text-cream placeholder:text-cream/40 text-sm py-3 px-4 rounded-sm focus:outline-none focus:border-cream transition-colors"
            />
            {error && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-red-400 text-xs mt-2"
              >
                {error}
              </motion.p>
            )}
          </div>
          
          <button
            type="submit"
            className="w-full bg-brass text-olive-black py-3 px-4 text-sm font-medium tracking-wide rounded-sm hover:bg-brass/90 transition-colors"
          >
            Enter
          </button>
        </form>
      </motion.div>
    </div>
  );
};
