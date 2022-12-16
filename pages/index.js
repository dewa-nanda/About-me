import Head from 'next/head';
import Image from 'next/image';
import CardComponent from '../component/CardComponent';
import NavbarComponent from '../component/NavbarComponent';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <NavbarComponent />
      <main className={`${styles.main}`}>
        <CardComponent />
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className={`${styles.contentWave}`}>
          <path
            fill="#85586F"
            fill-opacity="1"
            d="M0,160L20,154.7C40,149,80,139,120,117.3C160,96,200,64,240,85.3C280,107,320,181,360,218.7C400,256,440,256,480,261.3C520,267,560,277,600,250.7C640,224,680,160,720,138.7C760,117,800,139,840,138.7C880,139,920,117,960,122.7C1000,128,1040,160,1080,170.7C1120,181,1160,171,1200,149.3C1240,128,1280,96,1320,90.7C1360,85,1400,107,1420,117.3L1440,128L1440,320L1420,320C1400,320,1360,320,1320,320C1280,320,1240,320,1200,320C1160,320,1120,320,1080,320C1040,320,1000,320,960,320C920,320,880,320,840,320C800,320,760,320,720,320C680,320,640,320,600,320C560,320,520,320,480,320C440,320,400,320,360,320C320,320,280,320,240,320C200,320,160,320,120,320C80,320,40,320,20,320L0,320Z"
          ></path>
        </svg>
      </main>
    </>
  );
}
