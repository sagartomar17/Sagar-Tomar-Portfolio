import { motion } from 'framer-motion';
import { skillGroups } from '../../data/portfolioData';
import './Skills.css';

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="container section-inner">
        {skillGroups.map((group, gi) => (
          <div key={group.id} className="skills-group">
            <motion.h2
              className="skills-heading"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: gi * 0.1 }}
            >
              {group.title}
              <span className="skills-heading-divider" />
            </motion.h2>

            <ul className="skills-list">
              {group.items.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                >
                  <span className="skills-bullet">☞</span>
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
