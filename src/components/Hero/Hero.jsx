import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin, FaInstagram, FaChevronDown, FaUserAstronaut } from 'react-icons/fa';
import { personalInfo, socialLinks } from '../../data/portfolioData';
import './Hero.css';

const iconMap = { FaGithub, FaLinkedin, FaInstagram };

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const [firstName, ...rest] = personalInfo.name.split(' ');
  const lastName = rest.join(' ');

  return (
    <section id="home" className="hero">
      <div className="hero-bg-gradient" />
      <div className="glow-blob hero-blob-1" />
      <div className="glow-blob hero-blob-2" />

      <div className="container hero-inner">
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <span className="section-tag">Welcome to my portfolio</span>

          <h1 className="hero-name">Hi There,</h1>
          <h1 className="hero-name">
            I'm <span className="hero-name-first">{firstName}</span>{' '}
            <span className="hero-name-last">{lastName}</span>
          </h1>

          <div className="hero-role">
            <TypeAnimation
              sequence={[personalInfo.designation, 1800, '', 400]}
              wrapper="span"
              speed={50}
              deletionSpeed={65}
              repeat={Infinity}
              cursor
            />
          </div>

          <div className="hero-actions">
            <a className="btn btn-primary" href={personalInfo.resumeUrl} download>
              Download Resume
            </a>
          </div>

          <div className="hero-socials">
            {socialLinks.map((social) => {
              const Icon = iconMap[social.icon];
              return (
                <a
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                >
                  <Icon />
                </a>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          className="hero-image-wrap"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.15 }}
        >
          <div className="hero-image-ring" />
          <div className="hero-image-frame">
            {personalInfo.avatar ? (
              <img src={personalInfo.avatar} alt={personalInfo.name} />
            ) : (
              <FaUserAstronaut className="hero-image-placeholder" />
            )}
          </div>
        </motion.div>
      </div>

      <motion.button
        className="scroll-indicator"
        onClick={() => scrollTo('about')}
        aria-label="Scroll down"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
      >
        <FaChevronDown />
      </motion.button>
    </section>
  );
}
