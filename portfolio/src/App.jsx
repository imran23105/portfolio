import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import AppRoutes from './routes/AppRoutes';
import Loader from './components/Loader/Loader';
import Cursor from './components/Cursor/Cursor';

const App = () => {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {/* Custom Cursor */}
      <Cursor />

      {/* Loader */}
      <AnimatePresence>
        {loading && <Loader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {/* Main App - fade in after loader */}
      <AnimatePresence>
        {!loading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <AppRoutes />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default App;
