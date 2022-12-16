import styles from '../styles/Navbar.module.css';

const NavbarComponent = () => {
  return (
    <navbar className={`${styles.navbar}`}>
      <section>
        <h1>KET</h1>
      </section>
      <section>
        <class className={`${styles.navbarLink}`}>
          <a href="#aboutMe">About me</a>
          <a>Portofolio</a>
        </class>
      </section>
    </navbar>
  );
};

export default NavbarComponent;
