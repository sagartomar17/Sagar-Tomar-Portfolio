import { motion } from 'framer-motion';
import { FaGraduationCap, FaUniversity } from 'react-icons/fa';
import { educationData } from '../../data/portfolioData';
import './Education.css';

export default function Education() {
  return (
    <section id="education" className="section education">
      <div className="container section-inner">
        <div className="section-header">
          <h2 className="section-title about-title education-heading">
            <FaGraduationCap /> My <span className="about-title-highlight">Education</span>
          </h2>
          <p className="education-quote">
            Education Is Not The Learning Of Facts, But The Training Of The Mind To Think.
          </p>
        </div>

        <div className="edu-list">
          {educationData.map((edu, i) => (
            <motion.div
              key={edu.id}
              className="edu-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: 'easeOut' }}
            >
              <div className="edu-card-image">
                {edu.image ? (
                  <img src={edu.image} alt={edu.institute} />
                ) : (
                  <FaUniversity className="edu-card-placeholder" />
                )}
              </div>
              <div className="edu-card-body">
                <h3>{edu.degree}</h3>
                <p className="edu-institute">{edu.institute}</p>
                {edu.grade && <p className="edu-grade">{edu.grade}</p>}
                <p className="edu-status">{edu.status}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
