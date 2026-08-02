import { motion } from 'framer-motion';
import { FaCode, FaFilePdf, FaShoppingCart, FaGlobe, FaImages } from 'react-icons/fa';

const iconLibrary = {
  FaCode,
  FaFilePdf,
  FaShoppingCart,
  FaGlobe,
  FaImages,
};

export default function ProjectCard({ project, index }) {
  const Icon = iconLibrary[project.icon] || FaCode;

  return (
    <motion.div
      className="project-card"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay: (index % 4) * 0.1, ease: 'easeOut' }}
      whileHover={{ y: -8 }}
    >
      <div className="project-card-corner" />
      <div className="project-icon">
        <Icon />
      </div>

      <h3 className="project-title">{project.title}</h3>
      <p className="project-desc">{project.description}</p>
    </motion.div>
  );
}
