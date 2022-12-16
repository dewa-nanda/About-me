import styles from '../styles/Card.module.css';
import Image from 'next/image';
import profile from '../public/profileDewa-removebg.png';
import { BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs';

const CardComponent = () => {
  return (
    <div className={`${styles.wrapper}`} id="aboutMe">
      <section className={`${styles.image}`}>
        <Image src={profile} alt="profile" height={430}></Image>
      </section>
      <section className={`${styles.textContent}`}>
        <div className={`${styles.heading}`}>
          <h1>I{"'"}m Front End Developer </h1>
          <h2>KET aka Dewa Putra Hernanda</h2>
        </div>

        <div className={`${styles.mainContent}`}>
          <p>Saya adalah mahasiswa semester 5 dari jurusan Informatika Universitas Ahamad Dahlan</p>
          <p>
            yang sekarang sedang berfokus belajar di bidang front end terutama pada library <span>React</span>
          </p>
        </div>

        <div className={`${styles.socialMedia}`}>
          
          <a href="https://github.com/dewa-nanda" target="blank">
            <BsGithub></BsGithub>
          </a>

          <a href="https://www.instagram.com/dewa_ndn/" target="blank">
            <BsInstagram></BsInstagram>
          </a>

          <a href="https://www.linkedin.com/in/dewa-putra-hernanda-147a99202/" target="blank">
            <BsLinkedin></BsLinkedin>
          </a>
        </div>
      </section>
    </div>
  );
};

export default CardComponent;
