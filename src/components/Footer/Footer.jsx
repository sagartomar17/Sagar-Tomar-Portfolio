import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaChevronRight,
} from 'react-icons/fa';
import { navLinks, socialLinks, personalInfo } from '../../data/portfolioData';
import './Footer.css';

const iconMap = { FaGithub, FaLinkedin, FaInstagram };

export default function Footer() {
  const handleNavClick = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <span className="footer-logo">{personalInfo.name} Portfolio</span>
            <p>Thank you for visiting my personal portfolio website. Connect with me over socials.</p>
          </div>

          <div className="footer-nav">
            <h4>Quick Links</h4>
            <ul>
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.id);
                    }}
                  >
                    <FaChevronRight className="footer-link-arrow" /> {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-contact">
            <h4>Contact Info</h4>
            <p>
              <FaPhoneAlt /> {personalInfo.phone}
            </p>
            <p>
              <FaEnvelope /> {personalInfo.email}
            </p>
            <p>
              <FaMapMarkerAlt /> {personalInfo.location}
            </p>

            <div className="footer-social-icons">
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
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            Designed With <span className="footer-heart">❤</span> By{' '}
            <span className="footer-name">{personalInfo.name}</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
