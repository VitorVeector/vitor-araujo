import { motion } from 'framer-motion';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Home } from '../../pages/Home';
import { Contact } from '../../pages/Contact';
import { NoPage } from '../../pages/NoPage';
import { Formation } from '../../pages/Formation';
import { Experience } from '../../pages/Experience';

export const Animated = () => {
  const location = useLocation();

  return (
    <motion.div
      key={location.pathname}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: .5 }}
    >
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/formation" element={<Formation />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </motion.div>
  );
};