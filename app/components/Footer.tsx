import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.links}>
        <a href="/about">About Us</a>
        <a href="/contact">Contact</a>
        <a href="/careers">Careers</a>
      </div>
      <div className={styles.socialIcons}>
        <a href="#"><i className="fab fa-facebook"></i></a>
        <a href="#"><i className="fab fa-twitter"></i></a>
        <a href="#"><i className="fab fa-linkedin"></i></a>
      </div>
    </footer>
  );
}

export default Footer;
