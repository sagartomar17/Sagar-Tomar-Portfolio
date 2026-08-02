import { motion } from 'framer-motion';
import { FaUserAstronaut, FaLinkedin } from 'react-icons/fa';
import { personalInfo, socialLinks } from '../../data/portfolioData';
import './About.css';

const infoRows = [
  { label: 'Age', value: personalInfo.age },
  { label: 'Phone', value: personalInfo.phone },
  { label: 'Email', value: personalInfo.email },
  { label: 'Place', value: personalInfo.location },
];

export default function About() {
  const linkedin = socialLinks.find((s) => s.id === 'linkedin');

  return (
    <section id="about" className="section about">
      <div className="container section-inner">
        <div className="section-header">
          <span className="section-tag">About</span>
          <h2 className="section-title about-title">
            About <span className="about-title-highlight">Me</span>
          </h2>
        </div>

        <div className="about-main">
          <motion.div
            className="about-photo"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            {personalInfo.avatar ? (
              <img src={personalInfo.avatar} alt={personalInfo.name} />
            ) : (
              <FaUserAstronaut className="about-photo-placeholder" />
            )}
          </motion.div>

          <motion.div
            className="about-info"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
          >
            <h3>
              I'm <span className="gradient-text">{personalInfo.name}</span>
            </h3>
            <p className="about-role">{personalInfo.role}</p>

            <p className="about-desc">{personalInfo.about}</p>

            <div className="about-rows">
              {infoRows.map((row) => (
                <p key={row.label} className="about-row">
                  <span className="about-row-label">{row.label}:</span> {row.value}
                </p>
              ))}
            </div>

            {linkedin && (
              <a href={linkedin.url} target="_blank" rel="noreferrer" className="btn btn-primary">
                <FaLinkedin /> LinkedIn
              </a>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
