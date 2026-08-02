import { motion, AnimatePresence } from 'framer-motion';
import './Loader.css';

export default function Loader({ isLoading }) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          <div className="loader-content">
            <motion.div
              className="loader-ring"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1.1, ease: 'linear' }}
            />
            <motion.span
              className="loader-text gradient-text"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Sagar Tomar
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
